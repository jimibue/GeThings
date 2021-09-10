import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/ges">ges</Link>
      <br />
      <Link to="/about">about</Link>
      <br />
      <Link to="/cats">cats</Link>
    </div>
  );
};

export default Home;
