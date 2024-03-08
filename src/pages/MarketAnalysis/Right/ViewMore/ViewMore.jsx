import React, { useState, useEffect } from "react";
import { Select } from "antd";
import "./ViewMore.scss";
import { useBetSearchMutation } from "../../../../store/service/gameListService";

const ViewMore = ({ matchId, tabData }) => {
  const [formData, setFormData] = useState({
    ipAddress: "",
    amountFrom: "",
    amountTo: "",
    betType: "",
  });

  const [trigger, { data }] = useBetSearchMutation();

  useEffect(() => {
    trigger({
      matchId,
      amountFrom: 0,
      amountTo: 0,
      ipAddres: "",
      marketName: "Match Odds",
      username: "",
      betType: 1,
      index: 0,
      noOfRecords: 100,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData, "dsfdsfgfgd")

  const handleSearch = () => {
    // Perform search with formData
    trigger({
        ...formData,
        matchId,
        marketName: "Match Odds",
        username: "",
        index: 0,
        noOfRecords: 100,
      });
    console.log("Search with", formData);
  };

  return (
    <div>
      <div className="viewMoreMatchedDataModal">
        <ul className="nav nav-tabs d-inline-block" role="tablist ">
          <li className="nav-item d-inline-block ">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#matched-bet2"
              id="matchedDataLink">
              Matched Bets
            </a>
          </li>
          <li className="nav-item d-inline-block">
            <a
              className="nav-link "
              data-toggle="tab"
              href="#unmatched-bet2"
              id="unMatchedDataLink">
              Unmatched Bets
            </a>
          </li>
          <li className="nav-item d-inline-block">
            <a
              className="nav-link "
              data-toggle="tab"
              href="#deleted-bet2"
              id="deletedMatchedDataLink">
              Deleted Bets
            </a>
          </li>
        </ul>
        <div className="tab-content m-t-20" data-select2-id={23}>
          <div
            id="matched-bet2"
            className="tab-pane  active">
            <form >
              <div className="row">
                <div className="col-md-5">
                  <div
                    className="form-group m-t-20"
                    style={{ marginBottom: "0px" }}>
                    <label className="d-inline-block">Enter Code</label>
                    <Select
                      style={{ width: "220px", marginBottom: "0px" }}
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[]}
                    />
                  </div>
                  <div className="form-group m-t-20">
                    <label className="d-inline-block">IP Address</label>
                    <input
                      type="text"
                      name="ipAddress"
                      id="ipAddress"
                      className="form-control d-inline-block"
                      value={formData.ipAddress}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="form-group m-t-20">
                    <label className="d-inline-block">Amount</label>
                    <input
                      type="text"
                      name="amountFrom"
                      id="amountFrom"
                      className="form-control d-inline-block"
                      value={formData.amountFrom}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="amountTo"
                      id="amountTo"
                      className="form-control d-inline-block"
                      value={formData.amountTo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group m-t-20">
                    <label className="d-inline-block">Type</label>
                    <select
                      name="betType"
                      className="form-control d-inline-block"
                      id="betType"
                      value={formData.betType}
                      onChange={handleInputChange}>
                      <option value="1">All</option>
                      <option value="2">Back</option>
                      <option value="3">Lay</option>
                    </select>
                    <button  onClick={handleSearch} className="btn btn-back">
                      Search
                    </button>
                    <button
                      type="button"
                      className="btn btn-back viewAllMatched">
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="table-responsive" id="view-more-matched-tbl">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>UserName</th>
                    <th>Nation</th>
                    <th>Bet Type</th>
                    <th>Amount</th>
                    <th>User Rate</th>
                    <th>Place Date</th>
                    <th>Match Date</th>
                    <th>IP</th>
                    <th>Browser Details</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.betList?.length > 0 ? (
                    data?.data?.betList?.map((item, id) => {
                      return (
                        <tr key={item + id}>
                          <td>{id + 1}</td>
                          <td>{item?.userid}</td>
                          <td>{item?.selectionname}</td>
                          <td>{item?.isback ? "Back":"Lay"}</td>
                          <td>{item?.stack}</td>
                          <td>{item?.odds}</td>
                          <td>{item?.matchedtime}</td>
                          <td>{item?.matchedtime}</td>
                          <td>{item?.userIp}</td>
                          <td>{item?.deviceInfo}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={10}>No records found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
