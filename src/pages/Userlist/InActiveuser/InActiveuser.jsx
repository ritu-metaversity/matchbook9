/* eslint-disable react/prop-types */
import { useEffect } from "react";
import SearchUser from "../SearchUser/SearchUser";
import { useInActiveUserListMutation } from "../../../store/service/gameListService";
import UserlistTable from "../Activeusers/UserlistTable/UserlistTable";



const InActiveuser = ({ userId, setSearchQuery, searchQuery}) => {
  const [trigger, { data, isLoading }] = useInActiveUserListMutation();

  useEffect(() => {
    trigger({
      id: userId,
      index: 0,
      noOfRecords: 100,
      totalPages: 2,
      username: searchQuery
    });
  }, [userId, searchQuery]);

  const filteredData = data?.data?.dataList?.filter(
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
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        />
    <div className="active_user-table">
      <UserlistTable  
        filteredData={sortedData}
        getRowClassName={getRowClassName}
        setSearchQuery={setSearchQuery}
        isLoading={isLoading}
      />
    </div>
    </>

  );
};

export default InActiveuser;
