import "antd/dist/antd.css";
import "../App.css";
import { Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {NavLink } from 'react-router-dom'

function ManageStock() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingGateway, seteditingGateway] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      Sno: 1,
      hwid: "101154565",
      BoardRev: "0.23",
      FwVer: "1.2.0",
      FwUpdatedOn : "12-10-2021",
      Technology:"SigFox",
      Network:"SigFox",
      BandRegion:"US",
      Date:"10-02-2022",
      Action:"Added",
      Reason:"New Deployment",
      UpdatedBy :"UserName"
    },
    {
      Sno: 2,
      hwid: "1956475215",
      BoardRev: "0.23",
      FwVer: "1.2.0",
      FwUpdatedOn : "12-10-2021",
      Technology:"SigFox",
      Network:"SigFox",
      BandRegion:"US",
      Date:"10-02-2022",
      Action:"Added",
      Reason:"Tech Change",
      UpdatedBy :"UserName"
    },
    {
      Sno: 3,
      hwid: "1050549465",
      BoardRev: "0.23",
      FwVer: "1.2.0",
      FwUpdatedOn : "12-10-2021",
      Technology:"LoraWAN",
      Network:"SigFox",
      BandRegion:"AU",
      Date:"10-02-2022",
      Action:"Removed",
      Reason:"Network Change",
      UpdatedBy :"UserName"
    },
    {
      Sno: 4,
      hwid: "1111057878",
      BoardRev: "0.23",
      FwVer: "1.2.0",
      FwUpdatedOn : "12-10-2021",
      Technology:"LoraWAN",
      Network:"SigFox",
      BandRegion:"UK",
      Date:"10-02-2022",
      Action:"Added",
      Reason:"New Deployment",
      UpdatedBy :"UserName"
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "Sno",
      dataIndex: "Sno"
    },
    
    {
      key: "2",
      title: "hwid",
      dataIndex: "hwid",
      
    },
    {
        key: "3",
        title: "BoardRev:",
        dataIndex: "BoardRev",
      
      },
    {
      key: "3",
      title: "FwVer",
      dataIndex: "FwVer",
     
    },
    {
      key: "4",
      title: "FwUpdatedOn",
      dataIndex: "FwUpdatedOn",
    
    },
    {
        key: "5",
        title: "Technology",
        dataIndex: "Technology",
        
      },
    
      {
        key: "6",
        title: "Network",
        dataIndex: "Network",
        
      },
      {
        key: "7",
        title: "Band/Region",
        dataIndex: "BandRegion",
      },
      {
        key: "8",
        title: "Date",
        dataIndex: "Date",
      },
      {
        key: "9",
        title: "Action",
        dataIndex: "Action",
      },
      {
        key: "10",
        title: "Reason",
        dataIndex: "Reason",
      },
      {
        key: "11",
        title: "UpdatedBy",
        dataIndex: "UpdatedBy",
      },
    {
      key: "12",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditgateway(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeletegateway(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  // const onGateway = () => 
  // {
  //   const randomNumber = parseInt(Math.random() * 1000);
  //   const newgateway = {
  //     Sno: randomNumber,
  //     ID: "ID ",
  //     NetworkType: randomNumber,
  //     Location: "Location ",
  //     Status : "Status",
  //   };
  //   setDataSource((pre) => {
  //     return [...pre, newgateway];
  //   });
  // };

  const onDeletegateway = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Gateways ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((gateway) => gateway.Sno !== record.Sno);
        });
      },
    });
  };
  const onEditgateway = (record) => {
    setIsEditing(true);
    seteditingGateway({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    seteditingGateway(null);
  };
  return (
    <div classID="App">
      <div className='gateway'>
      <NavLink activeClassName="gateway" to="/AddHardware"> + Add Hardware</NavLink>
    </div>
      <header classID="App-header">
       
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit gateway"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((gateway) => {
                if (gateway.Sno === editingGateway.Sno) {
                  return editingGateway;
                } else {
                  return gateway;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingGateway?.ID}
            onChange={(e) => {
              seteditingGateway((pre) => {
                return { ...pre, ID: e.target.value };
              });
            }}
          />
          <Input
            value={editingGateway?.NetworkType}
            onChange={(e) => {
              seteditingGateway((pre) => {
                return { ...pre, NetworkType: e.target.value };
              });
            }}
          />
          <Input
            value={editingGateway?.Location}
            onChange={(e) => {
              seteditingGateway((pre) => {
                return { ...pre, Location: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
      
    </div>
  );
}

export default ManageStock;
