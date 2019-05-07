import React, { Component } from 'react';
import landingvideo from '../../video/LandingVideo.mov';

export default class LandingVideo extends Component{
    constructor(props){
        super(props)
    }

   render(){
       return(       
           <div className="landingvideobg">
                <video className="landingvideo" loop autoPlay>
                    <source src={landingvideo} type="video/mp4" />
                </video>        
           </div>              
     )
   }    
}