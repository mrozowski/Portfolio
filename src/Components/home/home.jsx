import React, { Component } from 'react';
import './home.css';
import {FaGithub, FaBehance, FaLinkedinIn} from 'react-icons/fa';
import { NavLink} from 'react-router-dom';


let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


class Home extends Component {

    render() { 
        const { onSkillsClick } = this.props;
        return ( <div className="container">
        <section className="image"/>

        <section className="information">
            <div>
                <p className="name">Szymon Mrozowski</p>
                <p className="description">A programmer with an artist's soul<br></br> what can go wrong?</p>
            </div>
            <div className="button">              
            <NavLink to='/skills'><button onClick={onSkillsClick}>Skills</button></NavLink>
            </div>
            <div className="links">
            
                <a href="https://github.com/mrozowski" target="_blank"><FaGithub className="icon"/></a>
                <a href="https://www.behance.net/szymonmrozowski" target="_blank"><FaBehance className="icon"/></a>
                <a href="https://www.linkedin.com/in/szymon-mrozowski" target="_blank"><FaLinkedinIn className="icon"/></a>

            </div>
        </section>
    </div> );
    }
}
 
export default Home;

