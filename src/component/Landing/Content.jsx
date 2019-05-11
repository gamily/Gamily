import React, { Component } from 'react';
import Project from './Project';
import MusicBravo from '../../picture/musicbravo.jpg';
import Friendo from  '../../picture/friendo.png';

export default class Content extends Component{
    constructor(props){
        super(props)
    }

   render(){    
       return( 
            <div className="content">     
              <Project 
                href="https://www.musicbravo.com.tw"
                class="project"
                projectcover="projectcover-left"
                projecttitle="projecttitle-right"
                projectcontent="projectcontent-right"
                picture={MusicBravo}               
                title="音樂霸-MusicBravo"
                content="音樂霸是全球首創的網路唱片公司，讓音樂人能自主發起專案、尋找夥伴、銷售並且獲得收益。
                線上集結推動華語音樂的大師們，讓不論是擅長唱歌、作詞、作曲或是混音的你，都能透過音樂霸找到契合的伙伴。" />
                 <Project 
                href="http://official.friendo.com.tw"
                class="project1"
                projectcover="projectcover-right"
                projecttitle="projecttitle-left"
                projectcontent="projectcontent-left"
                picture={Friendo}               
                title="春樹科技-Friendo"
                content="Hello, We are Friendo.
                粉多，是春樹科技旗下的數位整合行銷服務事業體，
                以熱情為燃料、創新為引擎，
                一年365天，朝著創意航道，不斷追求卓越
                想與品牌一起，成就了不起的好作品
                我們熱愛探索行銷新玩意，更熱愛解決商業問題，
                期許自己在持續變化的數位時代裡，
                不斷汲取養分、盛開創意，
                為你捍衛主場優勢。
                佇立在數位浪潮最前線，
                我們傾聽市場的聲音，為品牌造浪，
                為你的忠實消費者們，說一個雋永的好故事。
                " />
            </div>                                
       )
   }    
}