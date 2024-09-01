import React from 'react'
import aboutimage1 from '../../logo/aboutimage1.jpg'
import '../../css/about.css'

import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    return (
        <div className='about-container pt-5'>
            <div className=" container about">
                <div className="row aboutus">
                    <div className=" col-md-6 aboutus-text">
                        <h2>About us</h2>
                        <h6>We’re a skilled team dedicated to providing top-notch consultancy services in various fields. With expertise in civil and mechanical projects, we prioritize professionalism, integrity, and client satisfaction.</h6>
                    </div>
                    <div className=" col-md-6 aboutus-img">
                        <img src={aboutimage1} alt="" className='img-fluid aboutimage' />
                    </div>
                </div>
                <div className="about-hireus-container">
                    <h2>Hire Us For</h2>
                    <div className="about-hireus ">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} animatePreScroll duration={1} >
                            <div className="about-hireus-item mb-3">
                                <h4>Architectiral &Structural Designs (2D & 3D)</h4>
                                <p>We create detailed plans and models for buildings using advanced software.</p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} animatePreScroll duration={1}>
                            <div className="about-hireus-item">
                                <h4>Survey Maping, Property Valuation & Master Plan</h4>
                                <p>Conducting accurate survey mapping for property valuation and develops comprehensive land use master plans.</p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} animatePreScroll duration={1} >
                            <div className="about-hireus-item">
                                <h4>Site Supervision & Estimation</h4>
                                <p>Ensuring projects adhere to design and budget, overseeing construction progress.</p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} animatePreScroll duration={1} >
                            <div className="about-hireus-item">
                                <h4>Water Proofing & Seepage Solutions</h4>
                                <p>Specializes in waterproofing solutions, preventing water damage in buildings with tailored techniques and materials</p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} animatePreScroll duration={1}>
                            <div className="about-hireus-item mb-5">
                                <h4>Construction & Renovation</h4>
                                <p>Managing construction projects from planning to completion, including renovations.</p>
                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
