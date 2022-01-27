import React from "react";
import Tumi from "../tcgStudents/Tumisang.png";
import Contact from './Contact'
import "../App.css";
function Side1() {
  return (
    <div className="sideOneContainer">
      <div className="sideOneImageContainer">
        <img className="sideOneImage" src={Tumi} alt="Tumisang" />
      </div>
      <h1 className="name">Ramollo Tumisang</h1>
      <h2 className="name">Web Developer</h2>
      <div className="social">
        <h4 style={{ color: "white" }}>Contact Me</h4>
        <ul>
          <li className="socialMedia" href="" target="_blank">
            LinkedIn
          </li>
          <li className="socialMedia" href="" target="_blank">
            Whatsapp
          </li>
          <li className="socialMedia" href="" target="_blank">
            GitHub
          </li>
        </ul>
      </div>
      <ul className="learned">
        <li>
          <img src="" alt="" />
          Problem-solving (hfghfghgf)
        </li>
        <li>
          <img src="" alt="" />
          Javascript (Pure Js, React & Redux)
        </li>
        <li>
          <img src="" alt="" />
          API / HTTP Request Programming
        </li>

        <li>
          <img src="" alt="" />
          DevOps
        </li>
        <li>
          <img src="" alt="" />
          Database Design
        </li>
      </ul>

<Contact />


     </div>
  );
}

export default Side1;
