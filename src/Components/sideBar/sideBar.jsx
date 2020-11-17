import React, { Component } from 'react';
import './sidebar.css'
import {navItemsPrograming, navItemsDesigning} from './navItems';
import { NavLink} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {CgClose} from 'react-icons/cg';
import {CgMenu} from 'react-icons/cg';

var background; 
var color = document.documentElement;

color.style.setProperty('--color', `white`);


class SideBar extends Component {
    state = { 
       logic_side: true,
       menu_dropped: false
     }

     componentDidMount(){
        background = document.getElementById('bar01');
     }

    linkClicked = () =>{
        //turn off menu bar after click on a mobile devices
        if(this.state.menu_dropped){
            this.setState({menu_dropped: false});
        }
    } 

    designClicked = () =>{
        this.linkClicked();  // to turn off menu bar after click on a mobile devices
        if(!this.state.logic_side) return;  // if this already in design mode then don't do anything

        background.classList.add("my-artistic-side");
        color.style.setProperty('--color', `#222222`);   
        this.setState({logic_side: false});
        
    }

    programmingClicked = () =>{
        this.linkClicked();
        if(this.state.logic_side) return;

        background.classList.remove("my-artistic-side");
        color.style.setProperty('--color', `white`);    
        this.setState({logic_side: true});
        
    }

    slideMenu = () =>{
        
          
        if(this.state.menu_dropped){
   
            this.setState({menu_dropped: false});
        }
        else{

            this.setState({menu_dropped: true});
        }
        
        
        
    }

    render() { 
        return ( 
            <div>
            <div className="filler"></div>
            <nav className="sideBar" id='bar01'>
            <NavLink to='/' className="home-icon"><AiFillHome  className="home_"/> <span>Home</span> </NavLink>  
            {this.state.menu_dropped ? <CgClose onClick={this.slideMenu} className="sidebar-menu"/> : <CgMenu onClick={this.slideMenu} className="sidebar-menu"/>}
                <section  className={this.state.menu_dropped ? 'navigation-list navigation-list-active': 'navigation-list'}>
                    <ul>
                        <li ><NavLink to='/skills/programming'> <span className="category-name link " onClick={this.programmingClicked}>Programming</span> </NavLink>
                            <ul>
                                {navItemsPrograming.map((item, index) => {
                                    return(
                                        
                                        <NavLink to={item.url} key={index}  activeClassName="active" > 
                                            <li key={index} onClick={this.programmingClicked} className="link" >  {item.title}  </li>
                                        </NavLink>
                                        
                                    )
                                })}
                            </ul>
                        </li>
                        <li><NavLink to='/skills/designing' ><span className="category-name link" onClick={this.designClicked} >Designing</span></NavLink>
                            <ul>
                                {navItemsDesigning.map((item, index) => {
                                    return(                   
                                        <NavLink to={item.url} key={index} activeClassName="active"> 
                                                <li key={index} onClick={this.designClicked} className="link">  {item.title}  </li>
                                        </NavLink>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>    
                </section>
                    
            </nav>
            </div>
         );
    }
}
 
export default SideBar;