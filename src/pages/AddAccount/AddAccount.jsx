import "./addaccount.scss";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { usertypeArray } from "./userTypeArray";
import { useState } from "react";
import CommissionSettings from "./CommissionSettings/CommissionSettings";
import MinMaxBet from "./MinMaxBet/MinMaxBet";

const AddAccount = () => {
  const [expShow, setExpShow] = useState(false);

  const handleSelectChange = (e, name) => {
    setExpShow(e === 2);
  };

  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const userType = localStorage.getItem("userType");

  return (
    <div className="main-container">
      <div className="add-account">
        <h2 className="m-b-20 heading_name" style={{ marginTop: "0px" }}>
          Add Account
        </h2>
        <Form onFinish={onFinish} autoComplete="off">
          <Row>
            <Col xs={12} md={12} className="personal-detail ">
              <h4 className="m-b-20 top_left">Personal Detail</h4>
              <Row>
                <Col xs={12} md={12}>
                  <div className="form-group">
                    <Form.Item
                      label="Client Name"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}>
                      <Input placeholder="Client Name" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className="form-group">
                    <Form.Item
                      label="User password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}>
                      <Input
                        type="password"
                        placeholder="Transaction Password"
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className="form-group">
                    <Form.Item
                      label="Retype password"
                      name="password_confirmation"
                      dependencies={["password"]}
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "The two passwords that you entered do not match!"
                              )
                            );
                          },
                        }),
                      ]}>
                      <Input type="password" placeholder="Retype Password" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className="form-group">
                    <Form.Item
                      label="Full Name"
                      name="fullname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your full name!",
                        },
                      ]}>
                      <Input placeholder="Full Name" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className="form-group">
                    <Form.Item
                      label="City"
                      name="city"
                      rules={[
                        {
                          required: true,
                          message: "Please input your city!",
                        },
                      ]}>
                      <Input placeholder="City" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className="form-group">
                    <Form.Item
                      label="Phone"
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}>
                      <Input placeholder="Phone" />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={12} className="personal-detail">
              <div style={{ marginLeft: "18px" }}>
                <h4 className="m-b-20 col-md-12">Account Detail</h4>
                <Row>
                  <Col xs={12} md={12}>
                    <div className="form-group">
                      <Form.Item
                        label="Account Type"
                        name="accounttype"
                        rules={[
                          {
                            required: true,
                            message: "Please select your account type!",
                          },
                        ]}>
                        {
                          <Select
                            placeholder="- Select Your A/c. Type -"
                            onChange={(e) => handleSelectChange(e, "userRole")}>
                            {usertypeArray[userType]}
                          </Select>
                        }
                      </Form.Item>
                    </div>
                  </Col>
                  <Col xs={12} md={12}>
                    <div className="form-group">
                      <Form.Item
                        label="Credit Reference"
                        name="credit_ref"
                        rules={[
                          {
                            required: true,
                            message: "Please input your credit reference!",
                          },
                        ]}>
                        <Input placeholder="Credit Reference" type="number" />
                      </Form.Item>
                    </div>
                  </Col>
                  {expShow ? (
                    <Col xs={12} md={12}>
                      <div className="form-group">
                        <Form.Item
                          label="Exposer Limit"
                          name="exposelimit"
                          rules={[
                            {
                              required: true,
                              message: "Please input your exposer limit!",
                            },
                          ]}>
                          <Input placeholder="Exposer Limit" type="number" />
                        </Form.Item>
                      </div>
                    </Col>
                  ) : null}
                </Row>
              </div>
            </Col>
          </Row>

          <CommissionSettings />
          <div className="m-b-20">
            <MinMaxBet />
          </div>
          <Row gutter={[16, 16]} justify="end">
            <Col>
              <div className="float-right">
                <div className="form-group">
                  <Form.Item
                    label="Transaction Password:"
                    name="transactionPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input password!",
                      },
                    ]}>
                    <Input
                      type="password"
                      placeholder="Transaction Password:"
                      style={{ width: "315px" }}
                    />
                  </Form.Item>
                </div>
              </div>
            </Col>
          </Row>

          <Row gutter={[16, 16]} justify="end">
            <Col>
              <Form.Item>
                <Button htmlType="submit" className="btn btn-back">
                  Create Account
                </Button>
              </Form.Item>
            </Col>
          </Row>

          <div className="row m-t-20">
            <div className="col-md-12"></div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddAccount;
