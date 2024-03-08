/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Col, Form, Input, Row } from "antd";
import { useEffect, useState } from "react";
import { CiUndo } from "react-icons/ci";
import { FaSignInAlt } from "react-icons/fa";
import {
  useChildChangePasswordMutation,
  useCreaditLimitMutation,
  useDWCMutation,
  useUpdateLimitMutation,
} from "../../../store/service/gameListService";

const Limit = ({
  selectedItem,
  firstRow,
  secontRow,
  secontType,
  disable,
  firstType,
  showModal,
}) => {
  const [amount, setAmount] = useState();
  const [newPassword, setNewPassword] = useState();
  const [trigger, { data }] = useDWCMutation();
  const [limit, { data: creaditLimit }] = useCreaditLimitMutation();
  const [updateLimit, { data: updateLimitData }] = useUpdateLimitMutation();
  const [changePass, { data: changePassword }] =
    useChildChangePasswordMutation();

  useEffect(() => {
    if (selectedItem?.userId) {
      trigger({
        userId: selectedItem.userId,
      });
    }
    if (firstRow === "Old Limit") {
      limit({
        userId: selectedItem.userId,
      });
    }
  }, [selectedItem]);

  const onFinish = (values) => {
    console.log("Success:", values);
    if (firstRow === "Old Limit") {
      updateLimit({
        luPassword: values?.password,
        netExposure: values?.secontRow,
        userId: selectedItem?.userId,
      });
    } else if (showModal === "Password") {
      changePass({
        password: newPassword,
        confirmPassword: amount,
        lupassword: values?.password,
        userId: selectedItem?.userId,
        newPassword: newPassword,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Row gutter={[16, 0]}>
          <Col xl={8} xs={8}>
            <Form.Item label={firstRow} name={firstRow}></Form.Item>
          </Col>
          <Col xl={16} xs={16}>
            <Input
              type={firstType}
              name={firstRow}
              onChange={(e)=>setNewPassword(e.target.value)}
              disabled={disable}
              value={creaditLimit?.data?.netexposure}
              style={{
                textAlign: `${showModal === "Password" ? "left" : "right"}`,
              }}
            />
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xl={8} xs={8}>
            <Form.Item label={secontRow}></Form.Item>
          </Col>
          <Col xl={16} xs={16}>
            <Form.Item
              name={secontRow}
              rules={[
                { required: true, message: "Please fill in this field" },
              ]}>
              <Input
                type={secontType}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  textAlign: `${showModal === "Password" ? "left" : "right"}`,
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xl={8} xs={8}>
            <Form.Item label="Transaction Password" name="password"></Form.Item>
          </Col>
          <Col xl={16} xs={16}>
            <Form.Item name="password">
              <Input type="password" />
            </Form.Item>
          </Col>
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
      </Form>
    </div>
  );
};

export default Limit;
