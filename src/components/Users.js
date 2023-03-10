import React, { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import Grid from '@material-ui/core/Grid'
import {NavLink } from 'react-router-dom'
import '../App.css';
import {AppBar,Toolbar,makeStyles} from "@material-ui/core";
import {  CssBaseline} from "@material-ui/core";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => (
  {
    navlinks:
    {
      marginLeft: theme.spacing(-20),
      display: "flex",
      position:"static",
      alignitems: "center",
      padding: "-20px 0px"
  },

  link:
  {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(28),
    width:"100%",
    position:"static",
    "&:hover":
    {
      color: "orange",
      borderBottom: "1px solid red",
    },
  },
}));

const tableIcons = 
{
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

// DUMMY API FUNCTION
const api = axios.create(
  {
    baseURL: `https://reqres.in/api`
  })
  
  function Users()
  {
    const classes = useStyles();
    var columns = 
    [
      // {title: "Avatar", render: rowData => <Avatar maxInitials={1} size={40} round={true} name={rowData === undefined ? " " : rowData.first_name} />  },
      {title: " Login", field: "admin"},
      {title: " Name", field: "first_name"},
      {title: "Email", field: "email"},
      {title: "Last active", field: "Online"},
    ]
    const [data, setData] = useState([]); //table data
    const [iserror, setIserror] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])
    
    useEffect(() =>
    { 
      api.get("/users")
      .then(res =>
        {
          setData(res.data.data)
        })
      .catch(error=>
        {
          console.log("Error")
        })
    },
    [])
    
    const handleRowUpdate = (newData, oldData, resolve) =>
    {
    //validation
    let errorList = []
    // if(newData.name === ""){
    //   errorList.push("Please enter name")
    // }
    // if(newData.Login === ""){
    //   errorList.push("Please enter Device name")
    // }
    // if(newData.Users === "" ){
    //   errorList.push("Please enter a number of Users ")
    // }
    // if(newData.Tags === "" ){
    //     errorList.push("Please enter a number of Tags ")
    //   }
    
    if(errorList.length < 1)
    {
      api.patch("/users/"+newData.id, newData)
      .then(res =>
        {
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);
          resolve()
          setIserror(false)
          setErrorMessages([])
        })
      .catch(error =>
        {
          setErrorMessages(["Update failed! Server error"])
          setIserror(true)
          resolve()
        })
    }
      else
      {
        setErrorMessages(errorList)
        setIserror(true)
        resolve()
       }
  }
  
  const handleRowAdd = (newData, resolve) =>
  {
    //validation
    let errorList = []
    if(newData.name === undefined)
    {
      errorList.push("Please enter name")
    }
    if(newData.Login === undefined)
    {
      errorList.push("Please enter a Name")
    }
    if(newData.Users === undefined)
    {
      errorList.push("Please enter a Email")
    }
    if(newData.Tags === undefined)
    {
      errorList.push("Please enter a Tags Number")
    }
    if(newData.Gateways === undefined)
    {
      errorList.push("Please enter a Gateways")
    }
    errorList.length = 0
    console.log(newData);
  }
  
  const handleRowDelete = (oldData, resolve) =>
  {
    api.delete("/users/"+oldData.id)
    .then(res =>
      {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
    .catch(error =>
      {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }
  
  return (
  <div className="App">
    <AppBar position="static" style={{ background: 'lightblue', boxShadow: 'none',borderwidth: "1%" }}>
      <CssBaseline />
      <Toolbar>
        <div className={classes.navlinks}>
          <Link to="Users" className={classes.link}> User </Link>
          <Link to="/Organization" className={classes.link}> Orgs </Link>
          <Link to="/Preferences" className={classes.link}> Devices </Link>
          <Link to="/GateWay" className={classes.link}> Gateways </Link>
        </div>
      </Toolbar>
    </AppBar>
    
    <div className='gateway'>
      <NavLink className="rrr" to="/Addnewuser"> Add User</NavLink>
    </div>
    
    <Grid container spacing={1}>
      <Grid item xs={10}></Grid>
      <Grid item xs={11}>
        <div>
          {
            iserror &&
            <Alert severity="error">
              {
                errorMessages.map
                (
                  (msg, i) =>
                  { 
                    return <div key={i}>{msg} </div>
                  }
                )
              }
            </Alert>
          }       
        </div>
        
        <MaterialTable
          title="Organization"
          columns={columns}
          data={data}
          icons={tableIcons}
          editable=
          {
            {
              onRowUpdate: (newData, oldData) =>
              new Promise((resolve) =>
                {
                  handleRowUpdate(newData, oldData, resolve);   
                }),
              onRowDelete: (oldData) =>
              new Promise((resolve) =>
                {
                  handleRowDelete(oldData, resolve)
                }),
            }
          }
        />
      </Grid>
        <Grid item xs={3}></Grid>
    </Grid>
  </div>
  );
}
export default Users;