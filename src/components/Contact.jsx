import React from "react";
import Header from "./Header";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <title className="title-contact-container">
        <h1>Contact</h1>
      </title>
      <div className="contact-icons">
        <div className="image-container">
          <img src="./assets/icons/facebook.png" alt="" />
        </div>
        <div className="image-container">
          <img src="./assets/icons/telegrama.png" alt="" />
        </div>
        <div className="image-container">
          <img src="./assets/icons/whatsapp.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
