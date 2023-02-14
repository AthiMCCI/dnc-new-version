
import { Link } from 'react-router-dom'
import "../App.css";
import { BrowserRouter as NavLink } from 'react-router-dom'
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
  
      
      color: "Black",
      fontSize: "20px",

      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "orange",
        borderBottom: "1px solid red",
      },
    },
    orgs: {
        textDecoration: "none",
        color: "White",
        fontSize: "20px",
  
        marginLeft: theme.spacing(20),
        "&:hover": {
          color: "orange",
          borderBottom: "1px solid red",
        },
      },
      Devices: {
        textDecoration: "none",
        color: "Black",
        fontSize: "20px",
  
        marginLeft: theme.spacing(20),
        "&:hover": {
          color: "orange",
          borderBottom: "1px solid red",
        },
      },
      Gateways: {
        textDecoration: "none",
        color: "Black",
        fontSize: "20px",
  
        marginLeft: theme.spacing(20),
        "&:hover": {
          color: "orange",
          borderBottom: "1px solid red",
        },
      },
  }));




function LoginPage () {
    
    const classes = useStyles();


    return (
        
        <div className="text-center m-5-auto">
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
           
            <form action="/home">
                <p>
                <h1>New Organization </h1>
            <h4>Each organization contains their own dashboards, data sources, and configuration</h4>
            <h4>which cannot be shared shared between organizations. While users might belong</h4>
            <h4> to  more than one organization,
                multiple organizations are most frequently used</h4>
                <h4>  in multi-tenant deployments.</h4>
                </p>
                <p>
                    <label> <b>Organization Name</b></label>
                    </p>

                    <input className="input" type="text" name="first_name" required />
                    {/* <NavLink active ClassName="gateway" to="/Addorganization"> + New Org</NavLink> */}
                    <Button className="preferencebutton" variant="contained" href="Preferences">
       create
      </Button>
                   
                
            </form>
            
        </div>
    )
}
export default LoginPage;