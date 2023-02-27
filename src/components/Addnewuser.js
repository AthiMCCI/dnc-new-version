import React from 'react';
import Button from '@mui/material/Button';
import "../App.css";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {AppBar,Toolbar,makeStyles} from "@material-ui/core";
import { CssBaseline} from "@material-ui/core";
import {NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";

const org =
[
  {
    value: 'Admin',
    label: 'Admin',
  },

  {
    value: 'User',
    label: 'User',
  },

  {
    value: 'Viewer',
    label: 'Viewer',
  },
];

const useStyles = makeStyles((theme) => (
  {
    navlinks:
    {
      marginLeft: theme.spacing(-10),
      display: "flex",
      position:"static"
    },
    
    user:
    {
      textdecoration:"underline",
      color: "White",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover":
      {
        color: "orange",
        borderBottom: "1px solid red",
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
      color: "Black",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover":
      {
        color: "orange",
        borderBottom: "1px solid red",
      },
    },
  }));
  
  function Addnewuser (props)
  {
    const classes = useStyles();
    return (
    <div>
      <AppBar position="static" style={{ background: 'lightblue', boxShadow: 'none',}}>
        <CssBaseline />
        <Toolbar>
          <div className={classes.navlinks}>
            <Link to="Users" className={classes.user}> User </Link>
            <Link to="/OrganizationOrgs" className={classes.orgs}> Orgs </Link>
            <Link to="/Preferences" className={classes.Devices}> Devices </Link>
            <Link to="/contact" className={classes.Gateways}> Gateways </Link>
          </div>
        </Toolbar>
      </AppBar>
      
      <h1>User Information</h1>
      <h3>Name</h3>
      <TextField className = "text" label="Name" id="outlined-size-small" size="small" />
      <NavLink className="edit" strict to="/events/"> Edit  </NavLink>
      
      <h3>Email</h3>
      <TextField className = "text" label="Email-Id" id="outlined-size-small" size="small" />
      <NavLink className="edit" strict to="/events/"> Edit </NavLink>
      
      <h3>UserName</h3>
      <TextField className = "text" label="UserName" id="outlined-size-small" size="small" />
      <NavLink className="edit" strict to="/events/"> Edit  </NavLink>
      
      <h3>Password</h3>
      <TextField className = "text" label="Password" id="outlined-size-small" size="small" />
      <NavLink className="edit" strict to="/events/"> Edit </NavLink>
      
      <Button onClick={() => alert(' Are you sure! you want to delete the User')} className="delete" variant="contained" href="">
        Delete User
      </Button> 
      {""}
      <Button onClick={() => alert(' Selected User was disable')} className="disable" variant="contained" href="">
        Disable User
      </Button>
      
      <div> 
        <h2 className="header" >Organizations</h2>
      </div>

      {/* DROPDOWN */}
      <div>
        <TextField className="textfield"
          id="outlined-select-Main Org" select label="Main Org." helperText="Please select Main Org" >
            {org.map((option) =>
            (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        
        <Button className="save" variant="contained" href="Preferences"> Save </Button> 
        <Button className="cancel" variant="contained" href="Preferences"> Cancel </Button> 
        <NavLink className="remove" strict to="/events/"> Remove from Organization </NavLink>
        <Button  variant="contained" href="Preferences"> Add user to Organization </Button> 
      </div>
    </div>
  );
}
export default Addnewuser ;