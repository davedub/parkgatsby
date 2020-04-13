import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2, a truly awesome page, don't you think?</p>
    <p style={{ color: 'red', fontSize: '2em' }}>Yes, it is!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
