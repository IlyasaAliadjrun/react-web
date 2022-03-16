import React from 'react'
import './about.css'
import ME from '../../assets/me_about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'></img>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Coding</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Sertification</h5>
              <small>5+ Sertification</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ So Far This Year</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas, soluta veritatis sequi, enim, rem voluptatibus quos magnam consequatur magni quasi quibusdam qui fuga atque eveniet eligendi velit laudantium delectus!
          </p>

          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>  
    </section>
  )
}

export default About