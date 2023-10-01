import axios from 'axios';
import React from 'react'
import { Navigate } from 'react-router-dom';

export default async function TokenVerify() {
    const token = localStorage.getItem('token');

    if(!token) return <Navigate to="/auth/login" />;

    await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/verify`,{token})
        .then((response) => {
            if(response.data.success == false){
                localStorage.removeItem('token');
                window.location.reload();
            }
        })
        .catch((error) => {
            console.log(error.message);
        })
}
