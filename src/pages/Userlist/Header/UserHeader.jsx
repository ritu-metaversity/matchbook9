import { Tabs } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import Activeusers from "../Activeusers/Activeusers";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
// import SearchUser from "../SearchUser/SearchUser";
import InActiveuser from "../InActiveuser/InActiveuser";




const UserHeader = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("id");

  const antIcon = (
    <FaSpinner className="spin_roatet" />
  );

  const items = [
    {
      key: "1",
      label: (
        <span
        //   onClick={() => { if(userId !== null){
        //       nav(`/list-clients?id=${userId}`)
        //     //   setIsLoading(true)
        //     }else{
        //     //   setIsLoading(true)
        //       nav("/list-clients");
        //     }
        //   }}
        >
          Active Users
        </span>
      ),
      children: <Activeusers
        antIcon={antIcon}
        setSearchParams={setSearchParams}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        userId={userId}
        moreShow={false}
      />,
    },  

    {
      key: "2",
      label: (
        <span
        // onClick={() => {
        //   if(userId !== null){
        //     nav(`/list-clients?id=${userId}`);
        //     setIsLoading(true)
        //   }else{
        //     setIsLoading(true)
        //     nav("/list-clients");
        //   }
        // }}
        >
          Deactive Users
        </span>
      ),
      children: <InActiveuser
        antIcon={antIcon}
        setSearchParams={setSearchParams}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        userId={userId}
      />,
    },
  ];

  const onChangeTab = () => {
  };

  return (
    <>
      <div className="listing-grid">
        <div className="header" style={{ marginTop: "2px" }}>
          <span className="list">Account List</span>
          <Link to="/add-account">
            <span className="btn btn-diamond">Add Account</span>
          </Link>
        </div>

        <div className="users">
          <Tabs
            defaultActiveKey="1"
            type="card"
            items={items}
            onChange={onChangeTab}
            destroyInactiveTabPane={true}
          />
        </div>


      </div>
    </>
  );
};

export default UserHeader;
