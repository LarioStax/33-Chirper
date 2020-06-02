import React from "react";
import { Link } from "react-router-dom";

import "./Homepage.css";
import MessageTimeLine from "./MessageTimeLine.js";

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
      <MessageTimeLine profileImageUrl={currentUser.user.profileImageUrl} username={currentUser.user.username}/>
    </div>
  )
}

export default Homepage;