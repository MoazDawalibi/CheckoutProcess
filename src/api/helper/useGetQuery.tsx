import { useQuery } from "react-query";
import { BaseUrl } from "../../config/config";
import useAxios from './useAxios'

const useGetQuery = (
    key:string,
    url:string,
    params?:any,
    options?:any
) => {

    const axios = useAxios();

    return useQuery(
        key,
        async () => {
            const response = await axios.get(
                BaseUrl + url,
                {
                    params: params
                })
                return response;
        },
        {
            ...options
        }
    )
}

export default useGetQuery