import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";

import "./Navbar.css";
import Logo from "../images/chirper-logo.png"
import { logout } from "../store/actions/auth.js";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Warbler Home" />
            </Link>
          </div>
          {this.props.currentUser.isAuthenticated ? (
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to={`/users/${this.props.currentUser.user._id}/messages/new`}>New Message</Link>
              </li>
              <li>
                <a onClick={this.logout}>Log out</a>
              </li>
            </ul>
          ) : (
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              </ul>
            )}
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { logout })(Navbar);