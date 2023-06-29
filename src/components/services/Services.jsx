import React from 'react';
import './services.css';
import {RxDotFilled} from 'react-icons/rx';

const Services = () => {
  return (
    <section id='services'>
      <h2>Services I have to offer</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Developement</h3>
          </div>

          <ul className="service__list">
            <li>
            
            <p>
            <RxDotFilled className='service__list-icon'/> Front-End Developement: familiar with modern front end technologies like HTML, CSS, and JavaScript frameworks.
            </p>
            </li>

            <li>
            
            <p>
            <RxDotFilled className='service__list-icon'/> API Development and Integration: Experience with developing RESTful APIs or GraphQL APIs that can exchange and integrate with third-party services or mobile applications.
            </p>
            </li>

            <li>
            
            <p>
            <RxDotFilled className='service__list-icon'/> Responsive Design: Emphasis on creating websites or applications that are optimized for different devices and screen sizes to help ensure a seamless user experience across multiple devices. 
            </p>
            </li>

            <li>
            
            <p>
            <RxDotFilled className='service__list-icon'/> Maintence and Support: Committed to providing ongoing maintenance and support services, including bug fixes, feature enhancements, and system updates. 
            </p>
            </li>

            <li>
            <p>
            <RxDotFilled className='service__list-icon'/> Collaboration and Communication: Strong communication skills and the ability to work collaboratively with clients, designers, and other team members to help ensure a successful project delivery. 
            </p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services