import axios from "axios";

const api=axios.create({
    baseURL:process.env.NEXT_PUBLIC_BASEURL,
    timeout:30000,
    timeoutErrorMessage:"Request Timed Out",
    headers:{
        "Content-Type":"application/json",
        
    }
    
})
export default api