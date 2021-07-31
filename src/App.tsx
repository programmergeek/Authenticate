import React from "react";
import "./App.css";
import { Home, Login, SignUp } from "./Components";
import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
