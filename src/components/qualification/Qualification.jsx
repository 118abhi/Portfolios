import React, { useState,useEffect,useRef } from 'react'
import ScrollReveal from 'scrollreveal';
import './qualification.css'

function Qualification() {
    const [toggle,setToggle] = useState(1);
    const toggleTab = (idx)=>{
        setToggle(idx);
    }
    const ref1 = useRef(null)
    useEffect(()=>{
        ScrollReveal().reveal(ref1.current,{
            origin:"bottom",
            distance:"50px",
            duration:2000
        })
    },)


  return (
    <section className='qualifation section' id="qualification"> 
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>


        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div id='education' className={`qualification__button button--flex' ${toggle===1?'qualification__active':''}`}
                onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification-icon"></i> Education
                </div>

                <div id='experience' className={`qualification__button button--flex' ${toggle===2?'qualification__active':''}`}
                onClick={()=>toggleTab(2)}><i className="uil uil-briefcase-alt qualification-icon"></i>
                Experience
                </div>
            </div>




            <div ref={ref1} className="qualification__sections">
                <div className={ toggle === 1?"qualification__content qualification__content-active": "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BSc in Computer Science </h3>
                            <span className="qualification__subtitle">Rishi Ram Naresh Technical Institute, Uttar pradesh.</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> &nbsp; 2022 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>



                        <div className="">
                            <h3 className="qualification__title">Intermediate in Vic</h3>
                            <span className="qualification__subtitle">Victory Inter collage, Uttar Pradesh</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>&nbsp; 2020 - 2022
                            </div>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">Class X</h3>
                            <span className="qualification__subtitle">Balkrishan I C  Bhakriya Dewara mau, Uttar pradesh</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> &nbsp;2020
                            </div>
                        </div>


                        <div>
                            <span className="qualification__rounder"></span>
                        </div>
                    </div>
                </div>

                <div className={ toggle === 2?"qualification__content qualification__content-active": "qualification__content"}>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">Front end  Developer Intern</h3>
                            <span className="qualification__subtitle">Motioncut Lucknow</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>&nbsp;March,2024 - April,2024
                            </div>
                        </div>


                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                       
                        </div>



                         <div className="">
                            <h3 className="qualification__title">Certified by Naresh IT hydrabad</h3>
                            <span className="qualification__subtitle">Naresh it- Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> August,2023 -  January,2024
                            </div>
                        </div> 
                    </div>


               
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
