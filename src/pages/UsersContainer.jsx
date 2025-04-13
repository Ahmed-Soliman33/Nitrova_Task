import { useEffect, useState } from "react";
import UsersTable from "../components/users/UsersTable";
import Pagination from "../components/users/Pagination";
import fetchData from "../utils/fetchData";

const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    setLoading(true);
    fetchData("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUsers(data);
      })
      .finally(() => setLoading(false));
  }, []);

  // For Pagination
  const totalPages = Math.ceil(users.length / rowsPerPage);
  const paginatedData = users.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl rounded-xl bg-white shadow">
        <UsersTable
          loading={loading}
          paginatedData={paginatedData}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default UsersContainer;
