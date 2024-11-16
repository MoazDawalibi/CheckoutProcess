import { useEffect } from "react";
import { useGetAllBranches } from "../../api/branch";
import { useGetAllCycles } from "../../api/cycle";
import { useGetAllTerms } from "../../api/term";
import Button from "../../components/Ui/Button";
import { CheckoutSteps } from "../../type/CheckoutSteps";
import { useObjectToEdit } from "../../state/objectToEdit";
import Select from "../../components/Fileds/Select";

const ThirdStep = ({ CurrentIndex }: CheckoutSteps) => {
  const { objectToEdit, setObjectToEdit } = useObjectToEdit();

  const { data: Branch, isLoading: isBranchLoading } = useGetAllBranches();
  const { data: Term, isLoading: isTermLoading } = useGetAllTerms({
    branch_id: objectToEdit?.branch_id,
  });
  const { data: Cycle, isLoading: isCycleLoading } = useGetAllCycles({
    term_id: objectToEdit?.term_id,
  });
  console.log(objectToEdit?.branch_id);
  
  useEffect(() => {
    setObjectToEdit((prev: any) => {
      const updated = { ...prev };
      if (!prev?.branch_id) {
        updated.term_id = null;
        updated.cycle_id = null;
      }
      if (!prev?.term_id) {
        updated.cycle_id = null;
      }
      return updated;
    });
  }, [objectToEdit?.branch_id, objectToEdit?.term_id, setObjectToEdit]);

  const handleChange = (name: string, value: string | null) => {
    setObjectToEdit((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    CurrentIndex === 2 && (
      <div className="flex-column w-100">
        <h1>ThirdStep</h1>
        <Select
          name="branch_id"
          option={Branch?.data?.data || []}
          value={objectToEdit?.branch_id || ""}
          onChange={(e) => handleChange("branch_id", e.target.value)}
          loading={isBranchLoading}
        />
        <Select
          name="term_id"
          option={Term?.data?.data || []}
          value={objectToEdit?.term_id || ""}
          onChange={(e) => handleChange("term_id", e.target.value)}
          disabled={!objectToEdit?.branch_id}
          loading={isTermLoading}
        />
        <Select
          name="cycle_id"
          option={Cycle?.data?.data || []}
          value={objectToEdit?.cycle_id || ""}
          onChange={(e) => handleChange("cycle_id", e.target.value)}
          disabled={!objectToEdit?.term_id}
          loading={isCycleLoading}
        />
        <Button onClick={() => console.log(objectToEdit)}>Submit</Button>
      </div>
    )
  );
};

export default ThirdStep;


