export default function Button({
  type = "button",
  onClick,
  variant = "primary",
  children,
}) {
  const baseStyles =
    "px-4 py-2 rounded-lg transition duration-300 ease-in-out cursor-pointer";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-300 text-gray-900 hover:bg-gray-400";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
    >
      {children}
    </button>
  );
}
