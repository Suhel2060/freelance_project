import React from 'react'
import '../../css/contactus.css'

const ContactusForm = () => {
    return (
        <div className='' style={{ backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #D4E4F4 100%)" }}>
            <section className='container'>
                <div className="row contactuscontainer ps-2">
                    <div className="col-md-6">
                        <div className="conatctnumber">
                            <h2 className='contact-heading pt-5'>We are here to help!</h2>
                            <p><i className="bi bi-geo-alt-fill pe-3"></i>Kathmandu, Nepal</p>
                            <p><i className="bi bi-telephone-fill pe-3"></i>984-1976596</p>
                            <p> <i className="bi bi-telephone-fill pe-3"></i>014330012</p>

                        </div>
                        <div className="social-account mt-5">
                            <p className='form-heading'>Follow Us</p>
                            <div className='d-flex media-icon'>
                            <div className='text-center'><i className="bi bi-facebook"></i></div>
                            <div className='mx-5'><i className="bi bi-instagram"></i></div>
                            </div>
                           

                        </div>

                    </div>
                    <div className="col-md-6 clientsectionform pb-5" style={{ backgroundColor: 'white'}}>
                        <form className='ps-3'>
                            <h3 className='form-heading pt-5'>Send Us Message</h3>
                            <div className="form-row">
                                <div className="row g-2">
                                    <div className="form-group col-6">
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="First Name" />

                                    </div>
                                    <div className="form-group col-6">
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Last Name" />

                                    </div>

                                </div>


                            </div>
                            <div className="form-group">
                               
                                <input type="text" className="form-control" id="inputAddress" placeholder="Email Address" />
                            </div>
                            <div className="form-group">

                                <input type="text" className="form-control" id="inputAddress2" placeholder="Subject" />

                </div>
               
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height:"100px",resize: "none"}}></textarea>
                                <label htmlFor="floatingTextarea">Your Message</label>
                            </div>


                            <button type="submit" className="btn submit-btn mt-4 px-4 py-2">Send Message</button>
                        </form>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default ContactusForm
