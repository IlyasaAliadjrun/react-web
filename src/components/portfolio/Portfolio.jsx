import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Achievement</h5>
      <h2>Sertification</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
          </div>
          <h3>Git Sertification from Progate</h3>
         
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt='' />
          </div>
          <h3>Go Sertification from Progate</h3>
          
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt='' />
          </div>
          <h3>Python Sertification from Progate</h3>
          
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt='' />
          </div>
          <h3>React Sertification from Progate</h3>
          
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt='' />
          </div>
          <h3>Ruby Sertification from Progate</h3>
          
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt='' />
          </div>
          <h3>SQL Sertification from Progate</h3>
          
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio