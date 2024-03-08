import AccTable from "../AccountStatement/AccTable";
import { casinoReportColumn } from "../cloumns";
import { Button, Col, DatePicker, Form, Row, Select } from "antd";

const CasinoReport = () => {
  return (
    <div className="listing-grid">
      <div className="">
        <div className="detail-row">
          <h2>Casino Report</h2>
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
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <div id="example_wrapper" className="dataTables_wrapper no-footer">
          <div className="dataTables_length" id="example_length">
            <label>
              Show{" "}
              <select
                name="example_length"
                aria-controls="example"
                className="">
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>{" "}
              entries
            </label>
          </div>
          <div id="example_filter" className="dataTables_filter">
            <label>
              Search:
              <input
                type="search"
                className="form-control datatable-search"
                placeholder=""
                aria-controls="example"
              />
            </label>
          </div>
        </div>
      </div>
      <AccTable data={[]} isLoading={""} columns={casinoReportColumn} />
    </div>
  );
};

export default CasinoReport;
