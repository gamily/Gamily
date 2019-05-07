import React, { Component } from 'react';
import LandingVideo from "./LandingVideo";
import Line from "../Common/Line";
import SubLanging from "./SubLanging";



export default class Top extends Component{
    constructor(props){
        super(props)
    }

   render(){
       return( 
            <div className="top">           
                <LandingVideo />
                <div className="landing">Gamily                                               
                    <Line />
                    <SubLanging />
                </div>        
            </div>
       )
   }    
}