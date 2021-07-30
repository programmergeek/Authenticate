import React from "react";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="container">
      <a href="/signup" className="primary">
        Sign Up
      </a>
      <a href="/login" className="secondary">
        Login
      </a>
    </div>
  );
};
