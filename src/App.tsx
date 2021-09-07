import React from "react";
import "./App.css";
import { Home, Login, SignUp } from "./Components";
import { Switch, Route, HashRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const appConfig = {
  apiKey: "AIzaSyBJoN-RvERdBMmaLLPWL9ejFiDG8TAcprA",
  authDomain: "test-auth-e16fe.firebaseapp.com",
  projectId: "test-auth-e16fe",
  storageBucket: "test-auth-e16fe.appspot.com",
  messagingSenderId: "1095711886358",
  appId: "1:1095711886358:web:ab7e0417d75fa9f6687937",
  measurementId: "G-7HQMTK0G6X",
};

const app = initializeApp(appConfig);

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
            <SignUp firebaseApp={app} />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
