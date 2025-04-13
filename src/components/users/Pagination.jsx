const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 text-sm text-gray-600">
      <div>
        Showing {(currentPage - 1) * 5 + 1} to{" "}
        {Math.min(currentPage * 5, totalPages * 5)} of {totalPages * 5} results
      </div>
      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1 disabled:cursor-not-allowed cursor-pointer rounded border text-gray-600 hover:bg-gray-100 disabled:opacity-40"
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1 disabled:cursor-not-allowed cursor-pointer rounded border text-gray-600 hover:bg-gray-100 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
