import { useQuery } from "react-query";
import useAxios from './useAxios'

const useGetQuery = (
    key:string,
    url:string,
    params?:any,
    options?:any
) => {

    const axios = useAxios();
    console.log(params);
    
    return useQuery(
        key,
        async () => {
            const response = await axios.get(
                url,
                {
                    params: params
                });
                return response || [];
        },
        {
            ...options
        }
    )
}

export default useGetQuery