import React from 'react';
import '../App.css';
import pic from '../images/headshot2023.png'
function About(){
    return (
        <section class="about-me" id='about'>
        <h2>About Me</h2>
        <section class="desc">
            <img id="face" src={pic} alt=""></img>
            <p id="intro">My name is Peter Conenna. I have a bachelor's degree in IT from Depaul University.
                I am a student in Northwestern University's SPS full stack coding bootcamp.
                I would consider myself an aspiring full stack web developer. </p>
        </section>
    </section>
    )
}
export default About;