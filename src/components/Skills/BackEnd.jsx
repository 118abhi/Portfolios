import React from 'react'
import { useEffect,useRef } from 'react';
import ScrollReveal from 'scrollreveal';

function BackEnd() {
    const ref = useRef(null);
    useEffect(()=>{
        ScrollReveal().reveal(ref.current,{
            origin:"right",
            distance:"100px",
            duration: 2000
        })
    })
  return (
    <div ref={ref} className='skills__content'>
        <h3 className="skills__title">Back-End</h3>


        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxl-nodejs"></i>
                    <div className="">
                        <h3 className="skills__name">Node JS</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                 <div className="skills__data">
                    <i className="bx bxl-thudnerclint"></i>
                    <div className="">
                        <h3 className="skills__name">Thunder Clint</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div> 

                <div className="skills__data">
                    <i className="bx bxs-server"></i>
                    <div className="">
                        <h3 className="skills__name">Express JS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxs-coin-stack"></i>
                    <div className="">
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-mongodb"></i>
                    <div className="">
                        <h3 className="skills__name">Mongo DB</h3>
                        <span className="skills__level">Biggner</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-horizontal-left"></i>
                    <div className="">
                        <h3 className="skills__name">RESTful API</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackEnd
