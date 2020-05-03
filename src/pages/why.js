import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const Why = () => (
  <Layout>
  <div className="container">
    <SEO title="Page two" />
    <h1>Hello from another page.</h1>
    <p>Why is this page here?</p>
    <p>It's a redo of page-2 in the Gatsby template,.</p>
    <p style={{ color: 'red', fontSize: '2em', fontWeight: 'bold' }}>This text is boldly styled in red!</p>
    </div>
    </Layout>
)
export default Why


