import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"


const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About this Project</h1>
    <p>Very rudimentary fooling around with Gatsby.</p>
    <p style={{ color: 'red', fontSize: '3em', fontWeight: 'bold' }}>Yes, it is!</p>
    <Link to="/">Go back to the homepage</Link>
    <br/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default About
