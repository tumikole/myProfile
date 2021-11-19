import React, { Component } from "react";
import {Link } from "react-router-dom"
import '../App.css'

const NavbarLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);

  return <Link to={`/${page}`} className='navbarlink-title'>{title}</Link>
};


const Navbar = () => {
  return (
    <div className='navbar '>
      <NavbarLink page='home' />
      <NavbarLink page='gallery' />

    </div>
  )
}

export default Navbar;