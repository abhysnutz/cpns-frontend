import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Signin() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) navigate('/')
    })
    const Validation = ({err}) => {
        if(err){
            return (
                <div className="mb-4">
                    <div className="font-medium text-red-600">
                        Whoops! Terjadi kesalahan.
                    </div>
                    <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                        <li>{err}</li>
                    </ul>
                </div>
            )
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/login`,formData)
            .then((response) => {
                console.log(response.data);
                if(response.data.token){
                    localStorage.setItem('token', response.data.token);
                    navigate('/app')
                }else{
                    setError(response.data.message)
                }
            }).catch((err) => {
                setError(err.message)
            })
    }

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({...formData, [name]:value})
        console.log(formData);
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* <img className="mx-auto h-12 w-auto" src="https://ayopppk.com/assets/logo/ayopppk.svg" alt="Login AYOPPPK" /> */}
                <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
                    Login ke Akun Anda
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Validation err={error}/>
                    <form className="space-y-5" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" required onChange={handleChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autoComplete="current-password" required onChange={handleChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember" name="remember" type="checkbox" defaultChecked className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                                    Ingat Saya?
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                Belum punya akun? <br/>
                                <Link to='/signup' className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Daftar dulu, yuk!
                                </Link>
                            </div>
                            <div className="text-sm text-right">
                                Lupa password? <br />
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Atur ulang password!
                                </a>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Masuk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
