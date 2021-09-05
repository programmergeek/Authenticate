import React from "react";
import "./App.css";
import { Home, Login, SignUp } from "./Components";
import { Switch, Route, HashRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
