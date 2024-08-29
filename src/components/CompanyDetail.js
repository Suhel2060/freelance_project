import React from 'react'
import '../css/companydetail.css'

const CompanyDetail = () => {
    return (
        <div>
            <section className='container'>
                <div className='title mb-3 me-5'>
                    <h1>Why Choose Us?</h1>
                </div>
                <div className='py-4 me-4 company-para'>
                    <b>We are the right term for your business. We have the expertise and knowledge to offer impartial advice and services at an honest price.</b>
                </div>
                <div className='company-info'>
                    <div>We have been working as a survey for:-</div><br />
                    <div className='me-5'>NLG Insurance Company Ltd, Siddhartha Insurance Company Ltd, Sikhar Insurance Company Ltd. We also have been working as an interior and exterior designer for private as well as commercial projects</div>
                </div>

                <div class="card border-0 mt-5">
                    <div class="row g-0">
                        <div class="col-md-4 company-detail">
                            <div class="card-body ">
                                <p class="card-title company-heading m-3">Have a Project on mind?</p>
                                <p class="card-text company-quote mx-3 my-5">We can help you bring your ideas to life. Let’s talk about what we can build and raise together.</p>
                            </div>
                            <button className='connect-btn p-2 mt-5 ms-5 mb-4'>Connect with us! <i class="bi bi-arrow-right-short"></i></button>


                        </div>
                        <div class="col-md-8">
                            <img src="https://verseengineering.com.np/wp-content/uploads/2024/02/IMG_8518-1024x605.jpg" class="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </section>
            <section className='project-section'>
                <div className="card container bg-transparent border-0">
                    <div className="row g-0">
                        <div className="col-md-6 mt-5">
                            <div className="project-heading me-5">
                            Let us together build your dream project
                            </div>

                        </div>
                        <div className="col-md-6 pe-2">
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

export default CompanyDetail
