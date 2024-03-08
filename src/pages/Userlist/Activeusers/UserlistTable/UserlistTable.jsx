/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Checkbox, Modal, Table } from "antd";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import DepositAndWithdraw from "../../DepositAndWithdrawModals/DepositAndWithdraw";
import Limit from "../../Limit/Limit";
import Status from "../../Status/Status";
import Pagination from "../../../../comp/Pagination/Pagination";

const UserlistTable = (
  {
    filteredData,
    getRowClassName,
    setSearchQuery,
    isLoading,
    moreShow,
    paginationData,
    setPaginationData
  }
) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [showModal, setShowModal] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  const nav = useNavigate();
  
  

  const handleActiveChild = (val) => {
    setSearchQuery("");
    nav(`/list-clients?id=${val}`);
  };


  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      sortDirections: ["descend", "ascend"],
      width: "10%",
      key: "name",
      sorter: (a, b) => a?.username?.localeCompare(b?.username),
      render: (text, record) => (
        // <a href="/users_details " >
        // onCli
        <span
          onClick={
            () => handleActiveChild(record.id)
            //  setUserId(record?.userId)
          }
          style={{
            fontSize: "14px",
            background: "#444",
            color: "#fff",
            padding: "5px 10px",
            borderRight: "1px solid black",
            borderRadius: "4px",
            textTransform: "uppercase",
            fontWeight: "bold",
            display: "inline-block",
            cursor: "pointer",
          }}>
          {text}
        </span>
        // </a>
      ),
    },

    {
      title: "Credit Reference",
      dataIndex: "chips",
      sorter: (a, b) => Number(a?.chips) - Number(b?.chips),
      sortDirections: ["descend", "ascend"],
      render: (text, record) => {
        return (
          <p
            // onClick={() => {
            //   setSelectedActionData(record);
            //   setIsCreditDepositPortalVisible(true);
            // }}
            style={{
              float: "right",
              fontSize: "14px",
              color: "#444",
              padding: "0 5px",
              cursor: "pointer",
            }}>
            {text}
          </p>
        );
      },
    },

    {
      title: "Balance",
      dataIndex: "chips",
      key: "balance",
      hidden:moreShow,
      sorter: (a, b) => Number(a.chips) - Number(b.chips),
      render: (text, records) => {
        return (
          <span style={{ float: "right", fontSize: "14px" }}>
            {Number(records?.chips) + Number(records?.clientPl)}
          </span>
        );
      },
    },

    {
      title: "Cient (P/L)",
      dataIndex: "clientPl",
      hidden:moreShow,
      sorter: (a, b) => Number(a.clientPl) - Number(b.clientPl),
      render: (text) => (
        <span style={{ float: "right", fontSize: "14px" }}>{text}</span>
      ),
    },
   

    {
      title: "Exposure",
      dataIndex: "exposure",
      hidden:moreShow,
      sorter: (a, b) => Number(a.exposure) - Number(b.exposure),
      render: (text, record) => (
        <span
          //   onClick={() => {
          //     setSelectedActionData(record);
          //     setIsexposure(true);
          //   }}
          style={{ float: "right", fontSize: "14px", cursor: "pointer" }}>
          {Number(text)?.toFixed(2)}
        </span>
      ),
    },

    {
      title: "Available Balance",
      dataIndex: "availabePts",
      hidden:moreShow,
      sorter: (a, b) => Number(a.availabePts) - Number(b.availabePts),
      render: (text) => (
        <span style={{ float: "right", fontSize: "14px" }}>{text}</span>
      ),
    },

    {
      title: "U St",
      dataIndex: "accountLock",
      render: (_, record) => (
        <Checkbox
          disabled
          checked={record?.accountLock}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="active-user-checkbox"></Checkbox>
      ),
    },

    {
      title: "B St",
      dataIndex: "betLock",
      render: (_, record) => (
        <Checkbox
          disabled
          checked={record.betLock}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="active-user-checkbox"></Checkbox>
      ),
    },

    {
      title: "Exposure Limit",
      dataIndex: "total",
      sorter: (a, b) => Number(a.total) - Number(b.total),
      sortDirections: ["descend", "ascend"],
      render: (text) => (
        <span style={{ float: "right", fontSize: "14px" }}>{text}</span>
      ),
    },
   
    {
      title: "Default%",
      dataIndex: "pname",
      sorter: (a, b) => Number(a.pname) - Number(b.pname),
    },

    {
      title: "Account Type",
      dataIndex: "accountType",
      sorter: (a, b) => Number(a.accountType) - Number(b.accountType),
    },

    {
      title: "Casino Total ",
      dataIndex: "0",
      sorter: (a, b) => Number(a.age) - Number(b.age),
      render: (text) => (
        <span style={{ float: "right", fontSize: "14px", padding: "0px 4px" }}>
          {text}
        </span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "action",

      render: (text, record) => {
        return (
          <div style={{ display: "flex" }}>
            <Button
              onClick={() => {
                setShowModal("Deposit");
                setSelectedItem(record);
                setOpen(true);
              }}
              // onClick={showModal}
              className="action_btn">
              D
            </Button>
            <Button
              onClick={() => {
                setShowModal("Withdraw");
                setSelectedItem(record);
                setOpen(true);
              }}
              className="action_btn">
              W
            </Button>

            <Button
              onClick={() => {
                setShowModal("Exposure Limit");
                setSelectedItem(record);
                setOpen(true);
              }}
              className="action_btn"
              >
              L
            </Button>
            <Button
              onClick={() => {
                setShowModal("Credit");
                setSelectedItem(record);
                setOpen(true);
              }}
              className="action_btn">
              C
            </Button>
            <Button
              onClick={() => {
                setShowModal("Password");
                setSelectedItem(record);
                setOpen(true);
              }}
              className="action_btn">
              P
            </Button>

            <Button
              onClick={() => {
                setShowModal("Change Status");
                setSelectedItem(record);
                setOpen(true);
              }}
              className="action_btn">
              S
            </Button>
            {
              moreShow &&  <Button
              //   onClick={() => {
              //     showModalProfile(record?.id);
              //     setSelectedActionData(record);
              //     setMore(true);

              //     const { id } = record;

              //     setSelectedItemMore(id);
              //   }}
              className="action_btn"
              >
              MORE
            </Button>
            }
            
          </div>
        );
      },
    }
  ].filter(item => !item.hidden);

  const handleCancel = () => {
    setOpen(false);
    setOpen(false);
  };


  filteredData?.filter((item) => {
    if (item?.accountType === "User") {
      return;
    }
  });


  return (
    <>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        rowClassName={getRowClassName}
        className="tbs"
        loading={isLoading}
        style={{ width: "100%", overflowX: "scroll" }}
      />

      <Pagination paginationData={paginationData} setPaginationData={setPaginationData}/>

      <Modal
        title={showModal}
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
        className="deposite_withdraw"
        destroyOnClose
      >
        {showModal === "Deposit" || showModal === "Withdraw" ? (
          <DepositAndWithdraw setOpen={setOpen} showModal={showModal} selectedItem={selectedItem} />
        ) : showModal === "Change Status" ? <Status selectedItem={selectedItem} /> : (
          <Limit
            selectedItem={selectedItem}
            firstRow={showModal === "Password" ? "New Password" : showModal == "Credit" ? "Old Credit" : "Old Limit"}
            secontRow={showModal === "Password" ? "Confirm Password" : showModal == "Credit" ? "New Credit" : "New Limit"}
            disable={showModal !== "Password"}
            firstType={showModal === "Password" ? "password" : "number"}
            secontType={showModal === "Password" ? "password" : "number"}
            thirdType="password"
            showModal={showModal}
          />
        )}
      </Modal>
    </>
  );
};

export default UserlistTable;
