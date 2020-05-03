import React from "react"
import { Router } from "@reach/router"
import Loginform from "../components/Loginform/index.js"
import Layout from "../components/Layout/layout"

const Login = () => (
  <Layout>  
  <div className="container">
  <Router>
    <Loginform path="/login" />
  </Router>
  </div>
  </Layout>
)

export default Login