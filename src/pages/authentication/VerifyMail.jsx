import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router';

export default function VerifyMail() {
    let status = true;
    // let {token} = useParams()
    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const jwtToken = urlParams.get('tokenauth'); // Assuming 'jwt' is the parameter name

        if (jwtToken) vm(jwtToken)
    },[])
    
    const vm = async token => {
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/mail-verify`,{token})
            .then(response => {
                console.log(response.data);
            })
        } catch (error) {
            console.log(error);        
        }
    }
}
