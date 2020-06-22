import React from 'react';
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    const { history } = this.props;
    e.preventDefault();
    history.push('/dashboard');
  }

  handleChange = (e) => {
    this.setState({ [e.target.type]: e.target.value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-page">
        <div className="header">
          <div>Welcome</div>
        </div>
        <div className="content">
          <div className="login-text">Login</div>
          <form className="center" onSubmit={this.handleSubmit}>
            <input 
              className="input-box"
              type="email"
              placeholder="Email" 
              value={email}
              onChange={this.handleChange}
              required
            />
            <input 
              className="input-box" 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={this.handleChange}
              required
            />
            <input className="login-button" type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
}
}

export default withRouter(Login);