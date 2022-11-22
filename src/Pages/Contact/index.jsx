import React, { useRef, useState } from "react";
import "./Contact.scss"
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const [displayForm, setDisplayForm] = useState(true);
    const [emailSent, setEmailSent] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ceva4pm', 'template_qxv77fr', form.current, 'g5W36U8poFh49tMxv')
        .then((result) => {
            console.log(result.text);
            setDisplayForm(false);
            setEmailSent(true)
        }, (error) => {
            console.log(error.text);
            setEmailSent(false);
            displayForm(true)
        });
    };
    return(
        <section className="container__contact" id="contact">
            <h2>Thinking of a project?</h2>
            <p>Do you want to redesign your website? Or simply create your website from A to Z? Then you have come to the right place, click here! 👇🏻</p>
            {!emailSent &&(
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder={'Name'} className="input" />
                <input type="email" name="user_email" placeholder={'E-mail'} className="input" />
                <textarea name="message" placeholder={'Message'} className="input" />
                <div className="submit-btn btn-neumorphism">
                    <input type="submit" value="Send the message" className="text-grey" />
                    <img src="/assets/icon-arrow.png" alt="Icon Arrow" />
                </div>
            </form>
                )}
            {
                emailSent&&(
                    <div className="form-thanks">
                        <span><strong>Thanks for reaching out! Your email has been sent ☀️</strong></span>
                    </div>
                )
            }
            
        </section>
    )
}

export default Contact;