import React from 'react'
import '../../css/footer.css'
import circlelogo from '../../logo/logo-photoaidcom-cropped.jpg'


const Footer = () => {
    return (
        <div className='footer-container text-center'>
            <section className='container'>
                <div className="row py-5">
                    <div className="col-md-4 pt-4">
                        <ul className='footer-content pt-5'>
                            <li>Kathmandu, Nepal</li>
                            <li className='mt-4'>bidurengineering801@gmail.com</li>
                        </ul>

                    </div>
                    <div className="col-md-4"  >
                        <img src={circlelogo} alt='..' style={{     height: '94%',width: '64%' }}/>
                        {/* <img src={logo} alt='..' style={{ borderRadius:'10px' }}/> */}
                    </div>
                    <div className="col-md-4 p-5">
                        <div className="grid d-flex ">
                            <div className='text-center'><i className="bi bi-facebook"></i></div>
                            <div className='mx-5'><i className="bi bi-instagram"></i></div>
                            <div><i className="bi bi-telephone-fill"></i></div>

                        </div>
                    </div>
                </div>
               
               
            </section>
            <footer className='footer-end'>
                <hr/>
                Copyright © 2024 bidurengineering | Developed by <span style={{color:"#ffcc00"}}>SOVAN</span>
                </footer>

        </div>
    )
}

export default Footer
