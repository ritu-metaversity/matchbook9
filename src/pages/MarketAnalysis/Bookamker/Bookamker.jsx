import "./Bookamker.scss";

const Bookamker = ({ currentOdd, prevOdds }) => {

  return (
    <div className="row row5 bookmaker-container">
      <div className="fancy-marker-title col-12" id="bm-head" style={{}}>
        <h4>Bookmaker Market 0% commission fast bet confirm</h4>
        <div className="m-b-10 bookmaker-market">
          <div id="bm-section">
            <table
              className="table coupon-table table table-bordered m-t-10 "
              border={0}
              style={{ width: "100%", border: "1px solid #dee2e6" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    <span className="text-info p-r-5">Min: {currentOdd[0]?.minBet}</span>
                    <span className="text-info" style={{ display: "block" }}>
                      Max: {currentOdd[0]?.maxBet}
                    </span>
                  </th>
                  <th className="box-w1" /> <th className="box-w1" />
                  <th className="back0 box-w1">Back</th>
                  <th className="lay0 box-w1">lay</th> <th className="box-w1" />
                  <th className="box-w1" />
                </tr>
              </thead>
              <tbody>
                {currentOdd?.map((item, index) => {
                  console.log(item?.gstatus, "itemitem")
                  return (
                    <tr
                      key={item?.nation + index}
                      className={`bet-info sec-1 ${item?.gstatus == ""?"":"suspended"} `}
                      data-title={item?.gstatus}>
                      <td>
                        <span className="team-name">{item?.nation}</span>
                        <p className="box-w4">
                          <span className="float-left profit">0</span>
                        </p>
                      </td>
                      <td className="back2 box-w1">
                        <button>
                          <span className="odd" /> <span />
                        </button>
                      </td>
                      <td className="back1 box-w1">
                        <button>
                          <span className="odd" /> <span />
                        </button>
                      </td>
                      <td className="back0 box-w1">
                        <button className="back">
                          <span className="odd">{item?.b1}</span>
                          <span>{item?.bs1}</span>
                        </button>
                      </td>
                      <td className="lay0 box-w1">
                        <button className="lay">
                          <span className="odd">{item?.l1}</span>{" "}
                          <span>{item?.ls1}</span>
                        </button>
                      </td>
                      <td className="lay1 box-w1">
                        <button>
                          <span className="odd" /> <span />
                        </button>
                      </td>
                      <td className="lay2 box-w1">
                        <button>
                          <span className="odd" /> <span />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="fancy-marker-title col-xl-4"
        id="bm1-head"
        style={{ display: "none" }}>
        <h4>Bookmaker Market</h4>
        <div className="m-b-10 bookmaker-market">
          <div id="bm1-section"></div>
        </div>
      </div>
    </div>
  );
};

export default Bookamker;
