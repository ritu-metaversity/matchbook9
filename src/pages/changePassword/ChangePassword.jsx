import { Button, Col, Form, Input, Row } from "antd";
import "./ChangePassword.scss";
import { useChangePasswordMutation } from "../../store/service/gameListService";
import { useEffect, useState } from "react";

const ChangePassword = () => {
  const [errMsg, setErrMsg] = useState("");
  const [errShow, setErrShow] = useState(false);
  const [trigger, { data }] = useChangePasswordMutation();

  const onFinish = (values) => {
    trigger({ ...values });
  };

  console.log(data, "fsdfsdfffdsff");


  useEffect(()=>{
    if(data?.status == false){
        setErrShow(true);
        setErrMsg(data?.message)
    }else(
        setErrMsg(false)
    )
  }, [data])

  return (
    <div className="listing-grid">
      <div className="">
        <div className="detail-row">
          <h2>Change Password</h2>
          {errShow && (
            <div className="alert alert-danger">
              <ul>
                <li>{errMsg}</li>
              </ul>
            </div>
          )}

          <Form
            name="basic"
            className="acc_form change_pass"
            onFinish={onFinish}
            autoComplete="off">
            <Row className="m-t-20" style={{ margin: "0px" }}>
              <Col xs={8} md={8}>
                <div className="form-group">
                  <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your new password!",
                      },
                    ]}>
                    <Input type="password" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
            <Row className="m-t-20" style={{ margin: "0px" }}>
              <Col xs={8} md={8}>
                <div className="form-group">
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                    ]}>
                    <Input type="password" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
            <Row className="m-t-20" style={{ margin: "0px" }}>
              <Col xs={8} md={8}>
                <div className="form-group">
                  <Form.Item
                    label="Transaction Password"
                    name="currentPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your transaction password!",
                      },
                    ]}>
                    <Input type="password" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
            <Col xs={2}>
              <Form.Item>
                <Button
                  className="load_btn"
                  htmlType="submit"
                  style={{ margin: "0px" }}>
                  Load
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
