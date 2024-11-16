import SingleFileUploader from '../../components/Fileds/File'
import MultiParam from '../../components/Fileds/MultiParam'
import { CheckoutSteps } from '../../type/CheckoutSteps'

const SecondStep = ({ 
  CurrentIndex,
  objectToEdit, 
}:CheckoutSteps) => {

  return (
    CurrentIndex == 1 &&
    <div className='flex-column w-100'>
      <h1>SecondStep</h1>
      <SingleFileUploader objectToEdit={objectToEdit}/>
      <MultiParam objectToEdit={objectToEdit}/>
    </div>
  )
}

export default SecondStep