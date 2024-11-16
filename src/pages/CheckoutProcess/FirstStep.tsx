import Input from '../../components/Fileds/Input';
import { CheckoutSteps } from '../../type/CheckoutSteps';

const FirstStep = ({ 
  onChange,
  CurrentIndex,
  objectToEdit, 
}:CheckoutSteps) => {

  return (
    CurrentIndex == 0 &&
    <div className='flex-column w-100'> 
      <h1>FirstStep</h1>
      <Input 
        name="name"
        placeholder="name"
        type='text'
        onChange={onChange}
        value={objectToEdit?.name}
      />
      <Input 
        name="phone_number"
        placeholder="phone_number"
        type='number'
        onChange={onChange}
        value={objectToEdit?.phone_number}
      />
      <Input 
        name="address"
        placeholder="address"
        type='text'
        onChange={onChange}
        value={objectToEdit?.address}
      />
    </div>
  );
};

export default FirstStep;
