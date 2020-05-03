import React from 'react'

import "./contactform.css"

class ContactForm extends React.Component {
  render() {
    return (
      <div className="container contact-form">

      <form method="post">
         <h3>Drop Us a Line</h3>
         <div className="row">
              <div className="col-lg-12">
                  <div className="form-group">
                      <input type="text" name="txtName" className="form-control" placeholder="First Name *" value="" />
                  </div>
                  <div className="form-group">
                      <input type="text" name="txtName" className="form-control" placeholder="Last Name *" value="" />
                  </div>
                  <div className="form-group">
                      <input type="text" name="txtEmail" className="form-control" placeholder="Email Address *" value="" />
                  </div>
                  <div className="form-group">
                      <input type="text" name="txtPhone" className="form-control" placeholder="Phone Number *" value="" />
                  </div>
                  <div className="form-group">
                      <textarea name = "txtMsg" className="form-control" placeholder="Your Message" rows="8" ></textarea>
                  </div>
                  <div className="centered">
                  <button type="submit" className="btnFormSubmit">Send</button>
                  </div>
              </div>
          </div>
      </form>
</div>
    );
  }
}

export default ContactForm
