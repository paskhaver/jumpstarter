import React from "react";
import { hashHistory } from 'react-router';
import Footer from "./../footer/footer";

class LoginForm extends React.Component {

  // this.props.login(user)

  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };

    this.handleEdit         = this.handleEdit.bind(this);
    this.handleSubmit       = this.handleSubmit.bind(this);
    this.handleFormRedirect = this.handleFormRedirect.bind(this);
    this.handleGuestLogin   = this.handleGuestLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleEdit(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearErrors();
    let errors = false;

    if (this.state.email === "") {
      this.props.receiveErrors(["Email cannot be blank"]);
      errors = true;
    }

    if (this.state.password === "") {
      this.props.receiveErrors(["Password cannot be blank"]);
      errors = true;
    }

    if (this.state.password.length < 6) {
      this.props.receiveErrors(["Password must have at least 6 characters"]);
      errors = true;
    }

    if (!errors) {
        const user = this.state;
        this.props.login(user);
    }
  }

  handleFormRedirect(event) {
    event.preventDefault();
    hashHistory.push("/signup");
  }

  handleGuestLogin(event) {
    const guestUser = {
      email: "guest@example.com",
      password: "password"
    };

    this.props.login(guestUser);
  }

  render() {

    const errorItems = this.props.errors.map((error, idx) => {
      return <li key={idx}>{error}</li>;
    });

    return (

      <div>

      <div className="auth-grey-container">
        <div className="log-in-box">
          <h2>Log in</h2>

          <div className="user-auth-errors">
            <ul>
              {errorItems}
            </ul>
          </div>

          <form onSubmit={ this.handleSubmit }>
            <ol>
              <li><input type="email"
                         placeholder="Email"
                         className="input-text-padding"
                         value={this.state.email}
                         onChange={ this.handleEdit("email")} />
              </li>


              <li>
                <input type="password"
                       placeholder="Password"
                       className="input-text-padding"
                       value={this.state.password}
                       onChange={ this.handleEdit("password")} />
              </li>

              <li>
                <input type="submit"
                       value="Log me in!"/>
              </li>

            </ol>
            </form>

            <button className="green-button"
                    onClick={ this.handleGuestLogin }>
              Login as Guest User!
            </button>

            <button className="blue-button"
                    onClick = { this.handleFormRedirect }>
              New to Jumpstarter? Sign up!
            </button>


        </div>

      </div>


      <Footer />

      </div>
    );
  }

}

export default LoginForm;
