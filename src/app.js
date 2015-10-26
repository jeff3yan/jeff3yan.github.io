import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Contact from './contact.js';

var SKILLS = [

];

var Home = React.createClass({

    render: function() {
        return (
            <div>
                <Link to="/">
                    <h1 
                        className="ui center aligned header"
                        style={{fontSize: '4rem'}}>
                        Pleased to meet you
                    </h1>
                </Link>

                <img style={{display: 'none'}} ref="image" src="images/me.jpg" className="ui small centered circular image"></img>
                
                <div className="ui basic segment">
                    <h1>
                        I'm Jeffrey Yan, Computer Systems Engineering Ph.D. graduate from the University of Auckland and currently working as a developer.
                    </h1>

                    <div className="ui center aligned basic segment">
                    <a 
                        href="http://stackoverflow.com/users/3649053/j3y" 
                        target="_blank"
                        title="My Stackoverflow profile">
                        <div className="ui massive standard circular icon button">
                                <i className="stack overflow icon"></i>
                        </div>
                    </a>
                    <a 
                        href="https://nz.linkedin.com/in/jeff3yan" 
                        target="_blank"
                        title="My LinkedIn profile">
                        <div className="ui massive standard circular icon button">
                                <i className="linkedin icon"></i>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
        );
    }
});

var App = React.createClass({

    render: function() {
        return (
            <div className="ProfileApp">
                <div className="ui stackable teal inverted menu">
                    <Link className="ui icon item" to="/"><i className="icon home"></i></Link>
                    <Link className="ui item" to="/contact">Contact</Link>
                </div>

                <div className="ui basic segment">


                    {this.props.children || <Home />}                   
                </div>
            </div>
        );
    }

});

ReactDOM.render((  
    <Router>
        <Route path="/" component={App}>
            <Route name="contact" path="contact" component={Contact}></Route>
        </Route>
    </Router>
), document.querySelector('#app'));