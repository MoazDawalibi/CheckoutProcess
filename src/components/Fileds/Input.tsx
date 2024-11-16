  import React from 'react';

  interface FieldsState {
    name: string;
    placeholder: string;
    type?:string;
    props?:any;
    value?:any;
    className?:string;
    onChange?: (e: React.ChangeEvent<any>) => void;
  }

  const Input: React.FC<FieldsState> = ({ name, placeholder, onChange,type,props,value,className }) => {
    return (
      <input
        className={`${className} input_field`}
        name={name}
        placeholder={placeholder}
        onChange={onChange} 
        type={type}
        value={value}
        {...props}
      />
    );
  };

  export default Input;
