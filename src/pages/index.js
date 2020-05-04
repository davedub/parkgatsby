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
    <h1>{isLoggedIn() ? `Welcome Member!` : "Welcome to our website."}</h1>
    <h5>Parkwood Club, Inc. is the homeowners' association for Parkwood Estates and Parkwood Ridge.</h5>
    <> 
    {isLoggedIn() ? ( 
      <> 
     <div> 
     <p>You now have access to restricted resources on this website!</p>
      <span className="fineprint">To log out, use the logout link on the top right.</span>
      </div>
      </>
      ) : (
        <>
      <div class="memberlogin"> 
      <p> Members, please <span class="redbold"><Link to="/login">log in</Link></span> to see restricted access content.</p>
      </div>
      </>
      )}
    </>
    <Counter initialCount={0} />
    </div>
    </Layout>
  )

export default IndexPage
