import React, { useEffect, useState } from 'react'
import user from '../assets/user.jpg'
import MenuItem from './MenuItem'
import { Alert } from '@material-ui/lab/Alert';


// added more menuItems for testing
export const menuItems = [
  {
    name: 'Dashboard',
    exact: true,
    to: '/Dashboard',
    iconClassName: 'bi-house-fill',
  },
  {
    name: 'Organization',
    exact: true,
    to: `/Organization`,
    iconClassName: 'bi-person-fill',
    
  },
  {
    name: 'Device Report',
    exact: true,
    to: `/DeviceReport`,
    iconClassName: 'bi-people-fill',
    // subMenus: [
    //   { name: 'Adduser', to: '/ClientManagement/Adduser' , exact: true,subMenusiconClassName: 'bi-people-fill'},
    //   { name: 'uses', to: '/ClientManagement/uses' },
    // ],
  },
  {
    name: 'Manage Gateway',
    exact: true,
    to: `/ManageGateway`,
    iconClassName: 'bi-server',
  },
  // {
  //   name: 'Configure-Device',
  //   exact: true,
  //   to: `/ConfigureDevice`,
  //   iconClassName: 'bi-person-bounding-box',
  // },
  // {
  //   name: 'GateWays',
  //   exact: true,
  //   to: `/Gateway`,
  //   iconClassName: 'bi-server',
  // },
]


const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false)

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu()
    }

    props.onCollapse(inactive)
  }, [inactive, props])

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll('.sub-menu').forEach((el) => {
      el.classList.remove('active')
    })
  }
  const imageClick = () => {
    console.log('Click');
  } 

  
  


  useEffect(() => {
    let menuItems = document.querySelectorAll('.menu-item')
    menuItems.forEach((el) => {
      el.addEventListener('click', (e) => {
        const next = el.nextElementSibling
        removeActiveClassFromSubMenu()
        menuItems.forEach((el) => el.classList.remove('active'))
        el.classList.toggle('active')
        console.log(next)
        if (next !== null) {
          next.classList.toggle('active')
        }
      })
    })
  }, [])

  return (
    <div className={`side-menu ${inactive ? 'inactive' : ''}`}>
      <div className="top-section">
        
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false)
                }
              }}
            />
          ))}

         
        </ul>
      </div>
      
      
      <div className="side-menu-footer" >
        
        
        <div  className="avatar" >
          
          
          
          <img src={user} alt="user" onClick={() => alert('image')} />  
        </div>
        <div  className="user-info" >
          <h5  >AthiSankar</h5>
          <p >athisankar@gmail.com</p>
         
        </div> 
      </div>
    </div>
  )
}

export default SideMenu
