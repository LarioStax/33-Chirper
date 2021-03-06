import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import "./MessageItem.css";

const MessageItem = ({ date, profileImageUrl, text, username, removeMessage, isCorrectUser }) => {
  return (
    <div>
      <li className="list-group-item">
        <img src={profileImageUrl || DefaultProfileImg} alt={username} height="100" width="100" className="timeline-image"></img>
        <div className="message-area">
          <Link to="/">@{username} &nbsp;</Link>
          <span className="text-muted">
            <Moment className="text-muted" format="DD MMM YYYY">
              {date}
            </Moment>
          </span>
          <p>
            {text}
          </p>
        </div>
          {isCorrectUser && (
            <a className="btn btn-sm btn-danger ml-auto align-self-center" onClick={removeMessage}>
              Delete
            </a>
          )}
      </li>
    </div>
  )
}

export default MessageItem;