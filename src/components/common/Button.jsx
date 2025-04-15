const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-primary cursor-pointer text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
