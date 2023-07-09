import "./pagination.styles.scss";
const Pagination = (props) => {
    const { totalPages, currentPage, setCurrentPage } = props;
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={currentPage === i ? "active" : ""}
                >
                    {i}
                </li>
            );
        }

        return pageNumbers;
    };

    return <ul className='pagination-wrapper'>{renderPageNumbers()}</ul>;
};


export default Pagination;