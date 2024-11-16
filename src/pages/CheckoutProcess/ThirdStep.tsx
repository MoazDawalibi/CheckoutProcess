import { useEffect, useState } from 'react';
import { useGetAllBranches } from '../../api/branch';
import { useGetAllCycles } from '../../api/cycle';
import { useGetAllTerms } from '../../api/term';
import Select from '../../components/Fileds/Select';
import Button from '../../components/Ui/Button';
import { CheckoutSteps } from '../../type/CheckoutSteps';

const ThirdStep = ({ 
  onChange,
  CurrentIndex,
  objectToEdit, 
}:CheckoutSteps) => {

  const {data:Branch,isLoading} = useGetAllBranches();
  const {data:Term} = useGetAllTerms();
  const {data:Cycle} = useGetAllCycles();
  const [termDisabled, setTermDisabled] = useState(!objectToEdit?.branch_id);
  const [cycleDisabled, setCycleDisabled] = useState(false);

  useEffect(() => {
    !objectToEdit?.branch_id ? setTermDisabled(true) : setTermDisabled(false);
    !objectToEdit?.term_id ? setCycleDisabled(true): setCycleDisabled(false);
  }, [objectToEdit?.branch_id,objectToEdit?.term_id])
  
  return (
    CurrentIndex == 2 &&
    <div className='flex-column w-100'>
      <h1>ThirdStep</h1>
      {isLoading ? "loading..." :
      <>
        <Select 
        name="branch_id" 
        option={Branch?.data?.data}
        onChange={onChange}
        />
        <Select 
        name="term_id" 
        option={Term?.data?.data}
        onChange={onChange}
        disabled={termDisabled}
        />
        <Select 
        name="cycle_id" 
        option={Cycle?.data?.data}
        onChange={onChange}
        disabled={cycleDisabled}
        />
      </>
      }
      <Button onClick={()=>console.log(objectToEdit)}>
        Submit
      </Button>
    </div>
  );
};

export default ThirdStep;
