import { Button, Col, DatePicker, Form, Row, Select } from "antd";
import "./AccountStatement.scss";
import { useAccountStatementMutation } from "../../store/service/gameListService";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import AccTable from "./AccTable";
import { AccColumn } from "../cloumns";
import ExcelPdf from "./ExcelPdf";
const AccountStatement = () => {
    const [noOfRecords, setnoOfRecords] = useState(100);
    const [index, setIndex] = useState(0);
    const [fromDate, setFromDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [toDate, setToDate] = useState(dayjs().subtract(16, 'day').format('YYYY-MM-DD'));
    const [userid, setUserid] = useState("");
    const [type, setType] = useState(1);
    const [gameType, setGameType] = useState(1);

  const [trigger,{ data, isLoading }] = useAccountStatementMutation();

  const onChange = (date, dateString) => {
    setFromDate(dateString);
  };
  const ontoChange = (date, dateString) => {
    setToDate(dateString);
  };
  const handelAccType = (value) => {
    setType(value);
  };
  const handelGameType = (value) => {
    setGameType(value);
  };

  useEffect(()=>{
    trigger({
        index,
        noOfRecords,
        fromDate,
        toDate,
        userid,
        type,
      })
  }, [noOfRecords])

  const onFinish = ()=>{
    trigger({
        index,
        noOfRecords,
        fromDate,
        toDate,
        userid,
        type,
      })
  }
  return (
    <div className="listing-grid">
      <div className="" >
        <div className="detail-row" >
          <h2>Account Statement</h2>
          <Form
            name="basic"
            className="acc_form"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Row className="m-t-20">
              <Col xs={4}>
                <Form.Item label="Account Type" name="accType">
                  <Select defaultValue="All" value="1" onChange={handelAccType}>
                    <Select.Option value="1">All</Select.Option>
                    <Select.Option value="2">Balance Report</Select.Option>
                    <Select.Option value="3">Game Report</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={4}>
                <Form.Item label="Game Name" name="gName">
                  <Select defaultValue="All" value="1" onChange={handelGameType}>
                    <Select.Option value="1">All</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={4}>
                <Form.Item label="Search By Client Name" name="clientName">
                  <Select
                    showSearch
                    //   placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={[]}
                  />
                </Form.Item>
              </Col>
              <Col xs={4}>
                <Form.Item label="From" name="startDate">
                  <DatePicker className="datepicker" onChange={onChange} />
                </Form.Item>
              </Col>
              <Col xs={4}>
                <Form.Item label="To" name="endDate">
                  <DatePicker className="datepicker" onChange={ontoChange} />
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
        <div id="example_wrapper" className="dataTables_wrapper no-footer">
          <div className="dataTables_length" id="example_length">
            {/* <label>
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
            </label> */}
    <ExcelPdf />

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
      <AccTable data={data?.data?.dataList} isLoading={isLoading} columns={AccColumn}/>
    </div>
  );
};

export default AccountStatement;
