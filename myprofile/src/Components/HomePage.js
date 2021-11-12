import React, { Component } from 'react'
import Tumi from '../images/IMG-20210302-WA0007.jpg'
import '../App.css'

export default class HomePage extends Component {
    render() {
        return (
          
                <div class="container">
	<div class="row">
        <div class="profile-header-container">   
    		<div class="profile-header-img">
                <img class="img-circle" src={Tumi} alt="" />
                <badge/>
                <div class="rank-label-container">
                    <span class="label label-default rank-label">Tumisang Ramollo</span>
                </div>
            </div>
        </div> 
	</div>
</div>
        )
    }
}
