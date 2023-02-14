import * as React from 'react';
import TextField from '@mui/material/TextField';
import {NavLink } from 'react-router-dom'
  import { Link } from "react-router-dom";
import '../App.css';
import Button from '@mui/material/Button';

import {AppBar,Toolbar,makeStyles} from "@material-ui/core";
import {
  

    CssBaseline,
    Typography,
    
  } from "@material-ui/core";
 
  const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(-10),
      display: "flex",
      position:"static",
    
      
      
    },
   logo: {
      flexGrow: "0",
      cursor: "pointer",
    },


user: {
      textdecoration:"underline",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),

      "&:hover": {
        color: "orange",
        borderBottom: "1px solid red",
      },
    },

orgs: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),

        "&:hover": {
          color: "orange",
          borderBottom: "1px solid red",
        },
      },

Devices: {
        textDecoration: "none",
        color: "black",
        fontSize: "20px",
        marginLeft: theme.spacing(20),

        "&:hover": {
          color: "orange",
          borderBottom: "1px solid red",
        },
      },

Gateways: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),

        "&:hover": {
          color: "orange",
          borderBottom: "1px solid red",
        },
      },
  }));






export default function Preferences() {
  const classes = useStyles();
    
  return (
   
    <div>
    <AppBar position="static" style={{ background: 'lightblue', boxShadow: 'none',}}>
<CssBaseline />
<Toolbar>

  <div className={classes.navlinks}>
    <Link to="Addnewuser" className={classes.user}>
      User
    </Link>
    <Link to="/OrganizationOrgs" className={classes.orgs}>
     Orgs
    </Link>
    <Link to="/Preferences" className={classes.Devices}>
      Devices
    </Link>
    <Link to="/contact" className={classes.Gateways}>
      Gateways
    </Link>
    
  </div>
</Toolbar>
</AppBar>
        
        <h1>Organization Profile</h1>
        <h3>Organization Name </h3>
        <TextField className = "text"
          label="Default"
          id="outlined-size-small"
          size="small"
        />
      <div>
        <br></br>
      <Button className="preferencebutton" variant="contained" href="dashboard">
        Update Organization Name
      </Button>
      <br>
      </br>
      <br>
      </br>


      <h1>Preferences </h1>

      <h3>Home Dashboard </h3>
         </div>
         <div>
         <TextField className = "text"
           label="Default"
          id="outlined-size-small"
          size="small"
        />
</div>
         </div>
  );
}