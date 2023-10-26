import React from 'react';
import './contact.css';
import {AiTwotoneMail} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import {BsDiscord} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact' className='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bamafan1090@yahoo.com</h5>
            <a href="mailto:eric.partain@yahoo.com" target='__blank'>Reach Out</a>
          </article>

          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Eric Partain</h5>
            <a href="https://m.me/KnightHawk1090/" target='__blank'>Reach Out</a>
          </article>

          <article className="contact__option">
            <BsDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>knighthawk1090</h5>
            <a href="https://discord.com/users/knighthawk1090" target='__blank'>Reach Out</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Message Details' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact