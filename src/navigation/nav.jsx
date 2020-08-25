import React from 'react';
import {Nav, NavItem} from 'reactstrap';
import {Link,NavLink,useLocation} from "react-router-dom";
import '../App.css';


function Navigation() {
  let location = useLocation();
    return (
        <nav className="navbar fixed-bottom navbar-light customNav" role="navigation">
        <Nav className="w-100">
          <div className="d-flex flex-row justify-content-around w-100">
                <NavItem>
                  <Link to='/' className="nav-link">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                    <div className={location.pathname === '/'?'iconStyle':'imgStyle'}>
                      <img src={require('../assets/navigation_qr_icon_active.svg')} alt='' width={30}/>
                    </div>
                    
                      <div className="textStyle">Scan QR</div>
                    </div>
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink to='/menu'>
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                    <div className={location.pathname === '/menu'?'iconStyle':'imgStyle'}>
                      <img src={require('../assets/navigation_menu_icon_inactive.svg')} alt='' width={30} style={{marginTop:9}}/>
                    </div>
                      <div className="textStyle">Menu</div>
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Link to='/order' className="nav-link" >
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                    <div className={location.pathname === '/order'?'iconStyle':'imgStyle'}>
                      <img src={require('../assets/navigation_orders_icon_inactive.svg')} alt='' width={30}/>
                    </div>
                      <div className="textStyle">Order</div>
                    </div>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to='/waiter' className="nav-link">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                    <div className={location.pathname === '/waiter'?'iconStyle':'imgStyle'}>
                      <img src={require('../assets/navigation_call_icon_inactive.svg')} alt='' width={30}/>
                    </div>
                      <div className="textStyle">Call Waiter</div>
                    </div>
                  </Link>
                </NavItem>
          </div>
        </Nav>
        </nav>
    )
}

export default Navigation
