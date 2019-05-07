import React, { Component } from 'react';

export default class Line extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class="line" style={{backgroundColor:this.props.color}}>      
            </div>
        )
    }
} 