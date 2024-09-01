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
                            <p><i class="bi bi-geo-alt-fill pe-3"></i>Sabhagriha, Pokhara-8</p>
                            <p><i class="bi bi-telephone-fill pe-3"></i>985414425142</p>
                            <p> <i class="bi bi-telephone-fill pe-3"></i>015454654</p>

                        </div>
                        <div className="social-account mt-5">
                            <p className='form-heading'>Follow Us</p>
                            <div className='d-flex media-icon'>
                            <div className='text-center'><i class="bi bi-facebook"></i></div>
                            <div className='mx-5'><i class="bi bi-instagram"></i></div>
                            </div>
                           

                        </div>

                    </div>
                    <div className="col-md-6 clientsectionform pb-5" style={{ backgroundColor: 'white'}}>
                        <form className='ps-3'>
                            <h3 className='form-heading pt-5'>Send Us Message</h3>
                            <div class="form-row">
                                <div class="row g-2">
                                    <div class="form-group col-6">
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="First Name" />

                                    </div>
                                    <div class="form-group col-6">
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Last Name" />

                                    </div>

                                </div>

                            </div>
                            <div class="form-group">
                               
                                <input type="text" class="form-control" id="inputAddress" placeholder="Email Address" />
                            </div>
                            <div class="form-group">

                                <input type="text" class="form-control" id="inputAddress2" placeholder="Subject" />
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height:"100px",resize: "none"}}></textarea>
                                <label for="floatingTextarea">Your Message</label>
                            </div>


                            <button type="submit" class="btn submit-btn mt-4 px-4 py-2">Send Message</button>
                        </form>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default ContactusForm
