import React, { Component } from 'react';

export default class Project extends Component{
    constructor(props){
        super(props)
    }

   render(){
       return( 
            <div className={this.props.class}>       
                    <div className={this.props.projectcover}>      
                        <a href={this.props.href} target="_blank">                   
                            <img src={this.props.picture} alt="" />  
                        </a>                      
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