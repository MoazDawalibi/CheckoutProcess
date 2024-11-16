import React from 'react'
import { QueryClient , QueryClientProvider } from 'react-query'


const QueryProvider = ({children}:{children:React.ReactElement}) => {
    const queryClient = new QueryClient({
        defaultOptions:{
            queries: { 
                // refetchOnWindowFocus:false,
                staleTime: 0, 
                cacheTime: 0, 
            }
        }
    }) 
    return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default QueryProvider