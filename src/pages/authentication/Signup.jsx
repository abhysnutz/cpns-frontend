import React, { useEffect, useState } from 'react'
import style from './Signup.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import AuthNotification from '../../components/app/authentication/Notification';

export default function Signup() {
    const [formData, setFormData] = useState({'nama':'','email':'','password':'','referrer':''})
    const [isSubmit, setIsSubmit] = useState(false);
    const [notifs, setNotifs] = useState([]);
    const [isNotifSuccess, setIsNotifSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) navigate('/app')
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setIsSubmit(true)
        
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/user`,formData);
            if(!response.data.success) {
                setIsSubmit(false)
                return setNotifs(response.data.error)
            }else{
                localStorage.setItem('token', response.data.token);
                return navigate('/app/verify-email')
            }
        } catch (err) {
            setNotifs([err.message])
            setIsSubmit(false)
        }
    }

    return (
        <div id="app" className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* <img className="mx-auto h-12 w-auto" src="https://ayopppk.com/assets/logo/ayopppk.svg" alt="Daftar AYOPPPK" /> */}
                <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
                    Daftar Akun
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto w-full md:w-1/2">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <AuthNotification notifs={notifs} isSuccess={isNotifSuccess}/>
                    <form className="space-y-5 " onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                                    Nama
                                </label>
                                <div className="mt-1">
                                    <input id="nama" name="name" type="text" autoComplete="nama" onChange={handleChange} required defaultValue="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                                </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" autoComplete="email" onChange={handleChange} required defaultValue="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password" onChange={handleChange} autoComplete="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                                    Ulangi password
                                </label>
                                <div className="mt-1">
                                    <input id="password_confirmation" name="password_confirmation" type="password" onChange={handleChange} autoComplete="password_confirmation" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <label className="block text-sm font-medium text-gray-700">Darimana tahu AYOPPPK?</label> */}
                            <select name="referrer" defaultValue="" onChange={handleChange} className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" required >
                                <option value="" disabled>
                                    -- Silakan Pilih Referrer --
                                </option>
                                <option value="Google">Google</option>
                                <option value="Mesin pencari lainnya">Mesin pencari lainnya</option>
                                <option value="YouTube">YouTube</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Teman atau Saudara">Teman, Pacar atau Saudara</option>
                                <option value="Iklan">Iklan</option>
                                <option value="Forum">Forum</option>
                                <option value="Media sosial lainnya">Media sosial lainnya</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                Sudah punya akun? <br />
                                <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Masuk Sekarang!
                                </Link>
                            </div>
                        </div>
                        <div>
                            {
                                !isSubmit ? 
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500">
                                    <span className="text-base">
                                        Daftar
                                    </span>
                                </button>
                                :
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 items-center bg-indigo-300 hover:bg-indigo-300 focus:ring-indigo-100">
                                    <span className="flex btnDisabled">
                                        <span style={{ paddingRight: 50 }}>Tunggu sebentar</span>
                                        <img src="https://ayopppk.com/assets/loading/Pulse-1s-200px.svg" className={style.transform} alt="" />
                                    </span>
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}