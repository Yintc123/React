import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Page1 from "./pages/debug_1/Page1/Page1";
import Page2 from "./pages/debug_1/Page2/Page2";
import Page3 from "./pages/debug_1/Page3/Page3";
import ReactIndex from "./components/ReactIndex/ReactIndex.js";

function App() {
  const repoName = "/React"

  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          
          <Route exact path="/React/">
            <ReactIndex />
          </Route>

          <Route exact path="/React/page1">
            <Page1 />
          </Route>

          <Route exact path="/React/page2">
            <Page2 />
          </Route>


          <Route exact path="/React/page3">
            <Page3 />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
