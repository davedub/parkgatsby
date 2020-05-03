import React from 'react'

class ContactForm extends React.Component {

  render() {
    return (
      <form action={this.props.action} method="post">
      <div className="formcontainer">
      <ul className="formfields">
          <li>
          <label className="formlabel">Full name</label>
          <input type="text" name="fullname" />
          </li>
          <li>
          <label className="formlabel">Email</label>
          <input type="email" name="email"/>
          </li>
          <li>
          <label className="formlabel">Message</label>
          <textarea name="message" rows="2"></textarea>
          </li>
        </ul>
        <div className="centered">
          <button type="submit" className="submitbutton">Send</button>
        </div>
        </div>
      </form>
    );
  }
}

export default ContactForm
