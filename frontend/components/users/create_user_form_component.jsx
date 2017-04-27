import React from "react";
import { hashHistory } from 'react-router';

class CreateUserForm extends React.Component {

  // this.props.createUser(user)
  // this.props.currentUser

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "",
                   second_email: "", second_password: "" };

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

    // If no errors;
    if (!hasErrors) {
      const { name, email, password } = this.state;
      const properUser = { name, email, password };
      this.props.createUser(properUser)
      hashHistory.push("/");
    }

  }

  handleFormRedirect(event) {
    event.preventDefault();
    hashHistory.push("/login");
  }

  handleGuestButtonClick(event) {
    event.preventDefault();
    const guestUser = { email: "guest@example.com",
                        password: "password" };
    this.props.login(guestUser);
    hashHistory.push("/");
  }

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
      <div className="grey-container">
        <div className="log-in-box">
          <button className="alternate-link"
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

              <li>
                <button onClick={ this.handleGuestButtonClick }>
                  Login as Guest User!</button>
              </li>
            </ol>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateUserForm;
