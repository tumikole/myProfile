import React, { Component } from 'react'
import Navbar from './Navbar'
import About from './About';
import Contact from './Contact';
import Skills from './Skills';



export default class Side2Contents extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="scroll">
                <About />
                <Skills/>
                <Contact />
                </div>
            </div>
        )
    }
}
