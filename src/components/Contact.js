import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form action="mailto:contact@designcar.com" method="post" encType="text/plain">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
