import React, { Component } from 'react';
import Project from './Project';

export default class Content extends Component{
    constructor(props){
        super(props)
    }

   render(){
       return( 
            <div className="content">           
                <Project />     
            </div>                                
       )
   }    
}