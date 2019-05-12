import React, { Component } from 'react';
import Top from "./component/Landing/Top";
import Content from "./component/Landing/Content";
import Test from "./component/Landing/Test";
import '../src/css/Main.css';

export default class Main extends Component{
    constructor(props){
        super(props)
    }

   render(){
       return( 
            <div className="main">                    
                <Top />
                <Content />
            </div>
       )
   }    
}