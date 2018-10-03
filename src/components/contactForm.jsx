import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { FormStyle, Title } from '../styles/contactForm.js';

class ContactForm extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
     event.preventDefault();
     const data = new FormData(event.target);

     fetch('https://isaac-contact.herokuapp.com/contact', {
       method: 'POST',
       body: data,
       mode: 'no-cors',
     });
     this.setState({ show: true })
     event.target.reset()
   }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Title className="pb-5">
              Interested in chatting or working with me? Send me a message!
            </Title>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <FormStyle onSubmit={this.handleSubmit} method="POST" noValidate>
              <input placeholder="Enter Email" type="email" name="email" required/>
              <input placeholder="Name" type="text" name="name" required/>
              <textarea placeholder="Your Message" type="text" name="message"></textarea>
              <input
                className="btn btn-primary"
                type="submit"
                id="submit"
                value="SUBMIT"
              />
            </FormStyle>
          </div>
        </div>
        <SweetAlert
          show={this.state.show}
          title="Success!"
          text="Thanks for your interest! I look forward to speaking with you."
          onConfirm={() => this.setState({ show: false })}
          />
       </div>
    );
  }
}

export default ContactForm;
