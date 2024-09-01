import React from 'react'
import '../../css/about.css'
import vijay from '../../logo/vijay.jpg'
import aspara from '../../logo/aspara.jpg'
import anil from '../../logo/anil.jpg'
import mainimage from '../../logo/mainmember.jpg'
import '../../css/service.css'

const TeamMembers = () => {
    return (
        <div className='about-container'>
            <div className=" container about">
                <h2 style={{ marginBottom: '0px',textAlign:'center' }}>Our team members</h2>

                <div className="subimage">
                    <div className="subimage-img">
                        <div className="image_class">
                        <img src={mainimage} alt="" />
                        </div>
                        <div className="flex-box">
                            <h5>Bipin Adhikari</h5>
                            <p>Sub Engineer</p>
                        </div>
                    </div>
                    <div className="subimage-img">
                        <div className="image_class">
                        <img src={aspara} alt="" />
                        </div>
                        <div className="flex-box">
                            <h5>Apsara Pudasaini Adhikari</h5>
                            <p>Director</p>
                        </div>
                    </div>
                    <div className="subimage-img">
                        <div className="image_class">
                        <img src={anil} alt="" />
                        </div>
                        <div className="flex-box">
                            <h5>Anil Kumar Shrestha</h5>
                            <p>Civil Engineer</p>
                        </div>
                    </div>
                    <div className="subimage-img">
                        <div className="image_class">
                        <img src={vijay} alt="" />
                        </div>
                        <div className="flex-box">
                            <h5>Vijay Rai Chamling</h5>
                            <p>Architect Engineer</p>
                        </div>
                    </div>

                 
                    
                </div>

            </div>
        </div>

    )
}

export default TeamMembers
