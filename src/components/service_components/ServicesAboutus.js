import React from 'react'
import '../../css/service.css'
import image1 from '../../logo/about_image1.jpg'

const ServicesAboutus = () => {
    return (
        <div style={{ backgroundColor:'#F0F7FF' }}>
            <div className="service-container">
                <div className="service-image">
                    <img src={image1} alt="" />
                </div>
                <div className="service-aboutus-info">
                    <h5>
                        We are a team of experts with years of experience in engineering to help your projects get complete efficiently.
                    </h5>
                    <p>Bidur Engineering Consultancy, established on 2014, provides diverse consultancy services spanning construction, design, and supervision for projects like buildings, roads, and bridges. We also offer cost estimation, property valuation, and asset assessment, while emphasizing research integration for holistic solutions.</p>

                    <div className="core">
                        <h3>Our core Value</h3>
                        <div><i className="bi bi-dash"></i> <span>Committed to delivering the best</span></div>
                        <div><i className="bi bi-dash"></i> <span>Honest and transparent services</span></div>
                        <div><i className="bi bi-dash"></i> <span>We care for your business just like ours</span></div>
                        <div><i className="bi bi-dash"></i> <span>Keep learning and adapting to new technologies</span></div>
                    </div>
               
                </div>

            </div>
        </div>
    )
}

export default ServicesAboutus
