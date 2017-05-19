import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
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

      <Link className="navbar-brand" activeClassName="navbar-brand" to="/home">React Giphy</Link>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><Link to="/" activeClassName="active " >Search</Link ></li>
        <li><Link to="/trending" activeClassName="active ">Trending</Link ></li>

      </ul>
    </div>
  </div>
</nav></div>
    );
  }
};

export default Nav;
