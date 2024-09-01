import React from 'react'
import '../../css/teamcontent.css'


const ServicesTeamContent = () => {
    return (
        <div style={{backgroundImage: "linear-gradient(180deg, #EEF8FF 0%, #EEF8FF 100%)",margin:'0px' }}>

        <section className='project-section pb-5'>
        <section className='container aboutsection-container'  >
            <div className="card border-0">
                <div className="row g-0">
                    <div className="col-md-4 company-detail">
                        <div className="card-body ">
                            <p className="card-title company-heading m-3">Have a Project on mind?</p>
                            <p className="card-text company-quote mx-3 my-5">We can help you bring your ideas to life. Let’s talk about what we can build and raise together.</p>
                        </div>
                        <button className='connect-btn p-2 mt-5 ms-5 mb-4'>Connect with us! <i className="bi bi-arrow-right-short"></i></button>
                    </div>
                    <div className="col-md-8 image-content">
                        <img src="https://verseengineering.com.np/wp-content/uploads/2024/02/IMG_8518-1024x605.jpg" className="people-image" alt="..." />
                    </div>
                </div>
            </div>
        </section>
            <div className="card container bg-transparent border-0">
                <div className="row g-0">
                    <div className="col-md-6 mt-5">
                        <div className="project-heading me-5">
                        Let us together build your dream project
                        </div>

                    </div>
                    <div className="col-md-6 ps-5 mb-5">
                        <div className="project-content mt-4">
                        When you partner with us, you’re not alone in your engineering projects. We’re here to support your team and help your organization grow. Whether you need architectural, structural, or construction expertise, we’re dedicated to enhancing your projects and boosting your business. If you’re seeking a reliable consultancy to elevate your efforts and increase your success, VerseEngineering is here for you. Let’s work together to achieve your goals and thrive in today’s dynamic environment.
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>

    )
}

export default ServicesTeamContent