import {React,useEffect,useRef} from 'react'
import ScrollReveal from 'scrollreveal';


function Others() {
    const ref = useRef(null);
    useEffect(()=>{
        ScrollReveal().reveal(ref.current,{
            origin:"bottom",
            distance:"100px",
            duration: 2000
        })
    })

  return (
    // <div ref={ref} className='skills__content'>
    //     <h3 className="skills__title">Programming</h3>
    //     <div className="skills__box">
    //         <div className="skills__group">
    //             <div className="skills__data">
    //                 <i className="bx bxl-python"></i>
    //                 <div className="">
    //                     <h3 className="skills__name">Python</h3>
    //                     <span className="skills__level">Advanced</span>
    //                 </div>
    //             </div>

    //             <div className="skills__data">
    //                 <i className="bx bxl-c-plus-plus"></i>
    //                 <div className="">
    //                     <h3 className="skills__name">C/C++</h3>
    //                     <span className="skills__level">Intermediate</span>
    //                 </div>
    //             </div>

    //         </div>

    //         <div className="skills__group">
    //             <div className="skills__data">
    //                 <i className="bx bxl-java"></i>
    //                 <div className="">
    //                     <h3 className="skills__name">Java</h3>
    //                     <span className="skills__level">Intermediate</span>
    //                 </div>
    //             </div>

    //             <div className="skills__data">
    //                 <i className="bx bxl-javascript"></i>
    //                 <div className="">
    //                     <h3 className="skills__name">JavaScript</h3>
    //                     <span className="skills__level">Intermediate</span>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div ref={ref} className='skills__content'>
        <h3 className="skills__title">Programming & Others</h3>


        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxl-python"></i>
                    <div className="">
                        <h3 className="skills__name">Typescript</h3>
                        <span className="skills__level">Bigggner</span>
                    </div>
                </div>

                <div className="skills__data">
                    {/* <i className="bx bxl-c-plus-plus"></i> */}
                    <div className="">
                        {/* <h3 className="skills__name">C/C++</h3>
                        <span className="skills__level">Intermediate</span> */}
                    </div>
                </div>


                <div className="skills__data">
                    {/* <i className="bx bxl-joomla"></i> */}
                    <div className="">
                        {/* <h3 className="skills__name">AI & ML</h3>
                        <span className="skills__level">Beginner</span> */}
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxl-javascript"></i>
                    <div className="">
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    {/* <i className="bx bxl-java"></i> */}
                    <div className="">
                        {/* <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Intermediate</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    {/* <i className="bx bx-data"></i> */}
                    <div className="">
                        {/* <h3 className="skills__name">Data Analytics</h3>
                        <span className="skills__level">Beginner</span> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Others
