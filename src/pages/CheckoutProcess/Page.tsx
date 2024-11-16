  import React from 'react'
  import FirstStep from './FirstStep';
  import ThirdStep from './ThirdStep';
  import storeDataInState from '../../utils/storeDataInState';
  import { useObjectToEdit } from '../../state/objectToEdit';
  import { useSetCheckoutIndex } from '../../state/CheckoutProcessIndex';
  import SecondStep from './SecondStep';
  import { CheckoutProcess } from '../../enums/CheckoutProcess';
import Button from '../../components/Ui/Button';

  const Page = () => {
      const {CurrentIndex,setNextCurrentIndex,setPrevCurrentIndex} = useSetCheckoutIndex();
      const { setObjectToEdit, objectToEdit} = useObjectToEdit();
      
      const NextStep = () => {        
        setNextCurrentIndex();
      };

      const PrevStep = () => {
        setPrevCurrentIndex();
      };

      const handleStore = (e: React.ChangeEvent<any>) => {
        storeDataInState(setObjectToEdit, { [e.target.name]: e.target.value });    
      };
    
      const Forms = {
        [CheckoutProcess.First]: (
          <FirstStep onChange={handleStore} CurrentIndex={CurrentIndex} objectToEdit={objectToEdit}/>
        ),
        [CheckoutProcess.Second]: (
          <SecondStep onChange={handleStore} CurrentIndex={CurrentIndex} objectToEdit={objectToEdit}/>
        ),
        [CheckoutProcess.Third]: (
          <ThirdStep onChange={handleStore} CurrentIndex={CurrentIndex} objectToEdit={objectToEdit}/>
        ),
      };

    return (
      <div className='d-flex'>
        <Button onClick={PrevStep}>
          prev
        </Button>
        
        <div className='m-100'>
          {Forms[CheckoutProcess.First]}
          {Forms[CheckoutProcess.Second]}
          {Forms[CheckoutProcess.Third]}
        </div>

        <Button onClick={NextStep}>
          next
        </Button>
      
      </div>
    )
  }

  export default Page