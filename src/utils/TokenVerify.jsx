import axios from 'axios';
import React from 'react'
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

export default async function TokenVerify() {
    const token = localStorage.getItem('token');

    if(!token) return <Navigate to="/auth/login" />;

    try {
        const signature = token.split('.')[2]
        const decoded = jwt_decode(token);
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/session-verify`,{userId:decoded.userId, token:signature});
        
        if(!response.data.session){
            localStorage.removeItem('token')
            location.reload()
        }
    } catch (error) {
        localStorage.removeItem('token')
        location.reload()
    }
    // await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/verify`,{token})
    //     .then((response) => {
    //         if(response.data.success == false){
    //             localStorage.removeItem('token');
    //             window.location.reload();
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(error.message);
    //     })
}
