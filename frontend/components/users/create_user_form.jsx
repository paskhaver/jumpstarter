import React from "react";

class CreateUserForm extends React.Component {

  // this.props.createUser(user)

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit() {

  }

  handleEdit() {

  }

  render() {
    return (

      <div className="grey-container">
        <div className="log-in-box">
          <h2>Create User</h2>

          <form onSubmit={ this.handleSubmit }>
            <ol>
              <li><input type="email"
                         placeholder="Email"
                         className="input-text-padding"
                         onChange={ this.handleEdit("email")} />
              </li>


              <li>
                <input type="password"
                       placeholder="Password"
                       className="input-text-padding"
                       onChange={ this.handleEdit("password")} />
              </li>

              <li>
                <input type="submit"
                       value="Log me in!"/>
              </li>

            </ol>
            </form>

            <button className="sign-up-link">
              New to Jumpstarter? Sign up!
            </button>
        </div>
      </div>
    );
  }

}

export default CreateUserForm;
