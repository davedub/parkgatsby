import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/auth"

import "./navlogin.css"


export default function NavLogin() {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = ""
  }
  return (
    <div className="loginbar">
      <span className="loginmessage">You are not logged in</span>
      <span>{greetingMessage}</span>
      <nav>
       <Link className="loginlink" to="/login">Login</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}