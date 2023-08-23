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
                    <a href="https://barksoflove.org/index.html"><img src={bol2}/></a>
                    <figcaption className="bol-title">barksoflove.org</figcaption> 
                    </figure>
                </div>
                <div className='col'>Website for all operations of Barks of Love Animal Rescue. </div>
            </div>

            <div className='row'>
            <div className='col'>Movie Mixers </div>
                <div className='col'>
                <figure class="bottom-fig">
                <a href="https://project01team02.github.io/movie-mixers/index.html"><img src={mm}/></a> 
                <figcaption className="title">Movie Mixers</figcaption>
                </figure> 
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                <figure className="bottom-fig">
                <a href="https://play-trade-3e0a6365bb54.herokuapp.com/"><img src={pt}/></a>
                <figcaption className="title">Playtrade</figcaption>
                </figure>
                </div>
                <div className='col'>Website for all operations of Barks of Love Animal Rescue. </div>
            </div>
        </div>
    )
}
export default Work;