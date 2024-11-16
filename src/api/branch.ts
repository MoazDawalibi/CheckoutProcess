import useGetQuery from "./helper/useGetQuery"

const EndPoints = {
    Get:"/branch"
}

const Keys = {
    Get:"branch"
}

export const useGetAllBranches = (params?:any) => useGetQuery(EndPoints.Get , Keys.Get, params);