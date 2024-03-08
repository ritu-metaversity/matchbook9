import AccTable from "../AccountStatement/AccTable";
import { gameReportColumn } from "../cloumns";
import { Button, Col, DatePicker, Form, Row, Select } from "antd";

const GameReport = () => {
  return (
    <div className="listing-grid">
      <div className="">
        <div className="detail-row">
          <h2>Game Report</h2>
          <Form
            name="basic"
            className="acc_form"
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Row className="m-t-20">
              <Col xs={4}>
                <Form.Item label="From" name="startDate">
                  <DatePicker className="datepicker" />
                </Form.Item>
              </Col>
              <Col xs={4}>
                <Form.Item label="To" name="endDate">
                  <DatePicker className="datepicker" />
                </Form.Item>
              </Col>
             
              <Col xs={4}>
                <Form.Item label="Type" name="type">
                  <Select defaultValue="All" value="1">
                    <Select.Option value="1">All</Select.Option>
                    <Select.Option value="1">Match</Select.Option>
                    <Select.Option value="1">Fancy</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
             
              <Col xs={2}>
                <Form.Item>
                  <Button className="load_btn" htmlType="submit">
                    Game List
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Row>
                <Col xs={13} lg={13}>
                <Form.Item className="game_report_select" label="" name="type">
                  <Select defaultValue="All" value="1">
                    <Select.Option value="1">All</Select.Option>
                   
                  </Select>
                </Form.Item>
                </Col>
                <Col xs={3}>
                <Form.Item>
                  <Button className="load_btn" style={{marginTop:"0px"}} >
                    Show Game Report
                  </Button>
                </Form.Item>
              </Col>
              <Col xs={3}>
                <Form.Item>
                  <Button className="load_btn" style={{marginTop:"0px"}}>
                    Master Game Report
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <AccTable data={[]} isLoading={""} columns={gameReportColumn} />
    </div>
  );
};

export default GameReport;
