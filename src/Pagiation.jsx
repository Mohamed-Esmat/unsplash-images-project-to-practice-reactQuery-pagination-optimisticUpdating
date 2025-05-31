import { useSearchContext } from "./store/search-context";

const Pagiation = ({ totalPages }) => {
  const { page, setPage } = useSearchContext();

  const handlePreviousPage = () =>
    setPage((prevPage) => Math.max(prevPage - 1, 0));

  const handleNextPage = () =>
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));

  return (
    <div className="pagination">
      <button
        onClick={handlePreviousPage}
        disabled={page === 0}
        className="btn"
      >
        Previous
      </button>
      <span className="page-info">
        Page {page + 1} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={page >= totalPages - 1}
        className="btn"
      >
        Next
      </button>
    </div>
  );
};

export default Pagiation;
