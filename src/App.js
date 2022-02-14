import React, { useState } from "react";
import './App.css';
import {
  ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent,
} from "react-pro-sidebar";
import { AiOutlineMenu} from "react-icons/ai";
import "react-pro-sidebar/dist/css/styles.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Ourstudio from "./components/Ourstudio";
import Services from "./components/Services";
import Ourteam from "./components/Ourteam";
import Contactus from "./components/Contactus";
import Store from "./components/Cartfolder/Store";
import Productdetail from "./components/shop/Productdetail";
import Cart from "./components/Cartfolder/Cart";
import Shop from "./components/shop/Shop";
import Lipstick from "./components/shop/Lipstick";
import Lipstickdetail from "./components/shop/Lipstickdetail";
import Eyeliner from "./components/shop/Eyeliner";
import Eyelinerdetail from "./components/shop/Eyelinerdetail";
import Shopall from "./components/shop/Shopall";
import Checkout from "./components/Checkout";
import Shopalldetail from "./components/shop/Shopalldetail";
import Carticon from "./components/Cartfolder/Carticon"
import Signin from "./components/Signin"

import { Provider } from "react-redux";
const App = () => {


  const [menuCollapse, setMenuCollapse] = useState(true)

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <Provider store={Store}>
    <BrowserRouter>
      <div id="header" className="navy">
        <ProSidebar collapsed={menuCollapse} >
          <SidebarHeader className="icon11">
       
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <AiOutlineMenu className="icon"/>
              ) : (
                <div >
                <button className="icon">x</button>
                <SidebarContent >
                <Menu iconShape="square" >
                  <MenuItem active={true} >
                    <NavLink className="link" to="/"> Home</NavLink>
                  </MenuItem>
                  <MenuItem  >
                    <NavLink  className="link" to="/Aboutus"> About us</NavLink>
                  </MenuItem>
          
                  <MenuItem  >
                    <NavLink className="link"  to="/Ourstudio"> Our studio </NavLink>
                  </MenuItem>
                  <MenuItem  >
                    <NavLink className="link"  to="/Services"> Services </NavLink>
                  </MenuItem>
                  <MenuItem  >
                    <NavLink  className="link" to="/Ourteam"> Our team </NavLink>
                  </MenuItem>
                  <MenuItem  >
                    <NavLink className="link"  to="/Contactus">Contact us</NavLink>
                  </MenuItem>
            
                  <MenuItem  >
                    <NavLink className="link"  to="/Shopall">Shop</NavLink>
                  </MenuItem>
                  <MenuItem  >
                    <NavLink className="link"  to="/Signin">Signin</NavLink>
                  </MenuItem>
                  <MenuItem  >
                   <Carticon />
                  </MenuItem>
            
                  
                </Menu>
              </SidebarContent>
            
              </div>
              )}
            </div>
          </SidebarHeader>
         
        </ProSidebar>
<div>
</div>
    
</div>
        <Switch>
  <Route path="/" component={Home} exact></Route>
  <Route path="/Aboutus" component={Aboutus} exact></Route> 
  <Route path="/Ourstudio" component={Ourstudio} exact></Route> 
  <Route path="/Services" component={Services} exact></Route> 
  <Route path="/Ourteam" component={Ourteam} exact></Route> 
  <Route path="/Contactus" component={Contactus} exact></Route> 
  <Route path="/Shop" component={Shop} exact></Route> 
  <Route path="/Shop/:id" component={Productdetail} exact></Route> 
  <Route path="/Lipstick" component={Lipstick} exact></Route> 
  <Route path="/Lipstick/:id" component={Lipstickdetail} exact></Route> 
  <Route path="/Eyeliner" component={Eyeliner} exact></Route> 
  <Route path="/Eyeliner/:id" component={Eyelinerdetail} exact></Route> 
  <Route path="/Shopall" component={Shopall} exact></Route> 
  <Route path="/Shopall/:id" component={Shopalldetail} exact></Route> 
  <Route path="/Cart" component={Cart} exact></Route> 
  <Route path="/Signin" component={Signin} exact></Route> 

  <Route path="/Checkout" component={Checkout} exact></Route> 
      </Switch>
    
    
    
     

    </BrowserRouter>
    </Provider >
  );
};

export default App;
