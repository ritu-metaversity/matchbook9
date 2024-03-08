/* eslint-disable react/prop-types */
import './MatchOdss.scss';

const MatchOdss = ({ currentOdd, prevOdds, oddsPnl }) => {

  const renderOddsPnl = (item) => {
    return oddsPnl?.map((res, index) => {
      if (currentOdd?.marketId !== res?.marketId) return null;
      const oddsPnlData = {
        [res?.selection1]: res?.pnl1,
        [res?.selection2]: res?.pnl2,
        [res?.selection3]: res?.pnl3,
      };
      return (
        <span key={index + res} className={`float-left ${oddsPnlData[item?.selectionId] < 0 ? 'loss' : 'profit'}`}>
          {oddsPnlData[item?.selectionId] || "0"}
        </span>
      );
    });
  };

  const renderBackButtons = (back, id, className) => {
    return (
      <td key={id} className={`box-w1 ${className}`}>
        <button>
          <span className="odd">{back?.price}</span>{" "}
          <span>{back?.size}</span>
        </button>
      </td>
    );
  };

  return (
    <div>
      <div className="game-heading m-b-5">
        <span className="card-header-title">
          <span>{currentOdd?.matchName} -&gt;</span>
          <span>{currentOdd?.Name} -&gt;</span>
          <span>{currentOdd?.lastMatchTime}</span>
        </span>
      </div>
      <div className="card-content">
        <div id="div_gamedata" className="table-responsive main-market">
          <table className="table coupon-table table table-bordered m-t-10" border={0}>
            <thead>
              <tr>
                <th>Runners</th> <th className="box-w1" />
                <th className="box-w1" /> <th className="back0 box-w1">Back</th>
                <th className="lay0 box-w1">Lay</th> <th className="box-w1" />
                <th className="box-w1" />
              </tr>
            </thead>
            <tbody>
              {currentOdd?.runners?.map((item, index) => (
                <tr key={item?.name + index} className="bet-info sec-414464" data-title="ACTIVE">
                  <td>
                    <span className="team-name">{item?.name}</span>
                    <p className="box-w4">
                      {renderOddsPnl(item)}
                    </p>
                  </td>
                  {item?.ex?.availableToBack?.map((back, id) => renderBackButtons(back, id, `back${id}`)).reverse()}
                  {item?.ex?.availableToLay?.map((back, id) => renderBackButtons(back, id, `lay${id}`))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MatchOdss;
