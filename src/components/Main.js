require('styles/App.css');

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import About from './About';
import Repos from './Repos';

class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">主页</Link></li>
            <li><Link to="/About">热门</Link></li>
            <li><Link to="/Repos">专栏</Link></li>
          </ul>
          <Route exact path="/" component={App} />
          <Route path="/About" component={About} />
          <Route path="/Repos" component={Repos} />
        </div>
      </Router>
    )
  }
}

export default AppComponent;