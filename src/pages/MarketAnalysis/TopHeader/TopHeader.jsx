import { Col, Modal, Row } from "antd";
import "./TopHeader.scss";
import { useState } from "react";
import UserBook from "../UserBook/UserBook";

const TopHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="table-top-buttons">
      <Row>
        <Col xs={12} md={12} lg={12}></Col>
        <Col xs={12} md={12} lg={12} className="float-right text-right">
          <form>
            <ul className="d-inline-block">
              <li className="form-group active-button m-l-20 d-inline-block BetActives">
                <a href="#" className="btn btn-back active">
                  Bet Lock
                </a>
                <ul className="sub-button">
                  <li>
                    <a href="#">All Deactive</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Userwise</a>
                  </li>
                </ul>
              </li>
              <li className="form-group active-button m-l-20 d-inline-block FancyActive">
                <a href="#" className="btn btn-back active">
                  Fancy Lock
                </a>
                <ul className="sub-button">
                  <li>
                    <a href="#">All Deactive</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Userwise</a>
                  </li>
                </ul>
              </li>
              <li className="form-group active-button m-l-20 d-inline-block">
                <a
                  onClick={() => setOpen(true)}
                  className="btn btn-back active">
                  User Book
                </a>
              </li>
              <li className="form-group active-button m-l-20 d-inline-block">
                <a href="javascript:void(0)" className="btn btn-back active">
                  Bookmarkers Book
                </a>
              </li>
            </ul>
          </form>
        </Col>
      </Row>
      <Modal
        title="User Book"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1296}
        footer={null}>
       <UserBook />
      </Modal>
    </div>
  );
};

export default TopHeader;
