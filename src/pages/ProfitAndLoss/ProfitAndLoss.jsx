import { Button, Col, DatePicker, Form, Row, Select } from "antd";
import { useEffect, useState } from "react";
import './profitloss.scss'
import dayjs from "dayjs";
import { useProfitLossMutation } from "../../store/service/gameListService";
import { ProftAndLossColumn } from "../cloumns";
import AccTable from "../AccountStatement/AccTable";
import { OmitProps } from "antd/es/transfer/ListBody";
import ProfitLossStatus from "./ProfitLossStatus";
import ProfitLossTable from "./ProfitLossTable";
const ProfitAndLoss = () => {
  const [noOfRecords, setnoOfRecords] = useState(100);
  const [index, setIndex] = useState(0);
  const [fromDate, setFromDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [toDate, setToDate] = useState(
    dayjs().subtract(16, "day").format("YYYY-MM-DD")
  );

  const [trigger, { data, isLoading }] = useProfitLossMutation();

  const onChange = (date, dateString) => {
    setFromDate(dateString);
  };
  const ontoChange = (date, dateString) => {
    setToDate(dateString);
  };

  useEffect(() => {
    trigger({
      sportId: "4",
      matchId: "",
      fromDate,
      toDate,
      userId: "",
      pageNumber: index,
      pageSize: noOfRecords,
    });
  }, [noOfRecords]);

  const onFinish = () => {
    trigger({
      sportId: "4",
      matchId: "",
      fromDate,
      toDate,
      userId: "",
      pageNumber: index,
      pageSize: noOfRecords,
    });
  };


  return (
    <div className="listing-grid">
      <div className="" data-select2-id={9}>
        <div className="detail-row" data-select2-id={8}>
          <h2>Profit Loss</h2>
          <Form
            name="basic"
            className="acc_form"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Row className="m-t-20">
              <Col xs={4}>
                <Form.Item label="Search By Client Name" name="clientName">
                  <Select
                    showSearch
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
        
      </div>
      <ProfitLossStatus/>
      <ProfitLossTable />
    </div>
  );
};

export default ProfitAndLoss;
