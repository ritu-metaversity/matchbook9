import './Queen.scss'

const Queen = () => {
  return (
    <div className="col-md-8 main-content new-casino">
    <div className="coupon-card">
      <div className="casino-video">
        <div className="casino-video-title">
          <span className="casino-name">Queen</span>
          <div className="casino-video-rid">Round ID: 240803160443</div>
        </div>
        <div className="video-box-container">
          <div className="video-box">
            <iframe
              src="https://matchbox9.com/admin/mediaplayer/queen/14FF59B7-F7BA-4E72-B087-4D4DCB2EE78B==dfront/aed547cde61e582982a5bed39bbf03adf0d4be48?ip=152.59.170.195"
              style={{ border: 0 }}
            />
          </div>
        </div>
        <div className="clock clock2digit flip-clock-wrapper">
          <ul className="flip play">
            <li className="flip-clock-before">
              <a href="#">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">3</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">3</div>
                </div>
              </a>
            </li>
            <li className="flip-clock-active">
              <a href="#">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">2</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">2</div>
                </div>
              </a>
            </li>
          </ul>
          <ul className="flip play">
            <li className="flip-clock-before">
              <a href="#">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">5</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">5</div>
                </div>
              </a>
            </li>
            <li className="flip-clock-active">
              <a href="#">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">4</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">4</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="video-overlay">
          <div>
            <div className="videoCards">
              <div>
                <p className="m-b-0 text-white">
                  <b>
                    <span className="text-success">Total 0</span>:
                    <span className="text-warning">0</span>
                  </b>
                </p>
                <div />
              </div>
              <div>
                <p className="m-b-0 text-white">
                  <b>
                    <span className="text-success">Total 1</span>:
                    <span className="text-warning">0</span>
                  </b>
                </p>
                <div />
              </div>
              <div>
                <p className="m-b-0 text-white">
                  <b>
                    <span className="text-success">Total 2</span>:
                    <span className="text-warning">0</span>
                  </b>
                </p>
                <div />
              </div>
              <div>
                <p className="m-b-0 text-white">
                  <b>
                    <span className="text-success">Total 3</span>:
                    <span className="text-warning">0</span>
                  </b>
                </p>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-content redqueen m-t-10">
        <div className="casino-odds-box-wrapper">
          <div className="casino-odds-box-container casino-odds-box-container-double">
            <div className="casino-odds-box-bhav">
              <b>Total 0</b>
            </div>
            <div className="casino-odds-box">
              <div className="back-border">
                <span className="casino-odds-box-odd">3.25</span>
                <span>1000000</span>
              </div>
              <div className="lay-border">
                <span className="casino-odds-box-odd">3.50</span>
                <span>1000000</span>
              </div>
            </div>
            <span>
              <div className="ubook m-t-5 text-danger">
                <b>0</b>
              </div>
            </span>
          </div>
          <div className="casino-odds-box-container casino-odds-box-container-double">
            <div className="casino-odds-box-bhav">
              <b>Total 1</b>
            </div>
            <div className="casino-odds-box">
              <div className="back-border">
                <span className="casino-odds-box-odd">3.07</span>
                <span>1000000</span>
              </div>
              <div className="lay-border">
                <span className="casino-odds-box-odd">3.28</span>
                <span>1000000</span>
              </div>
            </div>
            <span>
              <div className="ubook m-t-5 text-danger">
                <b>0</b>
              </div>
            </span>
          </div>
          <div className="casino-odds-box-container casino-odds-box-container-double">
            <div className="casino-odds-box-bhav">
              <b>Total 2</b>
            </div>
            <div className="casino-odds-box">
              <div className="back-border">
                <span className="casino-odds-box-odd">3.66</span>
                <span>1000000</span>
              </div>
              <div className="lay-border">
                <span className="casino-odds-box-odd">3.94</span>
                <span>1000000</span>
              </div>
            </div>
            <span>
              <div className="ubook m-t-5 text-danger">
                <b>0</b>
              </div>
            </span>
          </div>
          <div className="casino-odds-box-container casino-odds-box-container-double">
            <div className="casino-odds-box-bhav">
              <b>Total 3</b>
            </div>
            <div className="casino-odds-box">
              <div className="back-border">
                <span className="casino-odds-box-odd">7.00</span>
                <span>1000000</span>
              </div>
              <div className="lay-border">
                <span className="casino-odds-box-odd">7.60</span>
                <span>1000000</span>
              </div>
            </div>
            <span>
              <div className="ubook m-t-5 text-danger">
                <b>0</b>
              </div>
            </span>
          </div>
        </div>
        <div className="min-max text-right">
          Min: <span>100</span>| Max: <span>100000</span>
        </div>
      </div>
      <marquee scrollamount={3} id="mar" className="casino-remark">
        This is 21 cards game 2,3,4,5,6 x 4 =20 and 1 Queen. Minimum total 10 or
        queen is required to win.
      </marquee>
      <div className="fancy-marker-title">
        <h4>
          Last Result
          <a
            href="https://matchbox9.com/admin/casinoresult/aed547cde61e582982a5bed39bbf03adf0d4be48?q=queen"
            className="text-right"
            style={{ fontSize: 14, float: "right", color: "rgb(255, 255, 255)" }}
          >
            View All
          </a>
        </h4>
      </div>
      <div className="m-b-10">
        <p className="ball-by-ball row m-t-10" />
        <p id="last-result" className="text-right">
          <span>
              <span className="ball-runs playerb last-result">2</span>
             
          </span>
          <span>
            <span className="ball-runs playerb last-result">0</span>  
             
          </span>
          <span>
            <span className="ball-runs playerb last-result">0</span>  
             
          </span>
          <span>
            <span className="ball-runs playerb last-result">0</span>  
             
          </span>
          <span>
            <span className="ball-runs playerb last-result">0</span>  
             
          </span>
          <span>
              
            <span className="ball-runs playerb last-result">3</span> 
          </span>
          <span>
              <span className="ball-runs playerb last-result">2</span>
             
          </span>
          <span>
            <span className="ball-runs playerb last-result">0</span>  
             
          </span>
          <span>
             <span className="ball-runs playerb last-result">1</span> 
             
          </span>
          <span>
            <span className="ball-runs playerb last-result">0</span>  
             
          </span>
        </p>
        <p />
      </div>
    </div>
  </div>
  
  )
}

export default Queen