import React from 'react';
import '../styles/Contact.css';
import ContactImage from '../assets/fooda.jpeg';

function Contact() {
  return (
    <div className='contact'>
      <div
        className='leftSide'
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className='rightSide'>
        <h1>Contact us</h1>
        <form id='contact-form' method='POST'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' name='name' placeholder='Enter your Name' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='Enter your email' />
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            cols='30'
            rows='7'
            placeholder='Enter your message'
          ></textarea>
          <button type='submit'>Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
