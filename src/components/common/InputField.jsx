function InputField({
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  name,
  ...rest
}) {
  return (
    <div className="relative">
      {icon && (
        <span className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-[#687182]">
          {icon}
        </span>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-[30px] border border-[#e9edf5] py-3 pr-4 pl-10 text-[#687182] focus:border-transparent focus:ring-2 focus:ring-[#2264e5] focus:outline-none"
        {...rest}
      />
    </div>
  );
}

export default InputField;
