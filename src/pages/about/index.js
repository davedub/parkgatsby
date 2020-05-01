import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"


const About = () => (
  <Layout>
  <div className="container">
    <SEO title="About" />
    <h1>About this Project</h1>
    <p>Very rudimentary fooling around with Gatsby.</p>
    <p style={{ color: 'green', fontSize: '3em', fontWeight: 'bold' }}>Yes, it is GREEN!</p>
    </div>
  </Layout>
)

export default About
