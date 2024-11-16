import React from 'react'
import { QueryClient , QueryClientProvider } from 'react-query'


const QueryProvider = ({children}:{children:React.ReactElement}) => {
    const queryClient = new QueryClient({
        defaultOptions:{
            queries: { 
                refetchOnWindowFocus:false,
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