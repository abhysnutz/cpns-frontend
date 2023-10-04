import React, { useEffect, useState } from 'react'
import style from './Signup.module.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AuthNotification from '../../components/app/authentication/Notification';

export default function ForgotPassword() {
    const [formData, setFormData] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const [notifs, setNotifs] = useState([]);
    const [isNotifSuccess, setIsNotifSuccess] = useState(false);
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) navigate('/app')
    })

    const handleSubmit = async e => {
        e.preventDefault()
        setIsSubmit(true)
        setNotifs([])
        setIsNotifSuccess(false)

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/forgot-password`,formData);
            if(response.data.error.length) {
                setIsSubmit(false)
                return setNotifs(response.data.error)
            }else{
                setIsSubmit(false)
                setIsNotifSuccess(true)
                setEmail('')
                setNotifs(['Email reset password telah kami kirim. Jangan lupa periksa tab spam juga, ya!'])
            }
        } catch (err) {
            setNotifs([err.message])
            setIsSubmit(false)
        }
    }

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
        setEmail(value)
    }

    return (
        <div id="app" className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src="https://ayopppk.com/assets/logo/ayopppk.svg" alt="Lupa Password AYOPPPK"/>
                <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
                    Lupa Password
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <AuthNotification notifs={notifs} isSuccess={isNotifSuccess}/>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Alamat Email
                            </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" onChange={handleChange} required value={email} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                Belum punya akun? <br/>
                                <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Daftar Sekarang!
                                </Link>
                            </div>
                        </div>
                        <div>
                            {
                                !isSubmit ? 
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500">
                                    <span className="text-base">
                                        Kirim link reset password
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