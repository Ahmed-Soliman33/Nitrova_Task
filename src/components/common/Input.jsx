export default function Input(props) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <input
        {...props}
        className={`w-full rounded-lg border border-gray-300 px-4 py-2 transition outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 ${props.className}`}
      />
    </div>
  );
}
