import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <>
      <section className="contact">
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, please feel free to get in touch with us. We are here to assist you.</p>
            <form action="#" method="post">
                <label htmlFor="name">Your Name :</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="email">Your Email : </label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="message">Your Message :</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    </>
  )
}

export default Contact
