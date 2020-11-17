import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect, HashRouter} from 'react-router-dom';
import {IndexRoute } from 'react-router';
import ScrollToTop from './scrollToTop';
import Designing from '../Pages/designing';
import SideBar from './sideBar/sideBar';
import Software from '../Pages/software';
import Programming from '../Pages/programing';
import Web from '../Pages/web';
import Databases from '../Pages/databases';
import ML from '../Pages/ml';
import UX_UI from '../Pages/uxui';
import Graphic from '../Pages/graphic';


class Skills extends Component {
    state = {  }


    
    render() { 
        return ( 
            <HashRouter>
                <ScrollToTop/>
                <div className="skills-page">
                    <SideBar/>     
                    <section className="fragment">
                        <Switch>
                            <Route path="/skills/" exact>
                                <Redirect to="/skills/programming" />
                            </Route>
                            <Route path='/skills/programming' component={Programming} /> 
                            <Route path={'/skills/software'}  component={Software} />
                            <Route path='/skills/web'  component={Web} />
                            <Route path='/skills/database'  component={Databases} />
                            <Route path='/skills/ml'  component={ML} />

                            <Route path='/skills/designing'  component={Designing} />
                            <Route path='/skills/ux_ui'  component={UX_UI} />
                            <Route path='/skills/graphic'  component={Graphic} />
                            
                        </Switch>
                    </section >
                </div>
            </HashRouter>
        );
    }
}
 
export default Skills;