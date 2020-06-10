import  React, {Component} from 'react';
import './Login.css';
import userCredentials from '../../userCredentials'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  trackInput = (e) => {
    const id = e.target.id;
    this.setState({[id]: e.target.value});
  }

  verifyCredentials = () => {
    const user = userCredentials.find(user => {
      return user.username === this.state.username && user.password === this.state.password;
    })
    return user;
  }

  handleLogin = (e) => {
    e.preventDefault();
    const user = this.verifyCredentials('username');
    const result = user !== undefined;
    if(!result) {
      this.throwError();
      return 
    }
    this.props.logIn(result, user.username);
  }

  throwError = () => {
    alert('Please Try Again!')
    this.setState({ 
      username: '',
      password: '',
    })
  }

  render() {
    return (
      <section className="login-page">
        <h1 className='login-header'>Word Wars</h1>
        <section className="login-container">
          <section className="login-input-field">
            <form onSubmit={this.handleLogin}>
              <h3 className="login-header-2">Sign In</h3>
              <input required value={this.state.username} onChange={this.trackInput} id="username" placeholder="Username" className="login-input username-input"/>
              <input required value={this.state.password} onChange={this.trackInput} id="password" placeholder="Password" className="login-input email-input"/>
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