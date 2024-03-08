/* eslint-disable react/prop-types */
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";
import "./styles.scss";

const SearchUser = ({ searchQuery, setSearchQuery, moreShow }) => {
  return (
    <div className="search">
      <div className="format">
        <p
          className="pdf-icon"
          style={{ cursor: "pointer" }}
          // onClick={handleDownload}
        >
          <span className="icon">
            <AiOutlineFilePdf />
          </span>
          <span className="pdf">PDF</span>
        </p>

        <p className="excel-icon">
          <span className="icon">
            <AiOutlineFileExcel />
          </span>
          <span className="excel">Excel</span>
        </p>
      </div>
      {
        !moreShow && <div className="dataTables_filter">
        
        <form>
          <label>
            Search:
            <input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              className="form-control datatable-search"
            />
          </label>
        </form>
      </div>
      }
      
    </div>
  );
};

export default SearchUser;
