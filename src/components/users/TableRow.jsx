const TableRow = ({ userData, index }) => {
  const { name, phone, email } = userData;

  return (
    <tr className="hover:bg-gray-50 transition-all animate-fade-in">
      <td className="p-4 text-sm text-gray-700">{index + 1}</td>
      <td className="p-4 text-sm font-medium text-gray-900">
        <div>{name.split(" ")[0]}</div>
      </td>
      <td className="p-4 text-sm text-gray-600">{name.split(" ")[1]}</td>
      <td className="p-4 text-sm">{email}</td>
      <td className="p-4 text-sm text-gray-600">{phone}</td>
    </tr>
  );
};

export default TableRow;
