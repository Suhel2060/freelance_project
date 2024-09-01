import React from 'react'
// import aboutimage1 from '../logo/aboutimage1.jpg'
import '../../css/about.css'


const ServicesAbout = () => {
    return (
        
            <div className="about" style={{backgroundImage: "linear-gradient(180deg, #EEF8FF 0%, #EEF8FF 100%)" }}>
                <div className="about-hireus-container"  style={{backgroundImage: "linear-gradient(180deg, #EEF8FF 0%, #EEF8FF 100%)" }}>
                    <h2 style={{ textAlign:'center' }}>How can we help you?</h2>
                    <div className="about-hireus ">

                    <div className="about-hireus-item mb-3 aboutsection-hireus-section">
                            <h4 className='aboutsection-data'>Architectiral &Structural Design</h4>
                            <p className='aboutsection-data'>We conduct surveys to gather essential data for various infrastructure projects like roads, hydropower, and urban development, ensuring accurate planning and execution.</p>
                            <button className='services-button'>Get In Touch</button>
                        </div>

                    <div className="about-hireus-item aboutsection-hireus-section">
                            <h4 className='aboutsection-data'>Architectiral &Structural Design</h4>
                            <p className='aboutsection-data'>We provide services to determine the value of properties and assets, offering detailed reports for individuals and institutions to make informed decisions regarding their investments.</p>
                       <button className='services-button'>Get In Touch</button>
                        </div>

                    <div className="about-hireus-item aboutsection-hireus-section">
                            <h4 className='aboutsection-data'>Architectiral &Structural Design</h4>
                            <p className='aboutsection-data'>We offer expertise in designing buildings and structures, ensuring both aesthetic appeal and structural integrity.</p>
                       <button className='services-button'>Get In Touch</button>
                        </div>
                
                    <div className="about-hireus-item aboutsection-hireus-section">
                            <h4 className='aboutsection-data'>Architectiral &Structural Design</h4>
                            <p className='aboutsection-data'>Harness our expertise to design aesthetically appealing and structurally sound buildings and structures, ensuring top-tier quality from conception to completion.</p>
                        <button className='services-button'>Get In Touch</button>
                        </div>
                 
                    <div className="about-hireus-item mb-5 aboutsection-hireus-section">
                            <h4 className='aboutsection-data'>Architectiral &Structural Design</h4>
                            <p className='aboutsection-data'>Revitalize existing structures with precision surveying for accurate planning and execution across various infrastructural domains.</p>
                        <button className='services-button'>Get In Touch</button>
                        </div>

                    <div className="about-hireus-item mb-5 aboutsection-hireus-section">
                            <h4 className='aboutsection-data'>Architectiral &Structural Design</h4>
                            <p className='aboutsection-data'>Mitigate seepage concerns with tailored solutions and expert assessments, safeguarding property investments effectively.</p>
                        <button className='services-button'>Get In Touch</button>
                        </div>

                       
                    </div>
                </div>
            </div>
        
    )
}

export default ServicesAbout