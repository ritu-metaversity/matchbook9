/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { useBetListQuery } from "../../../../store/service/gameListService";
import "./mybet.scss";
import { useState } from "react";
import ViewMore from "../ViewMore/ViewMore";

const MyBet = ({matchId}) => {
    const [open, setOpen] = useState(false);
  const { data } = useBetListQuery({matchId});
  return (
    <>
     <div className="card m-b-10 my-bet">
      <div className="card-header matched_data">
        <ul className="nav nav-tabs d-inline-block" role="tablist ">
          <li className="nav-item d-inline-block active">
            <a className="nav-link  " data-toggle="tab" href="#matched-bet">
              Matched <span id="matchedCount" />
            </a>
          </li>
          <li className="nav-item d-inline-block">
            <a className="nav-link " data-toggle="tab" href="#unmatched-bet">
              Unmatched <span id="unmatchedCount" />
            </a>
          </li>
        </ul>
        <a href="javascript:void(0)" onClick={() => setOpen(true)} className="btn btn-back float-right">
          View More
        </a>
      </div>
      <div className="card-body">
        <div className="tab-content">
          <div className="tab-pane active">
            <div className="table-responsive">
              <table
                className="table coupon-table table-bordered table-stripted">
                <thead>
                  <tr>
                    <th style={{ minWidth: 50 }}>UserName</th>
                    <th style={{ minWidth: 200 }}>Nation</th>
                    <th style={{ minWidth: 50 }}>Rate</th>
                    <th style={{ minWidth: 70 }}>Amount</th>
                    <th style={{ minWidth: 170 }}>PlaceDate</th>
                    <th style={{ minWidth: 170 }}>MatchDate</th>
                    <th style={{ minWidth: 70 }}>Gametype</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((item, id) => (
                    <tr className={item?.isback ? "back0" : "lay0"} key={id}>
                      <td>{item?.userid}</td>
                      <td>{item?.selectionname}</td>
                      <td>{item?.odds}</td>
                      <td>{item?.stack}</td>
                      <td>{item?.matchedtime}</td>
                      <td>{item?.matchedtime}</td>
                      <td>{item?.marketname}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
        title="View More Bet"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1296}
        footer={null}
      >
       <ViewMore matchId={matchId} tabData={data?.data}/>
      </Modal>
    </>
   
  );
};

export default MyBet;
