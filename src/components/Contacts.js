import React from 'react';
import '../styles/Contact.css'
function Contacts() {
  return (
    <div className="contacts">
      <h2>Contact Information</h2>
      <div className="contact-info">
        <div className="contact-item">
          <span>Email:</span>
          <a href="mailto:your-email@example.com">amuyunzubq@gmail.com</a>
        </div>
        <div className="contact-item">
          <span>Phone:</span>
          <a href="tel:+254742812483">+254742812483</a>
        </div>
        <div className="contact-item">
          <span>Social:</span>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/barrack-amuyunzu-7414142b9/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/Baraq_odari" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://github.com/amuybar?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
