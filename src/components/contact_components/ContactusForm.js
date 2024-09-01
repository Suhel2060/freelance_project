import React from 'react'
import '../../css/contactus.css'

const ContactusForm = () => {
    return (
        <div className='' style={{ backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #D4E4F4 100%)" }}>
            <div className="contactuscontainer">
                <div className="clientsection-info">
                    <div className="conatctnumber">
                        <h2>We are here to help!</h2>
                        <h5>Panga, Kirtipur</h5>
                        <h5>  <i class="bi bi-telephone-fill"></i>985414425142</h5>
                        <h5> <i class="bi bi-telephone-fill"></i>015454654</h5>

                    </div>
                    <div className="social-account">
                        <div className='text-center'><i class="bi bi-facebook"></i></div>
                        <div className='mx-5'><i class="bi bi-instagram"></i></div>

                    </div>

                </div>
                <div className="clientsectionform" style={{ backgroundColor: 'white' }}>
                    <form>
                    
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label htmlFor="inputEmail4">First Name</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                
                           </div>
                           <div class="form-group col-md-6">
                           <label htmlFor="inputPassword4">Last Name</label>
                           <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                           </div>
                        </div>
                        <div class="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="form-group col-md-4">
                                <label htmlFor="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label htmlFor="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactusForm
