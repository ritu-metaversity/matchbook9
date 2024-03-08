import { Button, Col, DatePicker, Form, Row, Select } from 'antd'
import AccTable from '../AccountStatement/AccTable'
import { casinoResult } from '../cloumns'

const CasinoResult = () => {
  return (
    <div className="listing-grid">
    <div className="">
      <div className="detail-row">
        <h2>Casino Result Report</h2>
        <Form
          name="basic"
          className="acc_form"
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Row className="m-t-20">
            <Col xs={3}>
              <Form.Item label="" name="startDate">
                <DatePicker className="datepicker" />
              </Form.Item>
            </Col>
            <Col xs={4}>
              <Form.Item label="" name="type">
                <Select defaultValue="All" value="1">
                  <Select.Option value="1">Test Teenpatti</Select.Option>
                  <Select.Option value="1">20-20 Teenpatti</Select.Option>
                  <Select.Option value="1">Open Teenpatti</Select.Option>
                </Select>
              </Form.Item>
            </Col>
           
            <Col xs={2}>
              <Form.Item>
                <Button className="load_btn" htmlType="submit" style={{marginTop:"0px"}}>
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
    <AccTable data={[]} isLoading={""} columns={casinoResult} />
  </div>
  )
}

export default CasinoResult