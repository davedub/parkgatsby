import React from "react";
import Layout from "../../components/layout"

import ContactForm from "../../components/contact-us/contactform";
import SEO from "../../components/seo"


export default class Contact extends React.Component {
  render() {
    return (
      <Layout>
      <div class="container">
        <h2>Contact Us</h2>
        <p>
          Subway tile biodiesel forage cloud bread, portland asymmetrical flexitarian messenger bag 90's tilde pickled bespoke williamsburg banjo.
        </p>
        <div className="Webform">
          <ContactForm />
        </div>
      </div>
      </Layout>
    );
  }
}
