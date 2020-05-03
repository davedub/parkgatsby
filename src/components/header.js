import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "./Navbar/navbar"
import NavLogin from "./NavLogin/navlogin"
const Header = ({ siteTitle }) => (
  <header className="app-Header">
    <div style={{padding: `12px`, display: `block`, marginBottom: `10px`, background: 'rebeccapurple'}}>
    <NavLogin /> 
    <h1 class="centered" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{color: `#45dea2`, fontWeight: `bold`, textDecoration: `none`}}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navbar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Gatsby 2.20.12 StarterKit`,
}
export default Header