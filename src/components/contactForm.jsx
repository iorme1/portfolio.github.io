import React, { Component } from 'react';

class ContactForm extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="pb-5 contact-sect-title">
              Interested in chatting or working with me? Send me a message!
            </h3>
          </div>
        </div>

        <form className="contact-form">
          <input placeholder="Enter Email" type="email" name="email" required/>
          <input placeholder="Name" type="text" name="name" required/>
          <textarea placeholder="Your Message" type="text" name="message"></textarea>
          <input className="btn btn-primary" type="submit" id="submit" value="SUBMIT" />
        </form>
       </div>
    );
  }
}

export default ContactForm;
