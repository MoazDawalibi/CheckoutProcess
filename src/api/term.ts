import useGetQuery from "./helper/useGetQuery"

const EndPoints = {
    Get:"/term"
}

const Keys = {
    Get:"term"
}

export const useGetAllTerms = (params?:any) => useGetQuery(EndPoints.Get , Keys.Get, params);