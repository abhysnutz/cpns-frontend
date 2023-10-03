import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
    const [email, setEmail] = useState('')
    const [formData, setFormData] = useState({'email':'','password':'','password_confirmation':''})
    const [errors, setErrors] = useState([]);
    const [isAvailable, setIsAvailable] = useState(false);
    let {signature} = useParams()

    useEffect(() => {
        getResetPassword(signature)
    },[])

    const Validation = ({error}) => {
        if(error.length){
            return (
                <div className="mb-4">
                    <div className="font-medium text-red-600">
                        Whoops! Terjadi kesalahan.
                    </div>
                    <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                        {error}
                    </ul>
                </div>
            )
        }
    }

    const getResetPassword = async signature =>{
        setIsAvailable(false)

        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/reset-password`,{params: {signature}});
            if(response.data.error) return setErrors(response.data.error)
            if(!response.data.email) return setErrors('Email tidak ditemukan')
            
            setEmail(response.data.email)
            setIsAvailable(true)
            setFormData({...formData,['email']:response.data.email})
        } catch (error) {
            setErrors(error.message)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/reset-password`,formData);
            if(response.data.error) return setErrors(response.data.error)
            return <Navigate to="/signin"/>
        } catch (error) {
            return setErrors(error.message)
        }

    }

    const handleChange = e => {
        const {name, value} = e.target
        setFormData({...formData,[name]:value})
    }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src="https://ayopppk.com/assets/logo/ayopppk.svg" alt="Reset Password AYOPPPK" />
                <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
                    Atur ulang password
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Validation error={errors} />
                    { 
                        isAvailable ? 
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" autoComplete="email" required className="shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-3 bg-gray-200" defaultValue={email}/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input id="password" name="password" type="password" autoComplete="password" required onChange={handleChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                                        Ulangi Password
                                    </label>
                                    <div className="mt-1">
                                        <input id="password_confirmation" name="password_confirmation" type="password" autoComplete="password_confirmation" required onChange={handleChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Atur ulang kata sandi
                                    </button>
                                </div>
                            </form>
                        :
                        <div className="text-sm text-center">
                            <br /><br />
                            <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Atur ulang password!
                            </Link>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}
