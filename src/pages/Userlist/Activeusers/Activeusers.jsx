/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useActiveUserListMutation } from "../../../store/service/gameListService";
import UserlistTable from "./UserlistTable/UserlistTable";
import SearchUser from "../SearchUser/SearchUser";

const Activeusers = ({ userId, setSearchQuery, searchQuery, moreShow}) => {
  const [trigger, { data, isLoading }] = useActiveUserListMutation();
  const [accountStatementBody, setAccountStatementBody] = useState({
    noOfRecords: 100,
    index: 0,
    totalPages: 1,
  })

  useEffect(() => {
    trigger({
      id: userId,
      index: 0,
      noOfRecords: 100,
      totalPages: 2,
      username: searchQuery
    });
  }, [userId, searchQuery]);

  useEffect(()=>{
    setAccountStatementBody({
      noOfRecords: 100,
      index: data?.data?.currentPage - 1,
      totalPages: data?.data?.totalPages,
    });
  }, [])

  const filteredData= data?.data?.dataList?.filter(
    (item) =>
      item?.username?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  const sortedData = filteredData?.slice().sort((a, b) => a?.id - b?.id);



  const getRowClassName = (record, index) => {
    return index % 2 === 0 ? "even_row" : "odd_row";
  };

  return (
    <>
    <SearchUser
    moreShow={moreShow}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        />
    <div className="active_user-table">
      <UserlistTable  
        filteredData={sortedData}
        getRowClassName={getRowClassName}
        setSearchQuery={setSearchQuery}
        isLoading={isLoading}
        moreShow={moreShow}
        paginationData={accountStatementBody} 
        setPaginationData={setAccountStatementBody}
      />
    </div>
    </>

  );
};

export default Activeusers;
