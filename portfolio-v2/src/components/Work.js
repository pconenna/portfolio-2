/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';

import bol2 from '../images/bol2.PNG';
import mm from '../images/mm_demo.PNG';
import pt from '../images/playtrade.PNG';

function Work(){
    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='col'>
                    <figure id="bol">
                    <img src={bol2}/>
                    <figcaption className="bol-title">barksoflove.org</figcaption> 
                    </figure>
                </div>
                <div className='col'>Website for all operations of Barks of Love Animal Rescue. 
                <a href="https://barksoflove.org/index.html"> Visit the production application.</a>
                </div>
            </div>

            <div className='row'>
            <div className='col'>Movie Mixers . Search for a movie and recieve a mixed drink reccomendation based on the movie's genre.
            <br/><a href="https://project01team02.github.io/movie-mixers/index.html">Visit the production application.</a></div>
                <div className='col'>
                <figure class="bottom-fig">
                <img src={mm}/> 
                <figcaption className="title">Movie Mixers</figcaption>
                </figure> 
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                <figure className="bottom-fig">
                <img src={pt}/>
                <figcaption className="title">Playtrade</figcaption>
                </figure>
                </div>
                <div className='col'>Curate a stock portfolio and learn about the stock market. 
                <br/> <a href="https://play-trade-3e0a6365bb54.herokuapp.com/">Visit the production application.</a></div>
            </div>
        </div>
    )
}
export default Work;