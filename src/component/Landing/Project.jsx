import React, { Component } from 'react';

export default class Project extends Component{
    constructor(props){
        super(props)
    }

   render(){
       return( 
            <div className={this.props.class}>       
                    <div className={this.props.projectcover}> 
                        <img  src={this.props.picture} alt="" />
                    </div>         
                    <div className={this.props.projecttitle}>
                        {this.props.title}                              
                    </div>
                    <div className={this.props.projectcontent}>                    
                        {this.props.content}                        
                    </div>
            </div>                                
       )
   }    
}