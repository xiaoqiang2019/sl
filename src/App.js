import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, HashRouter, Link, Switch } from "react-router-dom"
import Game from "./Game/Game";
import Rules from "./rules/rules";

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <div>
          <HashRouter>
            <ul className="app_ul">
              <li>
                <Link to="/">游戏规则</Link>
              </li>
              <li>
                <Link to="/Game">开始游戏</Link>
              </li>
            </ul>

            <Switch>
              <Route exact path="/" component={Rules} />
              <Route exact path="/Game" component={Game} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}

export default App;
