import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../Assets/contact-img.svg";
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
    setStatus({success:null,message:''})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    const templateParams = {
      from_name: formDetails.firstName + " " + formDetails.lastName,
      from_email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    emailjs.send(  process.env.REACT_APP_EMAILJS_SERVICE_ID,  
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,{publicKey:  process.env.REACT_APP_EMAILJS_PUBLIC_KEY,})
      .then(
        (response) => {
          setButtonText("Send");
          setStatus({ success: true, message: "Message Sent Successfully" });
          setFormDetails(formInitialDetails);
        },
        (error) => {
          setButtonText("Send");
          setStatus({ success: false, message: "Something went wrong" });
          console.log(error);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12} className="text-center">
            <img src={contactImg} alt="contact us" className="contact-img" />
          </Col>
          <Col md={6} sm={12}>
            <h2 style={{ textAlign: 'center' }}>Get in Touch</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e) => onFormUpdate('firstName', e.target.value)}
              />
              <input
                type="text"
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={(e) => onFormUpdate('lastName', e.target.value)}
              />
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email"
                onChange={(e) => onFormUpdate('email', e.target.value)}
              />
              <input
                type="tel"
                value={formDetails.phone}
                placeholder="Phone Number"
                onChange={(e) => onFormUpdate('phone', e.target.value)}
              />
              <textarea
                rows="6"
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onFormUpdate('message', e.target.value)}
              />
              <button type="submit"><span>{buttonText}</span></button>
              {status.message && (
                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}