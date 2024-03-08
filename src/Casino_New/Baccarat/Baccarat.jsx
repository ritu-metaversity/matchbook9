import { Link } from 'react-router-dom';
import './Baccarat.scss'

const Baccarat = () => {
  return (
    <div className="listing-grid">
      <div className="detail-row">
        <h2>Baccarat</h2>
        <div className="row m-t-20">
          <div className="col-md-4 m-b-30 div-figure">
            <Link to="/casino/baccarat2">
              <img
                className="img-fluid"
                src="https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/banners/baccarat2.jpg"
              />
            </Link>
          </div>
          <div className="col-md-4 m-b-30 div-figure">
            <Link to="/casino/baccarat">
              <img
                className="img-fluid"
                src="https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/banners/baccarat.jpg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baccarat;
