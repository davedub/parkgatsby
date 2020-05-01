import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
  <div className="container">
    <SEO title="Page two" />
    <h1>Hello from page 2</h1>
    <p>A truly awesome page, no?</p>
    <p style={{ color: 'red', fontSize: '2em' }}>Yes, it is!</p>
    </div>
    </Layout>
)

export default SecondPage
