import * as React from 'react';
import '../App.css';
import {NavLink } from 'react-router-dom';
import '../App.css';
import {AppBar,Toolbar,makeStyles} from "@material-ui/core";
import {  CssBaseline} from "@material-ui/core";
import { Link } from "react-router-dom";
import {  Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// Appbar Heading with styles
const useStyles = makeStyles((theme) =>
({
    navlinks:
    {
        marginLeft: theme.spacing(-10),
        display: "flex",
        position:"static",
    },
    
    user:
    {
        textdecoration:"underline",
        color: "Black",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": 
        {
            color: "orange",
            borderBottom: "1px solid red"
        },
    },
    
    orgs:
    {
        textDecoration: "none",
        color: "Black",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover":
        {
            color: "orange",
            borderBottom: "1px solid red",
        },
    },
    
    Devices:
    {
        textDecoration: "none",
        color: "Black",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover":
        {
            color: "orange",
            borderBottom: "1px solid red",
        },
    },

    Gateways:
    {
        textDecoration: "none",
        color: "White",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover":
        {
            color: "orange",
            borderBottom: "1px solid red",
        },
    },
}));


export default function Preferences()
{
    const classes = useStyles();
    const [isEditing, setIsEditing] = useState(false);
    const [editingGateway, seteditingGateway] = useState(null);
    const [dataSource, setDataSource] = useState
    ([
        {
            Sno: 1,
            ID: "101154565",
            NetworkType: "Sigfox",
            Location: "Chennai",
            Status : "Online",
            Date:"02.01.2001",
            Last:"02.01.2022",
            org:"org-1"
        },
        
        {
            Sno: 2,
            ID: "1956475215",
            NetworkType: "LoRaWAN",
            Location: "Buffalo",
            Status : "Online",
            Date:"12.05.2011",
            Last:"02.01.2022",
            org:"org-2"
        },
        
        {
            Sno: 3,
            ID: "1050549465",
            NetworkType: "LoRaWAN",
            Location: "Buffalo",
            Status : "Offline",
            Date:"10.11.2018",
            Last:"21.01.2020",
            org:"org-3"
        },
        
        {
            Sno: 4,
            ID: "1111057878",
            NetworkType: "Sigfox",
            Location: "Chennai",
            Status : "Online",
            Date:"30.01.2021",
            Last:"25.01.2023",
            org:"org-4"
        },
    ]);
    
    const columns = 
    [
        {
            key: "1",
            title: "Sno",
            dataIndex: "Sno",
        },
        
        {
            key: "2",
            title: "ID",
            dataIndex: "ID",
        },
        
        {
            key: "3",
            title: "Installed-Date",
            dataIndex: "Date",
        },
        
        {
            key: "3",
            title: "NetworkType",
            dataIndex: "NetworkType",
        },
        
        {
            key: "4",
            title: "Location",
            dataIndex: "Location",
        },
        
        {
            key: "5",
            title: "Last-Update",
            dataIndex: "Last",
        },
        
        {
            key: "5",
            title: "Status",
            dataIndex: "Status",
        },
      
        {
            key: "5",
            title: "Organization",
            dataIndex: "org",
        },
        
        {
            key: "6",
            title: "Actions",
            
            render: (record) =>
            {
                return (
                <>
                    <EditOutlined onClick={() => { onEditgateway(record); }} />
                    <DeleteOutlined onClick={() => { onDeletegateway(record); }} style={{ color: "red", marginLeft: 12 }} />
                </>
                );
            },
        },
    ];
    
    // const onGateway = () =>
    // {
    //     const randomNumber = parseInt(Math.random() * 1000);
    //     const newgateway =
    //     {
    //         Sno: randomNumber,
    //         ID: "ID ",
    //         NetworkType: randomNumber,
    //         Location: "Location ",
    //         Status : "Status",
    //     };
    //     setDataSource((pre) =>
    //     {
    //         return [...pre, newgateway];
    //     });
    // };
    
    const onDeletegateway = (record) =>
    {
        Modal.confirm
        ({
            title: "Are you sure, you want to delete this Gateway ?",
            okText: "Yes",
            okType: "danger",
            onOk: () =>
            {
                setDataSource((pre) => {return pre.filter((gateway) => gateway.Sno !== record.Sno);});
            },
        });
    };
    
    const onEditgateway = (record) =>
    {
        setIsEditing(true);
        seteditingGateway({ ...record });
    };
    const resetEditing = () =>
    {
        setIsEditing(false);
        seteditingGateway(null);
    };
    
    return (
    
    <div>
        {/* appbar strats */}
        <AppBar position="static" style={{ background: 'lightblue', boxShadow: 'none',}}>
            <CssBaseline />
            <Toolbar>
                <div className={classes.navlinks}>
                    <Link to="Addnewuser" className={classes.user}> User </Link>
                    <Link to="/Organization" className={classes.orgs}> Org </Link>
                    <Link to="/Preferences" className={classes.Devices}> Devices </Link>
                    <Link to="/GateWay" className={classes.Gateways}> Gateway  </Link>
                </div>
            </Toolbar>
        </AppBar>
        {/* appbar ends */}
        <h1>Gateways</h1>
        <div className='gateway'>
            <NavLink activeClassName="gateway" to="/Addgateway">Add Gateway</NavLink>
        </div>
        
        <header classID="App-header">
            <Table columns={columns} dataSource={dataSource}></Table>
            <Modal
            title="Edit gateway"
                visible={isEditing}
                okText="Save"
                onCancel={() =>
                    {
                        resetEditing();
                    }}
                    onOk={() => 
                        {
                            setDataSource((pre) =>
                            {
                                return pre.map((gateway) => 
                                {
                                    if (gateway.Sno === editingGateway.Sno)
                                    {
                                        return editingGateway;
                                    }
                                    else
                                    {
                                        return gateway;
                                    }
                                });
                            });
                            resetEditing();
                        }}
            >
                <Input
                    value={editingGateway?.ID}
                    onChange={(e) =>
                        {
                            seteditingGateway((pre) =>
                            {
                                return { ...pre, ID: e.target.value };
                            }
                            );
                        }
                    }
                />
                
                <Input
                    value={editingGateway?.NetworkType}
                    onChange={(e) =>
                        {
                            seteditingGateway((pre) =>
                            {
                                return { ...pre, NetworkType: e.target.value };
                            }
                            );
                        }
                    }
                />
                
                <Input
                    value={editingGateway?.Location}
                    onChange={(e) =>
                        {
                            seteditingGateway((pre) =>
                            {
                                return { ...pre, Location: e.target.value };

                            }
                            );
                        }
                    }
                />
            </Modal>
        </header>
    </div>
);}
