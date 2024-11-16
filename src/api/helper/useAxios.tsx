import axios from "axios"
import { BaseUrl } from "../../config/config"


const useAxios = () => {
    const buildAxios = axios.create({
        baseURL: BaseUrl
    })
    
    return buildAxios;
}

export default useAxios