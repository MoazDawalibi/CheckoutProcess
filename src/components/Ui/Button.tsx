interface ButtonType {
  onClick: () => void;
  disabled?: boolean;
  name?: string; 
  children?: React.ReactNode; 
  style?:any
}

const Button = ({ name, disabled, onClick, children ,style}: ButtonType) => {
  return (
    <button onClick={onClick} disabled={disabled} style={style}>
      {children || name} 
    </button>
  );
};

export default Button;


