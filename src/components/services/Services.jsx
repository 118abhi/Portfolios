import React,{useState} from 'react'
import './servies.css'


function Services() {
  return (
    <section className="section services" id="services">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My work</span>


        <div className="services__container container grid" >
            <div className="services__content">
                <div>
                    <i style={{fontWeight:600}} className="uil bx bxl-airbnb services__icon"></i>
                    <h3 className="services__title">Netflix <br/>clone</h3>
                    
                    <a href="https://abhisahani.netlify.app/login" target='_blank'>
                        <span className="services__button">View Code <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    <br />
                    <a href="#">
                        <span className="services__button">Live Site <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>
            </div>

            <div className="services__content" >
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title"> Portfolio<br />Website </h3>
                       <a href=" https://portfolio-abhi-silk.vercel.app/" target='_blank'>
                            <span className="services__button">View Code <i className="uil uil-arrow-right services__button-icon"></i></span>
                       </a>
                    <br />
                    <a href="#home">
                        <span className="services__button">Live Site <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a> 
                </div>
            </div>
             
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">To-Do List<br/>App</h3>
                    <a href="#" target="_blank">
                    <span className="services__button">View Code <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    <br />
                    <a href="#" target="_blank">
                    <span className="services__button">Live Site <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>
            </div>

            <div className="services__content" >
                <div>
                    <i className="uil uil-cloud-moon-rain services__icon"></i>
                    <h3 className="services__title">Weather <br /> App </h3>
                    <a href=" #" target="_blank">
                    <span className="services__button">View Code <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                   
                    <br />
                    <a href="#" target="_blank">
                    <span className="services__button">Live Site <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    
                </div>
            </div>
            <div className="services__content" >
                <div>
                    <i className="uil uil-stopwatch-slash services__icon"></i>
                    <h3 className="services__title">Stopwatch <br /> Web App</h3>
                    <a href="#" target="_blank">
                    <span className="services__button">View Code <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    <br />
                    <a href="#" target="_blank">
                    <span className="services__button">Live Site <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Services
