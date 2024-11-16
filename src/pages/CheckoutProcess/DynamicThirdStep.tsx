import { useEffect } from "react";
import Select from "../../components/Fileds/Select";
import Button from "../../components/Ui/Button";
import { CheckoutSteps } from "../../type/CheckoutSteps";
import { useObjectToEdit } from "../../state/objectToEdit";
import { useGetAllBranches } from "../../api/branch";
import { useGetAllCycles } from "../../api/cycle";
import { useGetAllTerms } from "../../api/term";

const ThirdStep = ({ CurrentIndex }: CheckoutSteps) => {
  const { objectToEdit, setObjectToEdit } = useObjectToEdit();

  // Configuration for dynamic selects
  const selectsConfig = [
    {
      name: "branch_id",
      api: useGetAllBranches,
      dependsOn: null, // No dependency
    },
    {
      name: "term_id",
      api: useGetAllTerms,
      dependsOn: "branch_id", // Depends on branch_id
      params: (objectToEdit: any) => ({ branch_id: objectToEdit?.branch_id }),
    },
    {
      name: "cycle_id",
      api: useGetAllCycles,
      dependsOn: "term_id", // Depends on term_id
      params: (objectToEdit: any) => ({ term_id: objectToEdit?.term_id }),
    },
  ];

  // Dynamically fetch data for each select
  const selectsData = selectsConfig.map(({ api, params }, index) => {
    const paramsObj = params ? params(objectToEdit) : undefined;
    console.log(paramsObj);
    
    return api(paramsObj);
  });

  // Dynamically reset values for dependent selects when a parent changes
  useEffect(() => {
    if (!objectToEdit?.branch_id) {
      setObjectToEdit((prev:any) => ({
        ...prev,
        term_id: null,
        cycle_id: null,
      }));
    } else if (!objectToEdit?.term_id) {
      setObjectToEdit((prev:any) => ({
        ...prev,
        cycle_id: null,
      }));
    }
  }, [objectToEdit?.branch_id, objectToEdit?.term_id, setObjectToEdit]); // Watch specific fields instead of entire object

  // Handle changes to any select
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
        {selectsConfig.map(({ name, dependsOn }, index) => {
          const { data, isLoading } = selectsData[index];
          const disabled = dependsOn && !objectToEdit?.[dependsOn] ? true : false; // Disabled logic

          return (
            <Select
              key={name}
              name={name}
              option={data?.data?.data || []}
              value={objectToEdit?.[name] || ""}
              onChange={(e) => handleChange(name, e.target.value)}
              loading={isLoading}
              disabled={disabled} // Pass dynamic disabled state
            />
          );
        })}
        <Button onClick={() => console.log(objectToEdit)}>Submit</Button>
      </div>
    )
  );
};

export default ThirdStep;
