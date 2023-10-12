import React, { useEffect, useState } from 'react'
import { GetUser } from '../../api/ApiUser'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import style from '../authentication/Signup.module.css'
import { GetProvince } from '../../api/ApiProvince.mjs'
import { GetCity } from '../../api/ApiCity.mjs'

export default function Account() {
    const [isSubmit, setIsSubmit] = useState(false);
    const [formData1, setFormData1] = useState({})
    const [formData2, setFormData2] = useState({})
    const [formData3, setFormData3] = useState({})
    const [menu, setMenu] = useState(1)
    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [birth, setBirth] = useState('')
    const [education, setEducation] = useState("")
    const [major, setMajor] = useState('')
    const [address, setAddress] = useState('')
    const [notifs, setNotifs] = useState([]);
    const [isNotifSuccess, setIsNotifSuccess] = useState(false);
    const [provinces, setProvinces] = useState([])
    const [cities, setCities] = useState([])
    const [provinceId, setProvinceId] = useState('')
    const [cityId, setCityId] = useState('')
      
    useEffect(() => {
        getProvince()
        getData()
    },[])

    const getProvince =  async () => {
        setProvinces(await GetProvince())
    }

    const getCity = async (provinceId) => {
        setCities(await GetCity(provinceId))
    }

    const getData = async () => {
        const user = await GetUser();
        console.log(user);
        setAvatar(`https://ui-avatars.com/api/?name=${user.name}&background=6366f1&color=fff`)
        setFormData1({name:user.name,"update":"akun"})
        setFormData2({phone:user.profile.phone,birth:user.profile.birth,education:user.profile.education,major:user.profile.major,address:user.profile.address,provinceId:user.profile.provinceId,cityId:user.profile.cityId,"update":"profil"})
        setFormData3({"update":"password"})
        setName(user.name)
        setEmail(user.email)

        if(user.profile.phone) setPhone(user.profile.phone)
        if(user.profile.birth) setBirth(user.profile.birth)
        if(user.profile.education) setEducation(user.profile.education)
        if(user.profile.major) setMajor(user.profile.major)
        if(user.profile.address) setAddress(user.profile.address)
        if(user.profile.provinceId) {
            setProvinceId(user.profile.provinceId)
            getCity(user.profile.provinceId)
        }
        if(user.profile.cityId) setCityId(user.profile.cityId)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmit(true)
        setNotifs([])
        setIsNotifSuccess(false)

        const {id} = e.target
        if(id === 'update-name'){
            update(formData1)
        }else if(id === 'update-profile'){
            update(formData2)
        }else{
            console.log(formData3);
        }
    }

    const update = async data => {
        const token = localStorage.getItem('token');
        const decode = jwt_decode(token);
        console.log(data);
        const user_id = decode.userId
        try {
            const response = await axios.patch(`${import.meta.env.VITE_BACKEND_API_URL}/api/user/${user_id}`,data,{
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            setIsSubmit(false)
            setIsNotifSuccess(true)
            setNotifs(response.data.message)
        } catch (error) {
            setIsSubmit(false)
            if(typeof error.response.data.message !== 'undefined'){
                setNotifs(error.response.data.message)
            }else{
                setNotifs([error.message])
            }
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name == 'name'){
            setName(value)
            setFormData1({...formData1,[name]:value})
        }

        if(name == 'phone' || name == 'birth' || name == 'education' || name == 'major' || name == 'address' || name == 'provinceId' || name == 'cityId'){
            if(name == 'phone') setPhone(value)
            if(name == 'birth') setBirth(value)
            if(name == 'education') setEducation(value)
            if(name == 'major') setMajor(value)
            if(name == 'address') setAddress(value)
            if(name == 'provinceId') {
                setProvinceId(value)
                getCity(value)
            }
            if(name == 'cityId') setCityId(value)

            setFormData2({...formData2,[name]:value})
        }
    }

    const Notification = ({notifs, isSuccess}) => {
        if(notifs.length){
            return (
                isSuccess ?
                    <div className="rounded-md bg-green-50 p-4 my-5">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-green-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-bold text-green-800">
                                    Berhasil!
                                </p>
                                <p className="text-sm font-medium text-green-800">
                                    {notifs}
                                </p>
                            </div>
                            <div className="ml-auto pl-3">
                                <div className="-mx-1.5 -my-1.5">
                                    <button className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none" onClick={() => setNotifs([])}>
                                        <span className="sr-only">Dismiss</span> 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                
                    <div className="rounded-md bg-red-50 p-4 my-5">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-red-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-bold text-pink-800">
                                    Terjadi Kesalahan!
                                </p>
                                <ul className="text-sm font-medium text-pink-800 list-disc">
                                    {notifs.map((notif,index) => (
                                        <li key={index} className="ml-4">
                                            <a> {notif} </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ml-auto pl-3">
                                <div className="-mx-1.5 -my-1.5">
                                    <button className="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none" onClick={() => setNotifs([])}>
                                        <span className="sr-only">Dismiss</span> 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }
    }

    return (
        <main tabIndex="0" className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="pt-4 pb-20 sm:pt-6 sm:pb-6">
                <div className="mx-auto px-4 sm:px-6 md:px-5">
                    <div className="bg-white px-5 pt-5 pb-8 rounded-lg">
                        <div>
                            <nav aria-label="Back" className="sm:hidden">
                                <a href="https://ayopppk.com/user" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    Kembali
                                </a>
                            </nav>
                            <nav aria-label="Breadcrumb" className="hidden sm:flex mb-6">
                                <ol className="flex items-center space-x-4">
                                    <li>
                                        <div>
                                            <a href="https://ayopppk.com/user" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                                <svg x-description="Heroicon name: solid/home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="flex-shrink-0 h-5 w-5">
                                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="flex-shrink-0 h-5 w-5 text-gray-400">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                            <a href="https://ayopppk.com/user/akun" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                                                Akun Saya
                                            </a>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="mt-5 md:mt-2 md:flex md:items-center md:justify-between bg-white mb-5">
                            <div className="flex-1 min-w-0">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Akun Saya</h2>
                            </div>
                        </div>
                        <div>
                            <Notification notifs={notifs} isSuccess={isNotifSuccess}/>
                            <div className="xl:grid xl:grid-cols-12 xl:space-y-0 space-y-4 xl:space-x-4">
                                <div className="xl:col-span-3">
                                    <aside className="bg-white rounded-md shadow border py-4">
                                        <div className="flex-shrink-0 flex border-b border-gary-300 px-4 pb-4">
                                            <div className="flex-shrink-0 w-full group block">
                                                <div className="flex items-center">
                                                    <div>
                                                        <img src={avatar} alt="" className="h-8 sm:h-10 w-8 sm:w-10 rounded-full"/>
                                                    </div>
                                                    <div className="ml-3 truncate">
                                                        <p className="text-sm font-medium text-gray-800 truncate">{name}</p>
                                                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-800 truncate">{email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <nav aria-label="Tabs" className="space-y-1">
                                            <a href="#" className={` ${menu == 1 ? 'bg-blue-50 border-blue-700 text-blue-700 hover:bg-blue-50 hover:text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-800'} group border-l-4 px-3 py-2 flex items-center text-sm font-medium`} onClick={() => setMenu(1)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-700 group-hover:text-blue-700 flex-shrink-0 -ml-1 mr-3 h-5 sm:h-6 w-5 sm:w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                                                </svg>
                                                <span className="truncate">Akun</span>
                                            </a>
                                            <a href="#" className={` ${menu == 2 ? 'bg-blue-50 border-blue-700 text-blue-700 hover:bg-blue-50 hover:text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-800'} group border-l-4 px-3 py-2 flex items-center text-sm font-medium`} onClick={() => setMenu(2)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-5 sm:h-6 w-5 sm:w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="truncate">Profil</span>
                                            </a>
                                            <a href="#" className={` ${menu == 3 ? 'bg-blue-50 border-blue-700 text-blue-700 hover:bg-blue-50 hover:text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-800'} group border-l-4 px-3 py-2 flex items-center text-sm font-medium`} onClick={() => setMenu(3)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-5 sm:h-6 w-5 sm:w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                                                </svg>
                                                <span className="truncate">Ubah Password</span>
                                            </a>
                                        </nav>
                                    </aside>
                                </div>
                                <div className="xl:col-span-9">
                                    <div className={menu == 1 ? 'block' : 'hidden'}>
                                        <form id="update-name" onSubmit={handleSubmit}>
                                            <div className="grid grid-cols-1 gap-4">
                                                <div>
                                                    <label className="text-sm font-medium">Nama:</label>
                                                    <input type="text" placeholder="Nama" name="name" required className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3" value={name} onChange={handleChange}/>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium">Email:</label>
                                                    <input disabled="disabled" type="email" placeholder="Alamat email" className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3 bg-gray-200" value={email}/>
                                                </div>
                                            </div>
                                            {
                                                 !isSubmit ? 
                                                    <button type="submit" className="mt-5 bg-blackinline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500">Simpan Perubahan</button>
                                                 :
                                                 <button type="submit" disabled className="mt-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 items-center bg-indigo-300 hover:bg-indigo-300 focus:ring-indigo-100">
                                                    <span className="flex btnDisabled">
                                                        <span style={{ paddingRight: 50 }}>Tunggu sebentar</span>
                                                        <img src="https://ayopppk.com/assets/loading/Pulse-1s-200px.svg" className={style.transform} alt="" />
                                                    </span>
                                                </button>
                                            }
                                        </form>
                                    </div>
                                    <div className={menu == 2 ? 'block' : 'hidden'}>
                                        <form id="update-profile" onSubmit={handleSubmit}>
                                            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                                                <div className="grid grid-cols-1 gap-4">
                                                    <div>
                                                        <label className="text-sm font-medium">Telepon:</label>
                                                        <input type="text" placeholder="phone" required name="phone" className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3" value={phone} onChange={handleChange}/>
                                                    </div>
                                                    <div>
                                                        <label className="text-sm font-medium">Tanggal Lahir Anda: -</label>
                                                        <input type="date" name="birth" required className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3" value={birth} onChange={handleChange} />
                                                    </div>
                                                    <div>
                                                        <label className="text-sm font-medium">Pendidikan Terakhir:</label> 
                                                        <select name="education" className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3" value={education} onChange={handleChange}>
                                                            <option value="" disabled="disabled">-- Pilih Pendidikan --</option>
                                                            <option value="SD">SD/MI Sederajat</option>
                                                            <option value="SMP">SMP/MTs Sederajat</option>
                                                            <option value="SMA">SMA/SMK/MA Sederajat</option>
                                                            <option value="D1">D1</option>
                                                            <option value="D2">D2</option>
                                                            <option value="D3">D3</option>
                                                            <option value="D4">D4</option>
                                                            <option value="S1">S1</option>
                                                            <option value="S2">S2</option>
                                                            <option value="S3">S3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-4">
                                                    <div>
                                                        <label className="text-sm font-medium">Jurusan:</label>
                                                        <input type="text" name="major" placeholder="Jurusan" className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3" value={major} onChange={handleChange}/>
                                                    </div>
                                                    <div>
                                                        <label className="text-sm font-medium">Provinsi:</label> 
                                                        <select name='provinceId' className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3" value={provinceId} onChange={handleChange}>
                                                            <option value="" disabled="disabled">-- Pilih Provinsi --</option>
                                                            {
                                                                provinces.map((province, index) => (
                                                                    <option key={index} value={province.id}>{province.name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="text-sm font-medium">Kota/Kabupaten:</label> 
                                                        <select name='cityId' className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3" value={cityId} onChange={handleChange}>
                                                            <option value="" disabled="disabled">-- Pilih Kota/Kabupaten --</option>
                                                            {
                                                                cities.map((city, index) => (
                                                                    <option key={index} value={city.id}>{city.name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium">Alamat:</label>
                                                    <textarea value={address} onChange={handleChange} name='address' cols="30" rows="5" className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3"></textarea>
                                                </div>
                                            </div>
                                            {
                                                !isSubmit ? 
                                                    <button type="submit" className="mt-5 bg-blackinline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500">Simpan Profil</button>
                                                :
                                                <button type="submit" disabled className="mt-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 items-center bg-indigo-300 hover:bg-indigo-300 focus:ring-indigo-100">
                                                    <span className="flex btnDisabled">
                                                        <span style={{ paddingRight: 50 }}>Tunggu sebentar</span>
                                                        <img src="https://ayopppk.com/assets/loading/Pulse-1s-200px.svg" className={style.transform} alt="" />
                                                    </span>
                                                </button>
                                            }
                                        </form>
                                    </div>
                                    <div className={menu == 3 ? 'block' : 'hidden'}>
                                        <form id="update-password" onSubmit={handleSubmit}>
                                            <div className="grid grid-cols-1 gap-4">
                                                <div>
                                                    <label className="text-sm font-medium">Password Sekarang:</label>
                                                    <input type="password" placeholder="Password Sekarang" className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3"/>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium">Password Baru:</label>
                                                    <input type="password" placeholder="Password Baru" className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3"/>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium">Ulangi Password Baru:</label>
                                                    <input type="password" placeholder="Ulangi Password Baru" className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3"/>
                                                </div>
                                            </div>
                                            <button type="submit" className="mt-5 bg-blackinline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500">Simpan Password Baru</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}