import React from "react";
import { Link } from "react-router-dom";

import "./Homepage.css";

const Homepage = () => (
  <div className="home-hero">
    <h1>What's Happening</h1>
    <h4>New to Chirper?</h4>
    <Link to="/signup" className="btn btn-primary">
      Sign up here!
    </Link>
  </div>
)

export default Homepage;