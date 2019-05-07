import React, { Component } from 'react';
import Line from '../Common/Line';
import landingvideo from '../../video/LandingVideo.mov';

export default class Top extends Component{
    constructor(props){
        super(props)
    }

   render(){
       return( 
            <div className="top">           
                <div className="landingvideobg">
                    <video className="landingvideo" loop autoPlay>
                        <source src={landingvideo} type="video/mp4" />
                    </video>        
                </div>    
                <div className="landing">
                    Gamily                                                                                    
                    <div class="sublanding">
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