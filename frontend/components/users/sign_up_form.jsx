import React from "react";
import { connect } from "react-redux";
import { hashHistory } from 'react-router';

import { login } from "./../../actions/session_actions";
import { createUser } from "./../../actions/user_actions";
import { receiveErrors, clearErrors } from "./../../actions/error_actions";

import Footer from "./../footer/footer";

const mapStateToProps = (state) => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: newUser => { return dispatch(createUser(newUser)); },
    login: user => { return dispatch(login(user)); },
    receiveErrors: errors => { return dispatch(receiveErrors(errors)); },
    clearErrors: () => { return dispatch(clearErrors()); }
  };
};

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: "",
                   email: "",
                   second_email: "",
                   password: "",
                   second_password: "" };

    this.handleSubmit           = this.handleSubmit.bind(this);
    this.handleEdit             = this.handleEdit.bind(this);
    this.handleGuestButtonClick = this.handleGuestButtonClick.bind(this);
    this.handleFormRedirect     = this.handleFormRedirect.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  checkForErrors() {
    let hasErrors = false;
    let errors = [];

    for (let formItem in this.state) {
      const visualString = formItem.toUpperCase().split("_").join(" ");
      if (this.state[formItem] === "") {
        errors.push(`${visualString} cannot be blank!`);
        hasErrors = true;
      }
    }

    const { name, email, second_email,
            password, second_password } = this.state;

    if (email !== second_email) {
      errors.push("Emails do not match");
      hasErrors = true;
    }

    if (password !== second_password) {
      erorrs.push("Passwords do not match");
      hasErrors = true;
    }

    if (password.length < 6) {
      errors.push("Password must have at least 6 characters");
      hasErrors = true;
    }

    if (hasErrors) {
      this.props.receiveErrors(errors);
    }

    return hasErrors;

  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.clearErrors();
    const hasErrors = this.checkForErrors();

    // If no errors on front-end validation;
    if (!hasErrors) {
      const { name, email, password } = this.state;
      const properUser = { name, email, password };
      this.props.createUser(properUser)
                .then(success => {
                  hashHistory.push("/start");
                }, failure => {
                  console.log(failure);
                });

    }

  }

  handleFormRedirect(event) {
    event.preventDefault();
    hashHistory.push("/login");
  }

  // Guest login immediately sends the user in
  handleGuestButtonClick(event) {
    event.preventDefault();
    const guestUser = { email: "guest@example.com",
                        password: "password" };
    this.props.login(guestUser);
    hashHistory.push("/");
  }

  // Update pieces of state (name, email, second email, password
  // second password) upon any user edit in form inputs
  handleEdit(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value
      });
    };
  }



  render() {

    const errorItems = this.props.errors.map((error, idx) => {
      return <li key={idx}>{error}</li>;
    });

    return (

      <div>

      <div className="auth-grey-container">
        <div className="log-in-box">
          <button className="blue-button"
                  onClick={ this.handleFormRedirect }>
            Have an account? Log in!
          </button>

          <div className="user-auth-errors">
            <ul>
              { errorItems }
            </ul>
          </div>

          <h2>Sign Up</h2>
          <form onSubmit={ this.handleSubmit }>
            <ol>
              <li>
                <input type="text"
                       placeholder="Name"
                       className="input-text-padding"
                       onChange={ this.handleEdit("name")} />
              </li>

              <li>
                <input type="email"
                         placeholder="Email"
                         className="input-text-padding"
                         onChange={ this.handleEdit("email")} />
              </li>

              <li>
                <input type="email"
                         placeholder="Re-enter email"
                         className="input-text-padding"
                         onChange={ this.handleEdit("second_email")} />
              </li>

              <li>
                <input type="password"
                       placeholder="Password"
                       className="input-text-padding"
                       onChange={ this.handleEdit("password")} />
              </li>

              <li>
                <input type="password"
                       placeholder="Re-enter password"
                       className="input-text-padding"
                       onChange={ this.handleEdit("second_password")} />
              </li>

              <li>
                <input type="submit"
                       value="Create Account!"/>
              </li>

              </ol>
          </form>
        </div>
      </div>



      <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
