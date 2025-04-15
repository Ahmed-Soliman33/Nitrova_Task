function TablePagination({
  currentPage,
  totalItems,
  rowsPerPage,
  handlePageChange,
}) {
  const startItem = (currentPage - 1) * rowsPerPage + 1;
  const endItem = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between border-t border-[#f0f1fa] p-4">
      <div className="text-sm text-[#687182]">Rows per page: {rowsPerPage}</div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#687182]">
          {startItem}-{endItem} of {totalItems}
        </span>
        <div className="flex items-center">
          <button
            className="rounded-md p-1 hover:bg-[#f9fafc]"
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
          >
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
          <button
            className="rounded-md p-1 hover:bg-[#f9fafc]"
            onClick={() => handlePageChange("next")}
            disabled={currentPage === Math.ceil(totalItems / rowsPerPage)}
          >
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
  );
}

export default TablePagination;
