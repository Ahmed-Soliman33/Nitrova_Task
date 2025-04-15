function TableBody({ users }) {
  const Headers = ["Name", "Email", "Phone Number", "Company Name"];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b border-[#f0f1fa]">
          <tr>
            <th className="w-12 px-4 py-3 text-left text-[11px] leading-[16px] font-[600] tracking-wider text-[#464F60] uppercase">
              #
            </th>
            {Headers.map((header) => (
              <th className="px-4 py-3 text-left text-[11px] leading-[16px] font-[600] tracking-wider text-[#464F60] uppercase">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-[#f9fafc]">
              <td className="px-4 py-3 text-[14px] font-[400] text-[#171C26]">
                {user.id}
              </td>
              <td className="px-4 py-3 text-[14px] font-[400] text-[#171C26]">
                {user.name}
              </td>
              <td className="px-4 py-3 text-[14px] font-[400] text-[#171C26]">
                {user.email}
              </td>
              <td className="px-4 py-3 text-[14px] font-[400] text-[#171C26]">
                {user.phone}
              </td>
              <td className="px-4 py-3 text-[14px] font-[400] text-[#171C26]">
                {user.company.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableBody;
