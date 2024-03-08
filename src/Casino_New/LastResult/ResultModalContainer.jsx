/* eslint-disable react/prop-types */
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { titleById } from "../Constant/Constant";
import ResultModal2CardContent from "./ResulTModalContent2Card";
import ResulTModalContent3Card from "./ResulTModalContent3Card";
import ResultModalContent from "./ResultModalContent";
import CasinoModal from "../CasinoBetSlip/Modal/CasinoModal";


const ResultModalContainer= ({ mid, setMid, tableId }) => {
  const [resultByMid, setREsultByMid] = useState(null);
  const {id} = useParams()
 

  const [loading, setLoading] = useState(false);
const token = localStorage.getItem("token")

  useEffect(() => {
    fetch("http://adminapi.247idhub.com/admin-new-apis/diamond/api/mid",  {
      body: JSON.stringify({
        mid: mid
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "dffdfdfd")
      });
  }, [mid]);


  // useEffect(() => {
    
  //   if (mid) {
  //     setLoading(true);
  //     CasinoLiveApi.Casino_Result_Mod({
  //       mid: mid
  //     }).then((res) => {
  //       setLoading(false);
  //       setREsultByMid(res.data || null);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //     });
  //   }
  //   return () => {
  //     setREsultByMid(null);
  //   };
  // }, [mid]);

  return (
    <div>
      {loading && (
        <p className="place-lodder">
          <div>
            <i className="fa fa-spinner fa-spin"></i>
          </div>
        </p>
      )}
      <CasinoModal
        title={`${titleById[tableId || id]} Result`}
        open={!!mid}
        size="lg"
        handleClose={() => setMid("")}
      >
        {(id === "51" || id === "57") && resultByMid && (
          <ResulTModalContent3Card result={resultByMid} />
        )}
        {id === "52" && resultByMid && (
          <ResultModal2CardContent result={resultByMid} />
        )}
        {(id == "54" || id == "53" || id == "55") && resultByMid && (
          <ResultModalContent result={resultByMid} />
        )}
      </CasinoModal>
    </div>
  );
};

export default ResultModalContainer;
