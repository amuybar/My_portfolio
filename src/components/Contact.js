import React from 'react';
import Contacts from './Contacts';
import Form from './Form';
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact" id='contact'>
      <Contacts />
      <Form />
    </div>
  );
}

export default Contact;
