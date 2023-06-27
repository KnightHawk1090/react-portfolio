import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import profile from '../../assets/profile.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Eric Partain</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <h5 className='text-light'>Electrical and Computer Enginnering Student</h5>
        <CTA />
        <HeaderSocials />

        <div className="profile">
          <img src={profile} alt='' />
        </div>
      </div>
    </header>
  )
}

export default Header