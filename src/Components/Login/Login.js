import  React, {Component} from 'react';
import './Login.css';
import { Link } from "react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleLogin = () => {
    //check input values and compare to saved profiles
    //({username:CBandstra, password: wordwars} {username: RJaeger, password: wordwars})
  }

  render() {
    return (
      <section className="login-page">
        <h1>Word Wars</h1>
        <section className="login-container">
          <section className="login-input-field">
            <form onSubmit={this.handleLogin}>
              <h3 className="login-header">Sign In</h3>
              <input required onChange={this.trackInput} id="username" placeholder="Username" className="login-input username-input"/>
              <input required onChange={this.trackInput} id="password" placeholder="Password" className="login-input email-input"/>
                <button className="btn login-btn">
                  Login
                </button>
            </form>
          </section>
        </section>
      </section>
    )
  }
}
export default Login