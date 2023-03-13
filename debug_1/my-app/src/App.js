import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";
import ReactIndex from "./components/ReactIndex/ReactIndex.js";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          
          <Route exact path="/">
            <ReactIndex />
          </Route>

          <Route exact path="/page1">
            <Page1 />
          </Route>

          <Route exact path="/page2">
            <Page2 />
          </Route>


          <Route exact path="/page3">
            <Page3 />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
