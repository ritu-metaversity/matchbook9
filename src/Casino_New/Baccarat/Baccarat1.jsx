
const Baccarat1 = () => {
  return (
    <div className="col-md-8 main-content baccarat">
  <div className="coupon-card">
    <div className="game-heading">
      <span className="card-header-title">
        Baccarat 
        <small className="teenpatti-rules" role="button" tabIndex={0}>
          <u>Rules</u>
        </small>
      </span>
      <span className="float-right">
        Round ID:
        <span id="round-id" />
      </span>
    </div>
    <div className="video-container">
      <iframe
        width="100%"
        height={400}
        src="https://matchbox9.com/admin/mediaplayer/baccarat2/CA3D6C92-21F0-413D-BC8C-54F6B8551066==dfront/4154a781a75f9740757a59b5fffd2eb81a6c6564?ip=152.59.170.195"
        style={{ border: 0 }}
      />
      {/* <div className="clock clock2digit flip-clock-wrapper">
        <ul className="flip play">
          <li className="flip-clock-before">
            <a href="#">
              <div className="up">
                <div className="shadow" />
                <div className="inn">1</div>
              </div>
              <div className="down">
                <div className="shadow" />
                <div className="inn">1</div>
              </div>
            </a>
          </li>
          <li className="flip-clock-active">
            <a href="#">
              <div className="up">
                <div className="shadow" />
                <div className="inn">0</div>
              </div>
              <div className="down">
                <div className="shadow" />
                <div className="inn">0</div>
              </div>
            </a>
          </li>
        </ul>
        <ul className="flip play">
          <li className="flip-clock-before">
            <a href="#">
              <div className="up">
                <div className="shadow" />
                <div className="inn">1</div>
              </div>
              <div className="down">
                <div className="shadow" />
                <div className="inn">1</div>
              </div>
            </a>
          </li>
          <li className="flip-clock-active">
            <a href="#">
              <div className="up">
                <div className="shadow" />
                <div className="inn">0</div>
              </div>
              <div className="down">
                <div className="shadow" />
                <div className="inn">0</div>
              </div>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
    <div className="casino-container baccarat">
      <div className="baccarat-container">
        <div className="row row5">
          <div className="col-12">
            <div className="row row5">
              <div className="col">
                <div className="bet-odds  suspended">Score 1-4 7.5:1</div>
                <div className="book">
                  <div className="ubook m-t-5 text-danger">
                    <b>0</b>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="bet-odds suspended"> Score 5-6 4:1</div>
                <div className="book">
                  <div className="ubook m-t-5 text-danger">
                    <b>0</b>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="bet-odds suspended"> Score 7 4.5:1</div>
                <div className="book">
                  <div className="ubook m-t-5 text-danger">
                    <b>0</b>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="bet-odds suspended"> Score 8 3:1</div>
                <div className="book">
                  <div className="ubook m-t-5 text-danger">
                    <b>0</b>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="bet-odds suspended"> Score 9 2.5:1</div>
                <div className="book">
                  <div className="ubook m-t-5 text-danger">
                    <b>0</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row5 mt-1">
          <div className="col-12">
            <div className="bet-container">
              <div className="player-pair">
                <div className="suspended">
                  Player Pair
                  <br />
                  11:1
                </div>
                <div className="book">
                  <div className="ubook m-t-5 text-danger">
                    <b>0</b>
                  </div>
                </div>
              </div>
              <div className="player">
                <div className="suspended">
                  <b className="text-uppercase">Player</b>
                  <span className="d-block">1:1</span>
                  <div className="player-card">
                    
                    <img src="https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/cards/7SS.png" />
                    <img src="https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/cards/KHH.png" />
                  </div>
                </div>
                <div className="book">
                  <div className="ubook m-t-5 text-danger">
                    <b>0</b>
                  </div>
                </div>
              </div>
              <div className="tie">
                <div className="suspended">
                  <div>
                    <b className="text-uppercase">Tie</b>
                  </div>
                  <div className="mt-2">8:1</div>
                </div>
                <div className="book">
                  <div className="ubook m-t-5 text-danger">
                    <b>0</b>
                  </div>
                </div>
              </div>
              <div className="banker">
                <div className="suspended">
                  <b className="text-uppercase">Banker</b>
                  <span className="d-block">1:1</span>
                  <div className="player-card second">
                    <img src="https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/cards/QSS.png" />
                    <img src="https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/cards/3CC.png" />
                    <img
                      src="https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/cards/3SS.png"
                      className="rrotate"
                    />
                  </div>
                </div>
                <div className="book">
                  <div className="ubook m-t-5 text-danger">
                    <b>0</b>
                  </div>
                </div>
              </div>
              <div className="banker-pair">
                <div className="suspended">
                  Banker Pair
                  <br />
                  11:1
                </div>
                <div className="book">
                  <div className="ubook m-t-5 text-danger">
                    <b>0</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row5 mt-1">
          <div className="col-12 text-right">
            <span>
              Min: <span>100</span>
              Max: <span>300000</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <marquee scrollamount={3} className="casino-remark m-b-10"></marquee>
    <div className="fancy-marker-title mt-2">
      <h4>
        Last Result
        <a
          href="https://matchbox9.com/admin/casinoresult/4154a781a75f9740757a59b5fffd2eb81a6c6564?q=baccarat2"
          className="text-right"
          style={{ fontSize: 14, float: "right", color: "rgb(255, 255, 255)" }}
        >
          View All
        </a>
      </h4>
    </div>
    <div className="m-b-10">
      <p id="last-result" className="text-right">
        <span>
          <span className="ball-runs cplayer last-result">P</span>  
        </span>
        <span>
          <span className="ball-runs cplayer last-result">P</span>  
        </span>
        <span>
           <span className="ball-runs cbanker last-result">B</span> 
        </span>
        <span>
          <span className="ball-runs cplayer last-result">P</span>  
        </span>
        <span>
          <span className="ball-runs cplayer last-result">P</span>  
        </span>
        <span>
          <span className="ball-runs cplayer last-result">P</span>  
        </span>
        <span>
           <span className="ball-runs cbanker last-result">B</span> 
        </span>
        <span>
           <span className="ball-runs cbanker last-result">B</span> 
        </span>
        <span>
           <span className="ball-runs cbanker last-result">B</span> 
        </span>
        <span>
          <span className="ball-runs cplayer last-result">P</span>  
        </span>
      </p>
    </div>
  </div>
</div>

  )
}

export default Baccarat1