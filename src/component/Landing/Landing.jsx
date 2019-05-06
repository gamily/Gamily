import React, { Component } from 'react';
import Line from "../Common/Line";
import SubLanging from "./SubLanging";


export default class Langing extends Component{
    constructor(props){
        super(props)
    }

   render(){
       return(
        <div className="landing">Gamily
            <Line />
            <SubLanging />
        </div>
       )
   }    
}