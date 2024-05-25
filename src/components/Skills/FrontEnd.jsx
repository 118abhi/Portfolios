import {React,useEffect,useRef} from 'react'
import ScrollReveal from 'scrollreveal';

function FrontEnd() {
    const ref = useRef(null);
    useEffect(()=>{
        ScrollReveal().reveal(ref.current,{
            origin:"left",
            distance:"100px",
            duration: 2000
        })
    })
  return (
    <div ref={ref} className='skills__content'>
        <h3 className="skills__title">Front-End</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxl-html5"></i>
                    <div className="">
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-css3"></i>
                    <div className="">
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level"> Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-javascript"></i>
                    <div className="">
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxl-bootstrap"></i>
                    <div className="">
                        <h3 className="skills__name">BootStrap</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-github"></i>
                    <div className="">
                        <h3 className="skills__name">Git/GitHub</h3>
                        <span className="skills__level"> Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-react"></i>
                    <div className="">
                        <h3 className="skills__name">React Js</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrontEnd
