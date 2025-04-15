const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} cursor-pointer bg-[#0575E6] text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
