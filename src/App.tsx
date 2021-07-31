import React from "react";
import "./App.css";
import { Home, Login, SignUp } from "./Components";
import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <Route
        path="https://programmergeek.github.io/Authenticate"
        component={Home}
      />
      <Route
        path="https://programmergeek.github.io/Authenticate/login"
        component={Login}
      />
      <Route
        path="https://programmergeek.github.io/Authenticate/signup"
        component={SignUp}
      />
    </div>
  );
}

export default App;
