import React, { Component } from "react";
import '../App.css'

export default class Navigationbar extends Component {
  render() {
    return (
      <div className="nav">    
        <ul>
  <li><a href="news.asp">Gallery</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
  <li><a href="default.asp">Home</a></li>
</ul>
      </div>
    );
  }
}
