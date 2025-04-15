import { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TablePagination from "./TablePagination";
import Spinner from "../common/Spinner";

function DataTable() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        alert("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle search functionality
  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchQuery, users]);

  // Calculate pagination
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full rounded-md bg-white shadow-sm">
      <TableHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {loading ? <Spinner /> : <TableBody users={currentUsers} />}
      <TablePagination
        currentPage={currentPage}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default DataTable;
