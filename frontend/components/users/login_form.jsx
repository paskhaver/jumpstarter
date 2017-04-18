import React from "react";

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <label>Email
          <input type="text" />
        </label>

        <label>Password
          <input type="password" />
        </label>

        <input type="submit" value="Log In"/>

      </form>
    );
  }

}

export default LoginForm;
