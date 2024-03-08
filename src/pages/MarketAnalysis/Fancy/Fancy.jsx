/* eslint-disable react/prop-types */
import { Col } from "antd";
import "./Fancy.scss";

const Fancy = ({ currentOdd, title, fancyPnl }) => {
  const renderBetInfo = (item, index) => {
    let bet = 0;
    if (fancyPnl && fancyPnl[item?.sid]) {
      bet = fancyPnl[item?.sid];
    }
    return (
      <td key={item?.nation + index}>
        <a
          className="modal-book"
        >
          {item?.nation}
        </a>
        <p className={`client ${bet < 0 ? "loss" : "profit"}`}>{bet}</p>
      </td>
    );
  };

  const renderButton = (type, odd, size) => {
    return (
      <td className={`${type} box-w1`}>
        <button className={type}>
          <span className="odd">{odd}</span> <span>{size}</span>
        </button>
      </td>
    );
  };

  return (
    <Col xs={12} md={12} className="fancy-market" id="fancy-market">
      <div className="sub_fancu_market">
        <div className="fancy-marker-title">
          <h4>{title}</h4>
        </div>
        <div id="div_fancy">
          <table
            className="table coupon-table table table-bordered"
            style={{ border: "1px solid #dee2e6", width: "100%" }}
          >
            <thead>
              <tr>
                <th /> <th className="text-center box-w1 lay0">No</th>
                <th className="text-center back0 box-w1">Yes</th>
                <th className="box-w2" />
              </tr>
            </thead>
            <tbody>
              {currentOdd?.map((item, index) => (
                <tr
                  className={`bet-info sec-1 ${item?.gstatus == ""?"": "suspended-fancy"}`}
                  key={item?.nation + index}
                  data-title={item?.gstatus}
                >
                  {renderBetInfo(item, index)}
                  {renderButton("lay0", item?.l1, item?.ls1)}
                  {renderButton("back0", item?.b1, item?.bs1)}
                  <td className="text-right p-r-10 box-w2">
                    <span className="d-block text-info">Min:{item?.minBet}</span>
                    <span className="d-block text-info">Max:{item?.maxBet}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Col>
  );
};

export default Fancy;
