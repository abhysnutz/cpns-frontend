import axios from 'axios';
import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function VerifyMail() {
    const navigate = useNavigate();
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const jwtToken = urlParams.get('tokenauth'); // Assuming 'jwt' is the parameter name

        if (jwtToken) vm(jwtToken)
    },[])
    
    const vm = async token => {
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/mail-verify`,{token})
            .then(response => {
                const token = localStorage.getItem('token');

                if(token) localStorage.removeItem('token');

                localStorage.setItem('token', response.data.token);

                return navigate('/app')
            })
        } catch (error) {
            console.log(error);        
        }
    }
}
