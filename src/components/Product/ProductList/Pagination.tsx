interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((page) => {
   
      return (
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 2 && page <= currentPage + 2)
      );
    });

  return (
    <div className="flex justify-center items-center mt-8 space-x-2 text-gray-700 select-none">
      {/* Prev */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="p-2 disabled:opacity-40 hover:text-green-600 transition"
      >
        ◀
      </button>


      {pages.map((page, idx) => {
        const prevPage = pages[idx - 1];
        const showEllipsis = prevPage && page - prevPage > 1;

        return (
          <span key={page} className="flex items-center">
            {showEllipsis && <span className="px-1">…</span>}
            <button
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                page === currentPage
                  ? "bg-green-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          </span>
        );
      })}

      {/* Next */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="p-2 disabled:opacity-40 hover:text-green-600 transition"
      >
        ▶
      </button>
    </div>
  );
}
