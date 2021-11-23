import React, { Component } from 'react';
import Side1 from './Side1'
import Side2 from './Side2Contents'


class Home extends Component {
    render() {
        return (
            <div>
                  <div className="AppHeader">
        <h1
          style={{
            padding: "2rem",
            marginTop: "0",
            fontSize: "2rem",
            color: "rgba(0, 0, 0, 0.5)",
            opacity: "0.5",
          }}
        >
          Hi there!!! My name is Tumisang,
          <span> Welcome to my PROFILE</span>
        </h1>
      </div>
      <hr />
      <div className="AppGrid">
        <div className="AppGridSide1">
          <Side1 />
        </div>
        <div className="AppGridSide2">
          <Side2 />
        </div>
      </div>
            </div>
        );
    }
}

export default Home;