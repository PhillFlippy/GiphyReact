import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
class Nav extends Component{
  render(){
    return(
      <div className='container'>
        <hr />
      <nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">

      <Link className="navbar-brand"  to="/">React Giphy</Link>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><Link to="/" >Search</Link ></li>
        <li><Link to="/trending" >Trending</Link ></li>

      </ul>
    </div>
  </div>
</nav></div>
    );
  }
};

export default Nav;
