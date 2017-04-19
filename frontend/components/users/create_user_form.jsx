import React from "react";

class CreateUserForm extends React.Component {

  // this.props.createUser(user)
  // this.props.currentUser

  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleFormErrors() {

  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, email, secondEmail, password, secondPassword } = this.state;
    if (email === secondEmail && password == secondPassword) {
      const properUser = { name, email, password };
      this.props.createUser(properUser);
    }
  }

  handleEdit(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value
      });
    };
  }

  render() {
    return (
      <div className="grey-container">
        <div className="log-in-box">
          <button className="alternate-link">
            Have an account? Log in!
          </button>

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
                         onChange={ this.handleEdit("secondEmail")} />
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
                       onChange={ this.handleEdit("secondPassword")} />
              </li>

              <li>
                <input type="submit"
                       value="Create Account!"/>
              </li>
            </ol>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateUserForm;
