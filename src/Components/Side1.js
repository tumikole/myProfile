import React, { Component } from "react";
import Tumi from "../tcgStudents/Tumisang.png";
import Whatsapp from "../icons/WhatsApp.svg.png";
import Email from "../icons/512px-Gmail_icon_(2020).svg.png";
import Github from "../icons/github-mark.svg";
import Linkin from "../icons/174857.png";

import "../App.css";

export default class HomePage extends Component {
  render() {
    return (
      <div style={{ paddingTop: "5rem" }} class="HomeContainer">
        <div class="row">
          <div class="profile-header-container">
            <div class="profile-header-img">
              <img class="img-circle" src={Tumi} alt="" />
            </div>
          </div>
        </div>

        <div className="SocialIconsContainer">
          <a
            href="ramollotumi01@gmail.com
"
            target="_blank"
          >
            <img class="SocialIcons" src={Email} alt="" />
          </a>

          <a href=" https://wa.me/0720457845" target="_blank">
            <img class="SocialIcons" src={Whatsapp} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-ramollo-1aa8a2202/"
            target="_blank"
          >
            <img class="SocialIcons" src={Linkin} alt="" />
          </a>
          <a
            href="https://github.com/tumikole?tab=repositories"
            target="_blank"
          >
            <img class="SocialIcons" src={Github} alt="" />
          </a>
        </div>
      </div>
    );
  }
}
