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
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (

      <div className="grey-container">
        <div className="log-in-box">

          <h2>Log in</h2>


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

        </div>
      </div>
    );
  }

}

export default LoginForm;
