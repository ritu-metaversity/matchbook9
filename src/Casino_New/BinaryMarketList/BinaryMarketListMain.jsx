import { Link } from 'react-router-dom';
import './BinaryMarketList.scss'

const BinaryMarketListMain = () => {
  return (
    <div>
      <div className="listing-grid">
        <div className="game-heading">
          <span className="card-header-title">Binary Market List</span>
        </div>
        <div className="card-content">
          <table className="table ">
            <tbody>
              <tr>
                <td>
                  <Link
                    className="text-dark"
                    to="/binary/show"
                    >
                    Binary / 2024-03-07
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BinaryMarketListMain;
