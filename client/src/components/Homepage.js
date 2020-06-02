import React from "react";
import { Link } from "react-router-dom";

import "./Homepage.css";

const Homepage = ({ currentUser }) => {
  console.log(currentUser);
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>What's Happening</h1>
        <h4>New to Chirper?</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up here!
        </Link>
      </div>
    )
  }
  return (
    <div>
      <h1>You're logged in :O </h1>
    </div>
  )
}

export default Homepage;