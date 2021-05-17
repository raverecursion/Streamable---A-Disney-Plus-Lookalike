import React from "react";
// Components
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Detail from "./components/Detail.jsx";
import Login from "./components/Login.jsx";
// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Styles
import "./App.css";
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"
  rel="stylesheet"
/>;
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
