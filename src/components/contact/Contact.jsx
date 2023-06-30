import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail />
            <h4>Email</h4>
            <h5>bamafan1090@yahoo.com</h5>
            <a href="mailto:bamafan1090@yahoo.com" target='__blank'>Reach Out</a>
          </article>

          <article className="contact__option">
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>Eric Partain</h5>
            <a href="https://m.me/KnightHawk1090/" target='__blank'>Reach Out</a>
          </article>

          <article className="contact__option">
            <BsDiscord />
            <h4>Discord</h4>
            <h5>knighthawk1090</h5>
            <a href="https://discord.com/users/knighthawk1090" target='__blank'>Reach Out</a>
          </article>

        </div>

        <form action="">
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