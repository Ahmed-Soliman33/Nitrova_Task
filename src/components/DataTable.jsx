import { useState } from "react";

function DataTable() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for the table
  const userData = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "+963 99 219 8745",
    company: "Company Name",
  }));

  return (
    <div className="rounded-md bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#f0f1fa] p-4">
        <div className="relative w-full max-w-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-[#687182]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-[#e9edf5] py-2 pr-4 pl-10 text-[#687182] focus:border-transparent focus:ring-2 focus:ring-[#2264e5] focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-[#e9edf5] p-2 hover:bg-[#f9fafc]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#687182]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </button>
          <button className="flex items-center gap-2 rounded-md bg-[#2264e5] px-4 py-2 text-white hover:bg-[#0575e6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add new
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#f0f1fa]">
              <th className="w-12 px-4 py-3 text-left text-xs font-medium tracking-wider text-[#687182] uppercase">
                #
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-[#687182] uppercase">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-[#687182] uppercase">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-[#687182] uppercase">
                Phone Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-[#687182] uppercase">
                Company Name
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr
                key={user.id}
                className="border-b border-[#f0f1fa] hover:bg-[#f9fafc]"
              >
                <td className="px-4 py-3 text-sm text-[#464f60]">{user.id}</td>
                <td className="px-4 py-3 text-sm text-[#464f60]">
                  {user.name}
                </td>
                <td className="px-4 py-3 text-sm text-[#464f60]">
                  {user.email}
                </td>
                <td className="px-4 py-3 text-sm text-[#464f60]">
                  {user.phone}
                </td>
                <td className="px-4 py-3 text-sm text-[#464f60]">
                  {user.company}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-[#f0f1fa] p-4">
        <div className="text-sm text-[#687182]">Rows per page: 10</div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#687182]">1-10 of 67</span>
          <div className="flex items-center">
            <button className="rounded-md p-1 hover:bg-[#f9fafc]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#687182]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="rounded-md p-1 hover:bg-[#f9fafc]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#687182]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
