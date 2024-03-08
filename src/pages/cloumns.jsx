export const AccColumn = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => a?.date?.localeCompare(b?.username),
      
    },

    {
      title: "Credit",
      dataIndex: "credit",
      render: (text, record) => {
        return (
          <p
         >
            {text}
          </p>
        );
      },
    },

    {
      title: "Debit",
      dataIndex: "Debit",
      key: "Debit",
    },

    {
      title: "Closing",
      dataIndex: "closing",
      render: (text) => (
        <span style={{ float: "right", fontSize: "14px" }}>{text}</span>
      ),
    },
   

    {
      title: "Description",
      dataIndex: "description",
      render: (text, record) => (
        <span
        
          style={{fontSize: "14px", cursor: "pointer" }}>
          {text}
        </span>
      ),
    },

    {
      title: "Fromto",
      dataIndex: "fromto",
      render: (text) => (
        <span style={{  fontSize: "14px" }}>{text}</span>
      ),
    },
  ]


  export const CurrColumn = [
    {
      title: "Event Type",
      dataIndex: "eventType",
      key: "eventType",
      sorter: (a, b) => a?.eventType?.localeCompare(b?.eventType),
      
    },

    {
      title: "Event Name",
      dataIndex: "eventNamem",
      sorter: (a, b) => a?.eventNamem - b?.eventNamem,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      sorter: (a, b) => (a.username) - (b.username),
    },

    {
      title: "Runner Name",
      dataIndex: "runner",
      sorter: (a, b) =>(a.runner) - (b.runner),
      
    },
    {
      title: "Bet Type",
      dataIndex: "bettype",
      sorter: (a, b) =>a.remark - b.remark,
    },

    {
      title: "User Rate",
      dataIndex: "rate",
      sorter: (a, b) =>(a.rate) - (b.rate),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) =>(a.amount) - (b.amount),
    },
    {
      title: "Place Date",
      dataIndex: "time",
      sorter: (a, b) =>(a.time) - (b.time),
    },
    {
      title: "Match Date",
      dataIndex: "time",
      sorter: (a, b) =>(a.time) - (b.time),
    },
  ]


  export const ProftAndLossColumn = [
    {
      title: "Game Name",
      dataIndex: "matchName",
      key: "matchName",
      sorter: (a, b) => a?.matchName?.localeCompare(b?.matchName),
      
    },

    {
      title: "Game Type",
      dataIndex: "eventNamem",
      sorter: (a, b) => a?.eventNamem - b?.eventNamem,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Profit and Loss",
      dataIndex: "pnl",
      key: "pnl",
      sorter: (a, b) => (a.pnl) - (b.pnl),
    },
  ]


  export const ganeralReportColumn = [
    {
      title: "Sr. No",
      dataIndex: "matchName",
      key: "matchName",
      
    },

    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ]
  export const gameReportColumn = [
    {
      title: "Sr. No",
      dataIndex: "matchName",
      key: "matchName",
      
    },

    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Sr. No",
      dataIndex: "matchName",
      key: "matchName",
      
    },

    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ]




  export const casinoReportColumn = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      
    },

    {
      title: "Casino Type",
      dataIndex: "casinotype",
    },

    {
      title: "Game Name",
      dataIndex: "gamename",
      key: "gamename",
    },
    {
      title: "Transaction Id",
      dataIndex: "transactionid",
      key: "transactionid",
      
    },

    {
      title: "Transaction Type",
      dataIndex: "transactionType",
    },

    {
      title: "Game Id",
      dataIndex: "gameId",
      key: "gameId",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ]
  export const casinoResult = [
    {
      title: "Round Id",
      dataIndex: "roundid",
      key: "roundid",
      
    },

    {
      title: "Winner",
      dataIndex: "Winner",
    },

    
  ]