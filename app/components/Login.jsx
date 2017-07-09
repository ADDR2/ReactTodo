import React from "react";
import { connect } from 'react-redux';
import {
  startLogin
} from "actions";

export class Login extends React.Component {

  onLogin() {
    const { dispatch } = this.props;

    dispatch(startLogin());
  }

  render() {

    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
                <h3>Login</h3>
                <p>Login with Github account below.</p>
                <button className="button" onClick={this.onLogin.bind(this)}>Login with Github</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);