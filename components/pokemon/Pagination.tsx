import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div className="pagination-controls flex justify-center mt-4">
      <button
        className="px-4 py-2 mx-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition-colors duration-200"
        onClick={onPrevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2 mx-2 text-gray-700 dark:text-gray-300">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className="px-4 py-2 mx-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition-colors duration-200"
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;