import React from "react";
import { formatToLabelValue } from "../../utils/formatToLableValue";
import { BiTrash } from "react-icons/bi";
import { FieldsState, OptionType } from "../../type/Fildes";



const Select: React.FC<FieldsState> = ({
  name,
  option,
  value,
  disabled,
  onChange,
  className,
  loading,
}) => {
  const formattedOptions = formatToLabelValue(option);

  return (
    <div className="d-flex align-items-center">
      <select
        className={`${className} select_field`}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled || loading}
      >
        {loading ? (
          <option disabled value="">
            Loading {name}...
          </option>
        ) : (
          <>
            <option disabled value="">
              Select {name}
            </option>
            {formattedOptions?.map((opt: OptionType) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </>
        )}
      </select>
      {!loading && value && !disabled && (
        <BiTrash
          className="icon"
          onClick={() => onChange({ target: { name, value: null } } as any)}
        />
      )}
    </div>
  );
};

export default Select;
