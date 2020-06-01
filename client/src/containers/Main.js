import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Homepage from "../components/Homepage.js";
import AuthForm from "../components/AuthForm.js"
import { authUser } from "../store/actions/auth.js";

const Main = props => {
  const { authUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={(props) => (
          <Homepage {...props} />
        )} />
        <Route exact path="/login" render={(props) => (
          <AuthForm
            buttonText="Log in"
            heading="Welcome back!"
            onAuth={authUser}
            {...props}
          />
        )} />
        <Route exact path="/signup" render={(props) => (
          <AuthForm
            buttonText="Sign me up!"
            heading="Join Chirper today!"
            signUp
            onAuth={authUser}
            {...props}
          />
        )} />
      </Switch>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { authUser })(Main));