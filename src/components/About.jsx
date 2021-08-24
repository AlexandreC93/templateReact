import React from 'react';
import List from './List'
import Img from '../img/about.jpg'

class About extends React.Component {
    state = {  }
    render() { 
        return ( 

            <>
            <img src={Img} />
          <p> lkqndxoq lkqndxoq lkqndxoq qkjedoqd lixnqlsbdq xoqBNZOXBAQ <br /> lkqndxoq lkqndxoq lkqndxoq vlkqndxoq lkqndxoqlkqndxoqlkqndxoqlkqndxoq  </p>
              <h2>Why Should Us</h2>
              <div id="disp-list">
                <List 
                text1="coucou c'est nous"
                text2="salut c'est moi"
                text3="lorem ipsum marche pas"
                text4="encore toi"/>
                <List
                text1="mais non"
                text2="paspossible"
                text3="league of legends"
                text4="encore oit"/>
                </div>
            </>

         );
    }
}
 
export default About;