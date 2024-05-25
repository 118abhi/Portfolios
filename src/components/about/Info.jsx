import React from 'react'
import "./about.css"

export default function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience </h3>
        <span className="about__subtitle"> &lt; 6 Mounth <br />Working</span>
      </div>


      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">
          Completed
        </h3>
        <span className="about__subtitle">≈ 5 <br /> projects</span>
      </div>

      
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">
          Support
        </h3>
        <span className="about__subtitle">Online <br /> 24/7</span>
      </div>
    </div>
  )
}
