import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/auth"

import "./navlogin.css"


export default function NavLogin() {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Welcome Member!`
  } else {
    greetingMessage = ""
  }
  return (
    <div className="loginbar">
      <span className="loginmessage">
      {isLoggedIn() ? (
        <>
          You are now logged in.
        </>
      ) : (
        <>
          You are not logged in.
        </>
      )}
      </span>
      <nav>
        {` `}
        {isLoggedIn() ? (
          <a
          className="loginlink"   
          href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/`))
            }}
          >
            Logout
          </a>
        ) : (
          <a
          className="loginlink" 
          href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/login`))
            }}
          >
            Login
          </a>
        )}
      </nav>
    </div>
  )
}