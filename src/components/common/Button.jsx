const Button = ({ children, className, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} bg-primary cursor-pointer text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
