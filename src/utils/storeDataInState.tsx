interface DataProps {
    [key: string]: any; 
}
  
  const storeDataInState = (setObjectToEdit: (update: any) => void, data: DataProps) => {    
    setObjectToEdit((prevData: DataProps | null) => ({
      ...prevData,
      ...data,
    }));
  };
  
  export default storeDataInState;
  