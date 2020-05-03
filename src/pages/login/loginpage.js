import React from "react"
import { Router } from "@reach/router"
// import Layout from "../components/Layout/layout"
import LoginComponent from "../../components/Login/login"
import Layout from "../../components/Layout/layout"

const Login = () => (
  <Layout>  
  <div className="container">
  <Router>
    <LoginComponent path="/login" />
  </Router>
  </div>
  </Layout>
)

export default Login