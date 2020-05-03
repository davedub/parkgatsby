import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "../components/counter"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { getUser, isLoggedIn } from "../services/auth"

const IndexPage = () => (
  <Layout>
  <div className="container">
    <SEO title="Home" />
    <h1>Hey, there.</h1>
    <p>Good to see you working on your Gatsby skills. Now, go build something great.</p>
    <Counter initialCount={0} />
    <p>Hello {isLoggedIn() ? getUser().name : "world"}!</p>
    <p>
    {isLoggedIn() ? (
      <>
        You are logged in, so check your{" "}
        <Link to="/app/profile">profile</Link>
      </>
    ) : (
      <>
        Members, please <Link to="/login">log in</Link> to see your content relating to the association. 
      </>
    )}
  </p>
    </div>
    </Layout>
  )

export default IndexPage
