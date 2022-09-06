import React,{Component} from 'react';
// import {BrowserRouter as Router,Route,Redirect,Switch,NavLink} from 'react-router-dom';
import {BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom';

import Home from './container/Home'

import About from './container/About'

class RouterConfig extends Component {
    render() {
        return (
            <Router>
                <div className="Router-wrp">
                    <div className="Router-menu">
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="active-router-style">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/about" activeClassName="active-router-style">about</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="Router-page">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
export default RouterConfig;
