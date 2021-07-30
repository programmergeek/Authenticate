import React from "react";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="container">
      <a href="/signup">Sign Up</a>
      <a href="/login">Login</a>
    </div>
  );
};
