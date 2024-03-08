
const Livematch = () => {
  return (
    <>
    <div className="card m-b-10">
      <div
        className="card-header"
        data-toggle="collapse"
        data-target=".video-tv"
        id="showtv"
        aria-expanded="true">
        <h6 className="card-title">Live Match</h6>
      </div>
      <div id="video-tv" className="video-tv collapse show" style={{}}>

      </div>
    </div>
    <div className="card m-b-10">
    <div
      className="card-header"
      data-toggle="collapse"
      data-target=".video-tv"
      id="showtv"
      aria-expanded="true">
      <h6 className="card-title">Score Card</h6>
    </div>
    <div id="video-tv" className="video-tv collapse show" style={{}}>

    </div>
  </div>
  </>
  );
};

export default Livematch;
