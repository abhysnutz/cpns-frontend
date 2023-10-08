import React, { useEffect } from 'react'
import TokenVerify from '../../utils/TokenVerify'

export default function Home() {
    
    
    useEffect(() => {
        TokenVerify()
    },[])

    // const TokenVerify = async () => {
    //     try {
    //         const token = localStorage.getItem('token');
    //         const signature = token.split('.')[2]
    //         const decoded = jwt_decode(token);
            
    //         const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/session-verify`,{userId:decoded.userId, token:signature});
            
    //         if(!response.data.session){
    //             localStorage.removeItem('token')
    //             location.reload()
    //         }
    //     } catch (error) {
    //         localStorage.removeItem('token')
    //         location.reload()
    //     }
    // }

    return (
        <div>Home</div>
    )
}
