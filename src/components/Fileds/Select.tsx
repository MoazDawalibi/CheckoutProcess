import React from 'react';
import { formatToLabelValue } from '../../utils/formatToLableValue';

interface OptionType {
  label: string;
  value: string;
}

interface FieldsState {
  name: string;
  props?: React.SelectHTMLAttributes<HTMLSelectElement>;
  option: OptionType[];
  defaultValue?: string;
  disabled?:boolean;
  className?:string
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Select: React.FC<FieldsState> = ({ name, option, defaultValue, onChange, props,disabled,className}) => {
  const FormatOption = formatToLabelValue(option);
  return (
    <select
      className={`${className} select_field`}
      name={name} 
      onChange={onChange} 
      defaultValue={defaultValue || "defaultValue"}
      disabled={disabled}
      {...props}
    >
      <option disabled value="defaultValue">
        Select {name}
      </option>
      {FormatOption?.map((opt:any) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
