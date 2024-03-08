/* eslint-disable react/prop-types */
import { Table } from "antd";

const AccTable = ({data, isLoading, columns}) => {
  
  return (
    <>
      <Table

        columns={columns}
        dataSource={data}
        pagination={false}
        locale={{emptyText:(<p className="no_data">No data available in table</p>)} }
        className="acc_table"
        loading={isLoading}
        style={{ width: "100%", overflowX: "scroll" }}
      />

      
    </>
  );
};

export default AccTable;
