/* eslint-disable react/prop-types */
import { Button, Col, Form, Row, Switch } from "antd";
import "./status.scss";
import { CiUndo } from "react-icons/ci";
import { FaSignInAlt } from "react-icons/fa";

const Status = ({ selectedItem }) => {
  return (
    <div className="head">
      <Row className="mb-20">
        <Col xs={24} md={24}>
          <div className="user-name">
            <p>{selectedItem?.userId}</p>
          </div>
          <div className="float-right user-status">
            <p
              style={{
                color: selectedItem?.active === true ? "green" : "red",
                fontSize: "13px",
              }}>
              {selectedItem?.active ? "Active" : "Inactive"}
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mb-40">
        <Col xs={12} md={12}>
          <div style={{ textAlign: "center" }}>
            <p>User Active</p>
            <Switch
              // checked={selectedItem?.accountLock}
              checkedChildren="On"
              unCheckedChildren="Off"
              className="switch_btn"

              // onChange={setAccountLock}
            ></Switch>
          </div>
        </Col>
        <Col xs={12} md={12}>
          <div style={{ textAlign: "center" }}>
            <p>Bet Active</p>
            <Switch
              checked={selectedItem?.betLock}
              checkedChildren="On"
              unCheckedChildren="Off"
              className="switch_btn"
              // onChange={setBetLock}
            ></Switch>
          </div>
        </Col>
      </Row>
      <Row className="mb-20">
        <Col xs={8} md={8}>
          <label>Transaction Password</label>
        </Col>
        <Col xs={14} md={14}>
          <input type="password" />
        </Col>
        <Col xs={2} md={2}></Col>
      </Row>

      <Form.Item className="modals_button">
        <Button type="dashed" className="btn btn-submit" data-dismiss="modal">
          <CiUndo style={{ marginRight: "8px" }} />
          Back
        </Button>
        <Button className="btn-submit" htmlType="submit">
          Submit
          <FaSignInAlt style={{ marginLeft: "8px" }} />
        </Button>
      </Form.Item>
    </div>
  );
};
export default Status;
