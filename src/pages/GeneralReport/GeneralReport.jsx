import { Button, Col,  Form, Row, Select } from "antd";
import {  gameReportColumn } from "../cloumns";
import AccTable from "../AccountStatement/AccTable";
const GeneralReport = () => {
 
 
const onFinish = (value)=>{
console.log(value);
}

const handelAccType = (value) => {

};

  return (
    <div className="listing-grid">
      <div className="" data-select2-id={9}>
        <div className="detail-row" data-select2-id={8}>
          <h2>General Report</h2>
          <Form
            name="basic"
            className="acc_form"
            onFinish={onFinish}
            autoComplete="off">
            <Row className="m-t-20">
              <Col xs={4}>
              <Form.Item label="Select Type" name="chooseType">
                  <Select  defaultValue="General Report" value="1" onChange={handelAccType}>
                    <Select.Option value="1">General Report</Select.Option>
                    <Select.Option value="2">Credit Refrance Report</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={2}>
                <Form.Item>
                  <Button className="load_btn" htmlType="submit">
                    Load
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        
      </div>
      <AccTable
        data={[]}
        isLoading={false}
        columns={gameReportColumn}
      />
    </div>
  );
};

export default GeneralReport;
