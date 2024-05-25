import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Abhii</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className='footer__link'>About</a>
          </li>
          <li>
            <a href="#services" className='footer__link'>
              Projects
            </a>
          </li>
          <li>
            <a href="#qualification" className='footer__link'>Education</a>
          </li>
        </ul>

        <div className="footer__social">
            <a href=" #" target="_blank" className=" footer_icon_social footer__social-link" >HackerRank</a>

            <a href=" #" className="footer_icon_social footer__social-link" target='_blank'>
              LeetCode
            </a>
            
            <a href=" #" className="footer_icon_social footer__social-link" target='_blank'>
              CodeChef
            </a>

            <a href=" #" className="footer_icon_social footer__social-link" target='_blank'>
              CodeForces
            </a>
          </div>
          <span className='footer__copy'>
            &#169; Abhisahani. All rights reserved
          </span>
      </div>
    </footer>
  )
}

export default Footer
