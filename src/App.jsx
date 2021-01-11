import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NavBar from "./components/Nav";
import Account from "./components/Form";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
