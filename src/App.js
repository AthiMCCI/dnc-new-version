import './App.css'
import SideMenu, { menuItems } from './components/SideMenu'
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import { useState } from 'react'
import Dashboard from './components/Dashboard';
import GateWay from './components/Gateway';
import Organization from './components/Organization';
import DeviceReport from './components/DeviceReport';
import ManageGateway from './components/ManageGateway';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import Addgateway from './components/Addgateway';
import LoginPage from './components/LoginPage';
import OrganizationOrgs from './components/OrganizationOrgs';
import Preferences from './components/Preferences';
import Users from './components/Users';
import Addnewuser from './components/Addnewuser'
import ManageStock from './components/ManageStock';
import AddHardware from './components/AddHardware';



// const USER_TYPES = {
//   PUBLIC : 'Public User',
//   NORMAL_USER :"Normal User",
//   ADMIN_USER : "Admin User"
// } 

// // const CURRENT_USER_TYPE = USER_TYPES.PUBLIC 

function App() {
  const [inactive, setInactive] = useState(false)

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive)
            setInactive(inactive)
          }}
        />

        <div className={`container ${inactive ? 'inactive' : ''}`}>
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))}

        {
          <Switch>
             <Route exact path= {"/"}> <LoginPage/>  </Route> 
             <Route exact path="/login" component={ LoginPage } />  
            
            <Route  path = {"/ForgotPasswordPage"}> <ForgotPasswordPage /> </Route>

            {/* <Route  path={"/Dashboard"} element = { <PublicElement>  <Dashboard /> </PublicElement> } > </Route> */}

            <Route path={"/Dashboard"}> <Dashboard/> </Route>
            
            <Route path={"/Organization"}> <Organization /> </Route>
          
            <Route path={"/DeviceReport"}> <DeviceReport /> </Route>
            
            <Route  path={"/ManageGateway"}> <ManageGateway /> </Route>
            
            <Route path={"/Gateway"}> <GateWay /> </Route>
            
            <Route path={"/Addgateway"}> <Addgateway /> </Route>

            <Route path={"/OrganizationOrgs"}> <OrganizationOrgs /> </Route>
            
            <Route path={"/Preferences"}> <Preferences /> </Route>

            <Route path={"/Users"}> <Users /> </Route>  
            
            <Route path={"/Addnewuser"}> <Addnewuser /> </Route> 

            <Route  path={"/ManageStock"}> <ManageStock /> </Route>

            <Route path={"/AddHardware"}> <AddHardware /> </Route>

          </Switch> 
        }
            
        </div>
      </Router>
    </div>
  )
}

export default App;