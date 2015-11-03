import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Link to={'about'}>About</Link>
        <Link to={'profile'}>Profile</Link>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="profile" component={Profile}/>
    </Route>
  </Router>
), document.getElementById('root'));