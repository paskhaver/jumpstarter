import React from "react";

class LoginForm extends React.Component {

  // this.props.login(user)

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEdit(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value
      });
    };
  }

  handleSubmit(event) {
    debugger
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>Email
          <input type="text"
                 onChange={ this.handleEdit("email")}/>
        </label>

        <label>Password
          <input type="password"
                 onChange={ this.handleEdit("password")} />
        </label>

        <input type="submit" value="Log In"/>

      </form>
    );
  }

}

export default LoginForm;
