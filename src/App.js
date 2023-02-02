import './App.css'
import SideMenu, { menuItems } from './components/SideMenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import Dashboard from './components/Dashboard';
import GateWay from './components/Gateway';
import Organization from './components/Organization';
import DeviceReport from './components/DeviceReport';
import ManageGateway from './components/ManageGateway';


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

          { <Switch>
            <Route exact path={"/Dashboard"}>
              <Dashboard />
            </Route>
            <Route exact path={"/Organization"}>
              <Organization />
            </Route>
          
            <Route path={"/DeviceReport"}>
              <DeviceReport />
            </Route>
            <Route exact path={"/ManageGateway"}>
              <ManageGateway />
            </Route>
            <Route path={"/Gateway"}>
              <GateWay />
            </Route>
            
          </Switch> }
          <Switch>
            </Switch>
            
        </div>
      </Router>
    </div>
  )
}

export default App








