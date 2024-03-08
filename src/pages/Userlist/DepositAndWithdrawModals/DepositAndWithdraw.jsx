/* eslint-disable react/prop-types */
import { Button, Col, Form, Input, Row } from "antd";
import "./styles.scss";
import { useEffect, useState } from "react";
import {
  useDWCMutation,
  useDepositeChipsMutation,
  useWithdrawChipsMutation,
} from "../../../store/service/gameListService";
import { CiUndo } from "react-icons/ci";
import { FaSignInAlt } from "react-icons/fa";

const DepositAndWithdraw = ({ selectedItem, showModal, setOpen }) => {
  const [amount, setAmount] = useState(0);

  const [trigger, { data }] = useDWCMutation();
  const [deposite, { data: depositChipsPnl, isLoading: isDepositing, isError: depositError, error: errorDeposite }] = useDepositeChipsMutation();
const [withdraw, { data: withdrawChipsPnl, isLoading: isWithdrawing, isError: withdrawError, error: errorwithdraw }] = useWithdrawChipsMutation();

  useEffect(() => {
    trigger({
      userId: selectedItem?.userId,
    });
  }, [selectedItem]);

  const onFinish = (values) => {
    if (showModal === "Deposit") {
      deposite({
        amount: amount,
        remark: values?.remark,
        lupassword: values?.password,
        userId: selectedItem?.userId,
      })
    } else {
      withdraw({
        amount: amount,
        remark: values?.remark,
        lupassword: values?.password,
        userId: selectedItem?.userId,
      })
    }
  };


  if (isDepositing || isWithdrawing) {
    console.log("fwetwertwerw")
  } else if (depositError || withdrawError) {
    alert(errorwithdraw?.data?.message || errorDeposite?.data?.message)
  } else {
    if(withdrawChipsPnl?.data?.status || depositChipsPnl?.data?.status){
    alert(withdrawChipsPnl?.data?.message || depositChipsPnl?.data?.message)}
    
  }

  return (
    <div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off">
        <Row>
          <Col xl={8} xs={8}>
            <Form.Item
              label={data?.data?.parentName}
              name="username"></Form.Item>
          </Col>
          <Col xl={16} xs={16}>
            <span className="popup-box" id="deposite-first">
              {data?.data?.parentAmount}
            </span>
            <span className="popup-box" id="deposite-first-diff">
              {amount != 0 && Number(data?.data?.parentAmount) - Number(amount)}
            </span>
          </Col>
        </Row>
        <Row>
          <Col xl={8} xs={8}>
            <Form.Item
              label={data?.data?.childName}
              name="username"></Form.Item>
          </Col>
          <Col xl={16} xs={16}>
            <span className="popup-box" id="deposite-first">
              {Number(data?.data?.childAmount).toFixed(2)}
            </span>
            <span className="popup-box" id="deposite-first-diff">
              {amount != 0 &&
                (Number(data?.data?.childAmount) + Number(amount))?.toFixed(2)}
            </span>
          </Col>
        </Row>
        <Row>
          <Col xl={8} xs={8}>
            <Form.Item label="Amount"></Form.Item>
          </Col>
          <Col xl={16} xs={16}>
            <Form.Item
              name="amount"
              rules={[
                { required: true, message: "Please fill in this field" },
              ]}>
              <Input
                type="number"
                onChange={(e) => setAmount(+e.target.value)}
                style={{ textAlign: "right" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xl={8} xs={8}>
            <Form.Item label="Remark" name="username"></Form.Item>
          </Col>
          <Col xl={16} xs={16}>
            <Form.Item name="remark">
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xl={8} xs={8}>
            <Form.Item label="Transaction Password" name="username"></Form.Item>
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
            submit
            <FaSignInAlt style={{ marginLeft: "8px" }} />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DepositAndWithdraw;
