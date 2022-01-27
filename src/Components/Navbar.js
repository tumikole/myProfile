import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

export default function Navbar() {
  return (
    <div className="myNav">
      {/* <Link to="contact">Contact</Link> */}
      <Link className="navLinks" to="/skills">Skills</Link>
      <Link className="navLinks" to="/about">About</Link>
      <Link className="navLinks" to="/gallery">Gallery</Link>
      <Link className="navLinks" to="/">Home</Link>
    </div>
  );
}
