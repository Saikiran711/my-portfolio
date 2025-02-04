import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../Assets/contact-img.svg"
import './Contact.css'

export default function Contact(){
  const form = useRef();
    const formintialdetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
    }
    const [formDetails,setFormDetails]=useState(formintialdetails);
    const [buttonText,setButtonText]=useState('send');
    const [status,setStatus]=useState({});

    const onformUpdate=(category,value)=>{
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('sending...');

        const templateParams = {
            from_name: formDetails.firstName + " " + formDetails.lastName,
            from_email: formDetails.email,
            phone: formDetails.phone,
            message: formDetails.message,
        };
        console.log("EmailJS Public Key: ", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
        // Send email using EmailJS
        emailjs.init({
          publicKey: 'wZ_7Du9ksDOPjJ3bB',
          // Do not allow headless browsers
          blockHeadless: true,
          blockList: {
            // Block the suspended emails
            list: ['foo@emailjs.com', 'bar@emailjs.com'],
            // The variable contains the email address
            watchVariable: 'userEmail',
          },
          limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
          },
        });
        emailjs
        .send(
            'service_c4fv16r',
           'template_55dm0aq',
           templateParams
          
            )
            .then(
                (response) => {
                    setButtonText("Send");
                    setStatus({ success: true, message: "Message Sent Successfully" });
                    setFormDetails(formintialdetails);
                },
                (error) => {
                    setButtonText("Send");
                    setStatus({ success: false, message: "Something went wrong" });
                    console.log(error);
                }
            );
    };

    

    return(<>
    <section className="contact" id="connect">
  <Container>
    <Row className="align-items-center">
      {/* Image Section */}
      <Col md={6} sm={12} className="text-center">
        <img src={contactImg} alt="contact us" className="contact-img" />
      </Col>

     <div style={{ textAlign:'center',alignItems:'center'}}>
      <Col md={6} sm={12}>
        <h2 style={{ textAlign:'center'}}>Get in Touch</h2>
        <form ref={form} onSubmit={handleSubmit}>
          
            {/* First Name and Last Name side by side */}
         
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e) => onformUpdate('firstName', e.target.value)}
              />
              <input
                type="text"
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={(e) => onformUpdate('lastName', e.target.value)}
              />
           

            {/* Email in full width */}
           
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email"
                onChange={(e) => onformUpdate('email', e.target.value)}
              />
            

            {/* Phone in full width */}
            
              <input
                type="tel"
                value={formDetails.phone}
                placeholder="Phone Number"
                onChange={(e) => onformUpdate('phone', e.target.value)}
              />
           

            {/* Message Textarea in full width */}
           
              <textarea
                rows="6"
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onformUpdate('message', e.target.value)}
              />
           

            {/* Submit Button */}
            
              <button type="submit"><span>{buttonText}</span></button>
            

            {/* Status Message */}
            {status.message && (
             
                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
              
            )}
          
        </form>
      </Col>
      </div>
    </Row>
  </Container>
</section>


    </>);
}