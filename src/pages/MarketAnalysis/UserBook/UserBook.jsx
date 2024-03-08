import { useState, useEffect } from "react";
import { Select } from "antd";

const UserBook = ({ matchId, tabData }) => {
  const [formData, setFormData] = useState({
    ipAddress: "",
    amountFrom: "",
    amountTo: "",
    betType: "",
  });

//   const [trigger, { data }] = useBetSearchMutation();

//   useEffect(() => {
//     trigger({
//       matchId,
//       amountFrom: 0,
//       amountTo: 0,
//       ipAddres: "",
//       marketName: "Match Odds",
//       username: "",
//       betType: 1,
//       index: 0,
//       noOfRecords: 100,
//     });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };


//   const handleSearch = () => {
//     // Perform search with formData
//     trigger({
//         ...formData,
//         matchId,
//         marketName: "Match Odds",
//         username: "",
//         index: 0,
//         noOfRecords: 100,
//       });
//     console.log("Search with", formData);
//   };

  return (
    <div>
      <div className="viewMoreMatchedDataModal">
        
      </div>
    </div>
  );
};

export default UserBook;
