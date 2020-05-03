import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "../components/counter"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
  <div className="container">
    <SEO title="Home" />
    <h1>Hey, there.</h1>
    <p>Good to see you working on your Gatsby skills. Now, go build something great.</p>
    <Counter initialCount={0} />
    </div>
    </Layout>
  )

export default IndexPage
