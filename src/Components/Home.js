import React from "react";
import Navbar from "./Navbar";
import Side1 from './Side1'
import Side2 from './Side2Contents'
import "../App.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <div className="side1">
       
          <Side1 />
        </div>
        <div className="vl"></div>
        <div className="side2">
          <Side2 />
        </div>
      </div>
    </div>
  );
}

export default Home;
