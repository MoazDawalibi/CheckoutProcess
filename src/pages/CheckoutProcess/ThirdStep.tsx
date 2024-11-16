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

  const {data:Branch} = useGetAllBranches();
  const {data:Term} = useGetAllTerms();
  const {data:Cycle} = useGetAllCycles();

  return (
    CurrentIndex == 2 &&
    <div className='flex-column w-100'>
      <h1>ThirdStep</h1>
      <Select 
        name="branch_id" 
        option={Branch?.data?.data}
        onChange={onChange}
      />
      <Select 
        name="term_id" 
        option={Term?.data?.data}
        onChange={onChange}
        disabled={!objectToEdit?.branch_id}
      />
      <Select 
        name="cycle_id" 
        option={Cycle?.data?.data}
        onChange={onChange}
        disabled={!objectToEdit?.term_id}
      />
      <Button onClick={()=>console.log(objectToEdit)}>
        Submit
      </Button>
    </div>
  );
};

export default ThirdStep;
