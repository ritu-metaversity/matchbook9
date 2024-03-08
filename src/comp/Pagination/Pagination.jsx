import PropTypes from 'prop-types';
import "./pagination.scss";

const Pagination = ({ setPaginationData, paginationData, setIndex }) => {
  const handleIncrement = () => {
    const newIndex = paginationData.index + 1;
    if (newIndex < paginationData.totalPages) {
      setPaginationData({ ...paginationData, index: newIndex });
      setIndex(newIndex);
    }
  };

  const handleDecrement = () => {
    const newIndex = paginationData.index - 1;
    if (newIndex >= 0) {
      setPaginationData({ ...paginationData, index: newIndex });
      setIndex(newIndex);
    }
  };

  return (
    <div className="pagination">
      <ul className="pagination-rounded">
        <ul style={{ display: "flex", alignItems: "center" }}>
          <li className="page-item disabled">
            <span className="backward-pagination " onClick={handleDecrement}>Previous</span>
          </li>
          <li role="presentation" className="page-item active">
            <button className="backward-pagination">{paginationData.index + 1}</button>
          </li>
          <li className="page-item disabled">
            <span className="backward-pagination " onClick={handleIncrement}>Next</span>
          </li>
        </ul>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  setPaginationData: PropTypes.func.isRequired,
  paginationData: PropTypes.shape({
    index: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  }).isRequired,
  setIndex: PropTypes.func.isRequired,
};

export default Pagination;
