import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me"></div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>10+ years in the workforce</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Projects Completed</small>
            </article>

            </div>

            <p>
              I am an aspiring Full Stack Developer with a passion for connecting diverse ideas and collaborating across disciplines. With a strong academic background in coding and solid technical skills, I strive to create impactful user experiences in both mobile and web applications. Drawing from my experience in consumer product goods sales and marketing with industry-leading brands, I bring a unique perspective to understanding how end users interact with websites and software platforms. I am dedicated to developing meaningful applications that enhance users' lives and enjoy working with others to achieve these goals.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About