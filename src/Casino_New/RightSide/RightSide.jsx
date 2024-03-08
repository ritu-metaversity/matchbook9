import React from 'react'

const RightSide = () => {
  return (
    <div id="sidebar-right" className="col-md-4 sidebar-right">
        <div className="card m-b-10 scorecard" style={{ marginBottom: 0 }}>
          <div className="card m-b-10 my-bet">
            <div className="card-header">
              <ul role="tablist " className="nav nav-tabs d-inline-block">
                <li className="nav-item d-inline-block">
                  <a
                    data-toggle="tab"
                    href="#matched-bet"
                    className="nav-link active "
                  >
                    Matched <span id="matchedCount" />
                  </a>
                </li>
              </ul>
              <a href="javascript:void(0)" className="btn btn-back float-right">
                View More
              </a>
            </div>
            <div className="card-body">
              <div className="tab-content">
                <div id="matched-bet" className="tab-pane active">
                  <div className="table-responsive">
                    <table
                      id="matched"
                      className="table coupon-table table-bordered table-stripted"
                    >
                      <thead>
                        <tr>
                          <th>UserName</th>
                          <th style={{ minWidth: 140 }}>Nation</th>
                          <th style={{ minWidth: 50 }}>Rate</th> <th>Amount</th>
                          <th>PlaceDate</th> <th>MatchDate</th>
                          <th style={{ minWidth: 70 }}>Gametype</th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RightSide