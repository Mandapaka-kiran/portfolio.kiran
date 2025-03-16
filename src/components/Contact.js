import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-description">
        Feel free to reach out for collaborations or just a friendly chat. I’d love to connect!
      </p>
      <div className="contact-container">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:kiranmandapaka07@gmail.com">kiranmandapaka07@gmail.com</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <a href="tel:+919063040180">+91 9063040180</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
