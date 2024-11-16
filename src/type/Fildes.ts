export interface OptionType {
  label: string;
  value: string | number;
}

export interface FieldsState {
  name: string;
  option: OptionType[];
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  loading?:boolean
}

