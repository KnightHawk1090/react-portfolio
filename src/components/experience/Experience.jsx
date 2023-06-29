import React from 'react';
import './experience.css';
import { AiFillHtml5 } from 'react-icons/ai';
import {BsFiletypeCss} from 'react-icons/bs';
import {BiLogoJavascript} from 'react-icons/bi';
import {BsBootstrap} from 'react-icons/bs';
import {BiLogoTailwindCss} from 'react-icons/bi';
import {BiLogoReact} from 'react-icons/bi';
import {FaNodeJs} from 'react-icons/fa';
import {BiLogoMongodb} from 'react-icons/bi';
import {GrMysql} from 'react-icons/gr';
import {SiInsomnia} from 'react-icons/si';

const Experience = () => {
  return (
    <section id='experience' >
      <h5>Skills I have learned</h5>
      <h2>Personal Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experence__details'>
              <AiFillHtml5 />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experence__details'>
              <BsFiletypeCss />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experence__details'>
              <BiLogoJavascript />
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experence__details'>
              <BsBootstrap />
              <h4>Bootstrap</h4>
              <small className='text-light'>Beginner</small>
            </article>

            <article className='experence__details'>
              <BiLogoTailwindCss />
              <h4>Tailwind</h4>
              <small className='text-light'>Beginner</small>
            </article>

            <article className='experence__details'>
              <BiLogoReact />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>

          </div>

        </div>

        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__content">

            <article className='experence__details'>
              <FaNodeJs />
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experence__details'>
              <BiLogoMongodb />
              <h4>Mongo DB</h4>
              <small className='text-light'>Beginner</small>
            </article>

            <article className='experence__details'>
              <GrMysql />
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experence__details'>
              <SiInsomnia />
              <h4>Insomnia</h4>
              <small className='text-light'>Intermediate</small>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience