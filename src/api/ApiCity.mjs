import axios from 'axios'

export const GetCity = async (provinceId) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/city`,{
            params : {provinceId},
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data.data
    } catch (error) {
        console.log(error.message);
    }
}