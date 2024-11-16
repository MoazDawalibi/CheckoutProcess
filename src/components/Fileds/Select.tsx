import React, { useState } from "react";
import { formatToLabelValue } from "../../utils/formatToLableValue";
import { BiTrash } from "react-icons/bi";
import { useObjectToEdit } from "../../state/objectToEdit";

interface OptionType {
  label: string;
  value: string;
}

interface FieldsState {
  name: string;
  option: OptionType[];
  defaultValue?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
}

const Select: React.FC<FieldsState> = ({
  name,
  option,
  defaultValue,
  disabled,
  className,
}) => {
  const FormatOption = formatToLabelValue(option);
  const [value, setValue] = useState(defaultValue || "");
  const { setObjectToEdit, objectToEdit } = useObjectToEdit();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setValue(newValue); 
    setObjectToEdit({
      ...objectToEdit,
      [name]: newValue,
    });
  };

  const handleClear = () => {
    setValue(""); 
    setObjectToEdit({
      ...objectToEdit,
      [name]: null, 
    });
  };

  return (
    <div className="d-flex">
      <select
        className={`${className} select_field`}
        name={name}
        onChange={handleChange}
        value={value}
        disabled={disabled}
      >
        <option disabled value="">
          Select {name}
        </option>
        {FormatOption?.map((opt: OptionType) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {value && (
        <BiTrash
          className="icon"
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default Select;
