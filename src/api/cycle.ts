import useGetQuery from "./helper/useGetQuery"

const EndPoints = {
    Get:"/cycle"
}

const Keys = {
    Get:"cycle"
}

export const useGetAllCycles = (params?:any) => useGetQuery(EndPoints.Get , Keys.Get, params);