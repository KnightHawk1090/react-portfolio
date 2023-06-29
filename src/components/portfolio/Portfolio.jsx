import React from 'react';
import './portfolio.css';
import password from '../../assets/password.png';
import bookbuster from '../../assets/bookbuster.png';
import forecast from '../../assets/forecast.png';
import planner from '../../assets/planner.png';
import quiz from '../../assets/quiz.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Finished Project Samples</h5>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={password} alt="" />
          </div>
          <h3>Secure Password Generator</h3>

          <a href="https://github.com/KnightHawk1090/module-3-challenge" className='btn' target='__blank'>Code</a>
          <a href="https://knighthawk1090.github.io/module-3-challenge/" className='btn btn-primary' target='__blank'>Deployed Project</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={bookbuster} alt="" />
          </div>
          <h3>BookBuster</h3>

          <a href="https://github.com/TuddaT0224/Module-8-Project-1" className='btn' target='__blank'>Code</a>
          <a href="https://tuddat0224.github.io/BookBuster/" className='btn btn-primary' target='__blank'>Deployed Project</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={forecast} alt="" />
          </div>
          <h3>City Weather Forecast</h3>

          <a href="https://github.com/KnightHawk1090/module-6-challenge-weather-report" className='btn' target='__blank'>Code</a>
          <a href="https://knighthawk1090.github.io/module-6-challenge-weather-report/" className='btn btn-primary' target='__blank'>Deployed Project</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={planner} alt="" />
          </div>
          <h3>Daily Planner</h3>

          <a href="https://github.com/KnightHawk1090/module-5-challenge-workplanner" className='btn' target='__blank'>Code</a>
          <a href="https://knighthawk1090.github.io/module-5-challenge-workplanner/" className='btn btn-primary' target='__blank'>Deployed Project</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={quiz} alt="" />
          </div>
          <h3>Secure Password Generator</h3>

          <a href="https://github.com/KnightHawk1090/maximum-api-code-quiz" className='btn' target='__blank'>Code</a>
          <a href="https://knighthawk1090.github.io/maximum-api-code-quiz/" className='btn btn-primary' target='__blank'>Deployed Project</a>
        </article>

      </div>
    </section>
  )
}

export default Portfolio