import React from "react";

import Layout from "../../components/Layout/layout"
import ContactForm from "../../components/contactform/contactform";

export default class Contact extends React.Component {
  render() {
    return (
      <Layout>
      <div className="container">
          <ContactForm />
      </div>
      </Layout>
    );
  }
}
