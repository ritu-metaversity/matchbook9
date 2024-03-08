import { Button, Col, DatePicker, Form, Row, Select } from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import AccTable from "../AccountStatement/AccTable";
import { CurrColumn } from "../cloumns";
import { useCurrBetMutation } from "../../store/service/gameListService";
const CurrentBet = () => {
    const [noOfRecords, setnoOfRecords] = useState(100);
    const [index, setIndex] = useState(0);
    const [userid, setUserid] = useState("");
    const [isDeleted, setIsdeleted] = useState(false);
    const [showTable, setShowTable] = useState(false)


    const [trigger, {data, isLoading}] = useCurrBetMutation();


 
  const handelAccType = (value) => {
    if(value == 1){
        setIsdeleted(false)
    }else if(value == 2){
        setIsdeleted(false)
    }else{
        setIsdeleted(true)
    }
  };


  // useEffect(()=>{
  //   trigger({
  //       index,
  //       noOfRecords,
  //       isDeleted,
  //       sportType:1,
  //       betType:1
  //     })
  // }, [noOfRecords])

  const onFinish = ()=>{
    setShowTable(true)
    trigger({
       index,
        noOfRecords,
        isDeleted,
        sportType:1,
        betType:1
      })
  }



  
 
  return (
    <div className="listing-grid">
      <div className="" >
        <div className="detail-row" >
          <h2>Current Bets</h2>
          <Form
            name="basic"
            className="acc_form"
            onFinish={onFinish}
            autoComplete="off">
            <Row className="m-t-20">
              <Col xs={4}>
                <Form.Item label="Choose Type" name="chooseType">
                  <Select defaultValue="All" value="1" onChange={handelAccType}>
                    <Select.Option value="1">Matched</Select.Option>
                    <Select.Option value="2">UnMatched</Select.Option>
                    <Select.Option value="3">Deleted</Select.Option>
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
        {
          showTable &&   
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
        }
      
      </div>
      {
        showTable &&  <AccTable data={data?.data?.dataList} isLoading={isLoading} columns={CurrColumn}/>
      }
     
    </div>
  );
};

export default CurrentBet;
