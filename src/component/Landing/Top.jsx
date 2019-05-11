import React, { Component } from 'react';
import LandingVideo from '../../video/LandingVideo.mov';

export default class Top extends Component{
    constructor(props){
        super(props)
    }

   render(){
       return( 
            <div className="top">    
              
                    <video className="landingvideo" loop autoPlay>
                        <source src={LandingVideo} type="video/mp4" />
                    </video> 
                  
                <div className="landing">
                    Gamily                                                     
                    <div className="sublanding">
                        <div>
                            Software Solutions
                        </div>
                        <div>
                            專業網站/移動程式開發服務
                        </div>
                    </div>
                </div>        
            </div>
       )
   }    
}