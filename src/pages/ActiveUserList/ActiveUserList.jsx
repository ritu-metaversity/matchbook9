import { useState } from "react";
import Activeusers from "../Userlist/Activeusers/Activeusers"
import { Link, useSearchParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const ActiveUserList = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const userId = searchParams.get("id");
  
    const antIcon = (
      <FaSpinner className="spin_roatet" />
    );
  return (
    <div className="listing-grid">
        <div className="header" style={{ marginTop: "2px" }}>
          <span className="list">Account List</span>
          <Link to="/market_analysis/Add-account">
            <span className="btn btn-diamond">Add Account</span>
          </Link>
        </div>

        <Activeusers
        antIcon={antIcon}
        setSearchParams={setSearchParams}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        userId={userId}
        moreShow={true}
      />
    </div>
  )
}

export default ActiveUserList