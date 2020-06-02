import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Homepage from "../components/Homepage.js";
import AuthForm from "../components/AuthForm.js"
import { authUser } from "../store/actions/auth.js";
import { removeError } from "../store/actions/errors.js"
import withAuth from "../hocs/withAuth.js";
import MessageForm from "../containers/MessageForm.js";

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={(props) => (
          <Homepage
            {...props}
            currentUser={currentUser}
          />
        )} />
        <Route exact path="/login" render={(props) => (
          <AuthForm
            buttonText="Log in"
            heading="Welcome back!"
            errors={errors}
            onAuth={authUser}
            removeError={removeError}
            {...props}
          />
        )} />
        <Route exact path="/signup" render={(props) => (
          <AuthForm
            buttonText="Sign me up!"
            heading="Join Chirper today!"
            signUp
            errors={errors}
            onAuth={authUser}
            removeError={removeError}
            {...props}
          />
        )} />
        <Route path="/users/:id/messages/new" component={withAuth(MessageForm)}

        />
      </Switch>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));