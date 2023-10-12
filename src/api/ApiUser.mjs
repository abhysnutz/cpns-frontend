import jwt_decode from 'jwt-decode'
import axios from 'axios'

export const GetUser = async () => {
    const token = localStorage.getItem('token');
    const decode = jwt_decode(token);

    const user_id = decode.userId
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/user/${user_id}`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data.data
    } catch (error) {
        console.log(error.message);
        // localStorage.removeItem('token');
        // navigate("/")
    }
}