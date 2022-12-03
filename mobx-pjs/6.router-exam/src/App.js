import './App.css';
import React, { Component } from 'react';
import Nav from './components/Nav';
import About from './components/About'
import Main from './components/Main'
import Lessons from './components/Lessons'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          {/* exact로 라우트로 구성을 했지만  */}
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/lessons" component={Lessons} />
          <Route component={() => <h2>Not Found</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
