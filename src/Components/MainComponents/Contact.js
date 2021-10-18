import React from "react";

import Button from "../FormElements/Button";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <span id="mail-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-envelope-fill"
          viewBox="0 0 16 16"
        >
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
        </svg>
      </span>
      <h2>
        <span>Get In Touch</span>
      </h2>
      <form className="form-contact">
        <div className="form-grid">
          <label htmlFor="name">
            Name: <span id="required">*</span>
          </label>
          <input id="name" type="text" placeholder="Name" />
          <br />
        </div>
        <div className="form-grid">
          <label htmlFor="email">
            Email: <span id="required">*</span>
          </label>
          <input id="email" type="email" placeholder="Email" />
          <br />
        </div>
        <div className="form-grid">
          <label htmlFor="subject">Subject: </label>
          <input id="subject" type="text" placeholder="Subject" />
          <br />
        </div>
        <div className="form-grid">
          <label htmlFor="message">Message: </label>
          <input
            id="message"
            type="text"
            placeholder="Ready to be your listener"
          />
          <br />
        </div>
        <div className="form-grid">
          <div></div>
          <div className="buttons-column">
            <Button id="submit-button" type="submit">
              Send message
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
