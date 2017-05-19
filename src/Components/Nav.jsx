import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import '../App.css';
import {DropdownButton, MenuItem} from 'react-bootstrap';
class Nav extends Component{
  render(){
    return(
      <div className='container'>
        <hr />
      <nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">

      <NavLink className="navbar-brand" activeClassName="navbar-brand" to="/home">React Giphy</NavLink>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><NavLink to="/" activeClassName="active " >Search</NavLink ></li>
        <li><NavLink to="/trending" activeClassName="active ">Trending</NavLink ></li>

      </ul>
    </div>
  </div>
</nav></div>
    );
  }
};

export default Nav;
