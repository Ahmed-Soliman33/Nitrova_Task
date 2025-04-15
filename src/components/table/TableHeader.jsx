function TableHeader({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <button className="rounded-md border border-[#e9edf5] p-3 hover:bg-[#f9fafc]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-[#464F60]"
            fill="#464F60"
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
      </div>

      <div className="flex items-center gap-2">
        <button className="hover:bg-primary flex cursor-pointer items-center gap-2 rounded-[6px] bg-[#2264e5] py-[6px] pr-[16px] pl-[10px] text-center leading-[32px] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="blockmt-2 ml-2 h-4 w-4 text-white"
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
          Add user
        </button>
      </div>
    </div>
  );
}

export default TableHeader;
