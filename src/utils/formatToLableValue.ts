export const formatToLabelValue = (data:any) => {
    
   const formatData =  data?.map((e:any) => ({
        value:e.id,
        label:e.name || e?.title || e?.description  
    })
    )   
    
    return formatData
}