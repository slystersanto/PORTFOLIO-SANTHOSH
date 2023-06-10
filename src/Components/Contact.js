import React from "react";
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f7dk6jh",
        "template_2tjaf5k",
        form.current,
        "v-75tU8INWAnmDtpl"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section className="contact" id="contact">
        <div className="heading">
          <h2 className="contact-title">Contact Me</h2>
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" className="contact-input" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
