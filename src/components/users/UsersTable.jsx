import TableToolbar from "./TableToolbar";
import TableRow from "./TableRow";
import Spinner from "../common/Spinner";

const TableHeaders = ["#", "First Name", "Last Name", "Email", "Phone Number"];

const UsersTable = ({ paginatedData, currentPage, rowsPerPage, loading }) => {
  return (
    <div className="relative">
      <TableToolbar />
      {loading && (
        <div className="absolute inset-0 top-1/2 left-1/2 z-10 flex translate-x-[-50%] flex-col items-center justify-center bg-gray-300/50 p-10">
          <Spinner />
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {TableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="p-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {paginatedData.map((user, index) => (
              <TableRow
                key={index}
                userData={user}
                index={(currentPage - 1) * rowsPerPage + index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
