import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"

import "./loginform.css"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
        <ul>  
        <li className="login-form">
        <label>
            Username &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" className="login-control" name="username" onChange={this.handleUpdate} />
          </label>
          </li>
          <li className="login-form">
          <label>
            Password &nbsp;&nbsp;&nbsp;&nbsp;
            <input
                className="login-control"
                type="password"
                name="password"
                onChange={this.handleUpdate}
            />
          </label>
          </li>
          </ul>
          <input type="submit" className="loginBtn" value="Log In" />
        </form>
      </>
    )
  }
}

export default Login