import React from "react";
import logo from './1.png'
function Nav() {
  return (
    <nav  align="middle" className="navbar navbar-expand-lg bg-primary navbar-dark img-responsive center-block">
      <a className="navbar-brand" href="/">
      <img src={logo} alt="logo"   className="" style={{width:100,height:100, resizeMode: 'contain',float: 'middle'}}></img>
      </a>
      <a style={{ marginrRight: "auto" }} className="navbar-brand" href="/signup"><h4>Sign In</h4></a>
      <a style={{ marginRight: "auto" }} className="navbar-brand" href="/cart"><h4>My Cart</h4></a>
    </nav>
  );
}


export default Nav;
