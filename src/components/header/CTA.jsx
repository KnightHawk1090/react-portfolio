import React from 'react'
import Resume from '../../assets/Eric.Partain Resume.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={Resume} download className='btn'>Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA
