import React, { Component } from "react"

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "login";
    this.props.onAuth(authType, this.state)
      .then(() => {
        console.log("LOGGED IN");
      })
      .catch(() => {
        return;
      })
  }

  handleChange = function (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, buttonText, signUp, errors, history, removeError } = this.props;

    history.listen(()=> {
      removeError();
    })

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              {errors.message && <div className="alert alert-danger">{errors.message}</div>}
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                value={email}
                type="text"
              />
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
                value={password}
                type="password"
              />
              {signUp && (
                <div>
                  <label htmlFor="username">Username:</label>
                  <input
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                    type="text"
                  />
                  <label htmlFor="image-url">Image URL:</label>
                  <input
                    className="form-control"
                    id="image-url"
                    name="profileImageUrl"
                    onChange={this.handleChange}
                    value={profileImageUrl}
                    type="image-url"
                  />
                </div>
              )}
              <button type="submit" className="btn btn-primary btn-block btn-lg mt-1">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AuthForm;