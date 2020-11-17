
import React, { Component } from 'react';
import './App.css';

import {Route, BrowserRouter as Router, Switch, Redirect, HashRouter} from 'react-router-dom';
import Skills from './Components/skills';
import Home from './Components/home/home';




class App extends Component {
  state = { 
    showHome: true
   }

   
   

   onSkillsButtonClick = () => {
    // localStorage.setItem('home', false);
     this.setState({showHome: false}); 
   }

  //  componentDidMount(){
  //   //  const _home = localStorage.getItem('home') === 'false';
  //   //  if(!_home){
  //   //  console.log("ww: " + _home);
  //   //  this.setState({showHome: _home});
  //   }
  //  }

  //{this.state.showHome ? <Home onSkillsClick={this.onSkillsButtonClick}/> : null}   
  render() { 

  
    return ( 
      <div> 
           
        <HashRouter basename='/'>
          <Switch>
            <Route path={"/"} exact component={Home}/>
            <Route path={"/skills"} component={Skills}/>
          </Switch>
        </HashRouter>
      </div>
      );
  }
}
 
export default App;

 

