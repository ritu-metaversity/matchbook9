import { useEffect, useState } from "react";
import "./CasinoResult.css";
import { useNavigate, useParams } from "react-router-dom";
import { tableIdtoUrl, titleById } from "../Constant/Constant";
import ResultModalContainer from "../LastResult/ResultModalContainer";
import { DatePicker } from "antd";
import moment from "moment";
import dayjs from "dayjs";
import CasinoResultTable from "./CasinoResultTable";
import { useCasinoResultMutation } from "../../store/service/supermasteAccountStatementServices";

const CasinoResult = () => {
  const [casinoId, setCasinoId] = useState("");
  const [mid, setMid] = useState("");
  const [noOfRecords, setNoOfRecords] = useState(10);
  const [index, setIndex] = useState(0);
  var curr = new Date();
  const time = moment(curr).format("YYYY-MM-DD");
  const [startDate, setStartDate] = useState(time);
  const dateFormat = "YYYY-MM-DD";
  const nav = useNavigate()

  const {id} = useParams()


  const handleCasinoId = (e)=>{
    setCasinoId(e.target.value);
    nav(`/casinoresult/${e.target.value}`)
  }

  const [trigger, {data:resultList}] = useCasinoResultMutation()

  useEffect(() => {
    trigger(
      {
        gtype: tableIdtoUrl[casinoId || id],
        noOfRecord: noOfRecords,
        index,
      }
    )
  
  }, [noOfRecords, index, id]);

  const handleSubmit = ()=>{
  
    trigger(
      {
        gtype: tableIdtoUrl[casinoId || id],
        noOfRecord: noOfRecords,
        index,
      }
    )
  }

  const changeNoOfRecords = (e) => {
    setNoOfRecords(Number(e.target.value));
  };
  const handlePrev = () => {
    setIndex((o) => (o <= 0 ? 0 : o - 1));
  };
  const handleNext = () => {
    setIndex((o) => (o >= 100 ? 100 : o + 1));
  };

  const StartDateValue = (date, dateString) => {
    setStartDate(dateString);
  };

  return (
    <div>
      <ResultModalContainer
        tableId={casinoId}
        mid={mid}
        setMid={(mid) => setMid(mid)}
      />
      <div className="card">
        <div className="card-header d-flex j-space">
          <div className="text-white">Casino Result</div>
          <div className="show_btn"><button onClick={()=>nav(-1)}>Back</button></div>
        </div>
        <div className="card-body gap-container ">
        <div className="row">
            <div className={`${window.innerWidth < 800?"col-6":"col-2"} `}>
              <DatePicker
                defaultValue={dayjs(startDate)}
                className="mx-input"
                format={dateFormat}
                selected={startDate}
                onChange={StartDateValue}
                disabledDate={(d) =>
                  !d ||
                  d.isBefore(dayjs().subtract(2, "month")) ||
                  d.isAfter(dayjs())
                }
              />
              {/* <CustomizedDatePicker value={fromDate} onChange={setFromDate} /> */}
            </div>
            <div className={`${window.innerWidth < 800?"col-6":"col-2"} `}>
              <div className="form-group mb-0">
                <select
                  name="reportType"
                  onChange={(e) => handleCasinoId(e)}
                  className="custom-select">
                  {/* <option value="">Casino Type</option> */}
                  {Object.keys(titleById).map((key, index) => (
                    <option key={index+key} value={key}>{titleById[key]}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={`${window.innerWidth < 800?"col-12":"col-2"}  mob_btn`} onClick={handleSubmit}>
              <button className="btn " style={{ background:"rgb(116 118 111)" }}>Submit</button>
            </div>
          </div>
          <div className="w-100">
            Show{" "}
            <select onChange={changeNoOfRecords} className="custom-select-sm">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            Entries
          </div>
          <CasinoResultTable resultList={resultList} setMid={setMid} setIndex={setIndex} handlePrev={handlePrev} index={index} handleNext={handleNext}/>

        </div>
      </div>
    </div>
  );
};

export default CasinoResult;
