import {AppBar,Toolbar,makeStyles,Button,IconButton} from "@material-ui/core";

import React, { useState,} from "react";
import { Link as RouterLink } from "react-router-dom";
import '../App.css';

const tableIcons = {
  
};
// const api = axios.create({
//   baseURL: `https://reqres.in/api`
//  })
 
  
  
  const headersData = [
    {
      label: "User",
      href: "/Addnewuser",
      
    },
    {
      label: "Orgs",
      href: "/OrganizationOrgs",
    },
    {
      label: "Devices",
      href: "/Preferences",
    },
    {
      label: "Gateways",
      href: "/API-Key",
    },
  ];
  
  const useStyles = makeStyles(() => ({
    header: {
      background: 'transparent', 
      boxShadow: 'none',
      paddingRight: "79px",
      paddingLeft: "1px",
      paddingTop:"10px",
      width:"79%",     
      
      "@media (max-width: 9000px)": {
        paddingLeft: 1,

      },
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      color:"black",
      marginLeft: "38px",
    },
    
   
  }));
  
  export default function Header() {
    const { header, logo, menuButton, toolbar,  } = useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
   
  
    const displayDesktop = () => {
      return (
        
        <Toolbar className={toolbar}>
          {/* {femmecubatorLogo} */}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      
  
      return (
        
        <Toolbar>
          
          
        </Toolbar>
      );
    };
  
   
  
  
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <header>
        <AppBar className={header}  position="fixed" >
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
    
    
  }
  