import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="container">
      <Link to="/signup">
        <a href="/signup" className="primary">
          Sign Up
        </a>
      </Link>
      <Link to="/login">
        <a href="/login" className="secondary">
          Login
        </a>
      </Link>
    </div>
  );
};
