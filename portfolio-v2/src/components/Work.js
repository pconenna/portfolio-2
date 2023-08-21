/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';
import placeholder from '../images/placeholder.jpg';

import bol2 from '../images/bol2.PNG';
import mm from '../images/mm_demo.PNG';
import pt from '../images/playtrade.PNG';

function Work(){
    return (
        <section id="my-work">
        <h2>My Work</h2>
        <section className="images">
        
       <figure id="bol">
        <a href="https://barksoflove.org/index.html"><img src={bol2}/></a>
        <figcaption className="bol-title">barksoflove.org</figcaption> 
       </figure>

        <figure class="bottom-fig">
            <a href="https://project01team02.github.io/movie-mixers/index.html"><img src={mm}/></a> 
        <figcaption className="title">Movie Mixers</figcaption>
        </figure> 

          
        <figure className="bottom-fig">
            
        <a href="https://play-trade-3e0a6365bb54.herokuapp.com/"><img src={pt}/></a>
        <figcaption className="title">Playtrade</figcaption>

        </figure>
        <figure className="bottom-fig">
            
        <img  src={placeholder}/> 
        <figcaption className="title">Placeholder</figcaption>

        </figure>
        <figure className="bottom-fig">
            
        <img  src={placeholder}/>
        <figcaption className="title">Placeholder</figcaption>

        </figure>
    </section> 
    </section>
    )
}
export default Work;