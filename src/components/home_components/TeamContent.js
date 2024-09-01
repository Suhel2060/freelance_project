import React from 'react'
import '../../css/teamcontent.css'
import ScrollAnimation from 'react-animate-on-scroll'

const TeamContent = () => {
    return (
        <div className='team-container py-1'>
            <section className=' container '>
                <div className="row mb-5">
                    <div className="col-md-6">
                        <p className='team-heading'>Your Trusted Partners</p>
                        <h1 className='team-title mt-4'>Highly Motivated Teams with Innovatine Idea</h1>

                    </div>
                    <div className="col-md-6 mt-4">
                        <p className='team-content pe-5'>We love what we do and therefore come up with the best possible solutions to help complete your project quickly. We are your trusted partners you can count on.</p>
                    </div>
                </div>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} animatePreScroll duration={1} >        
                    <ul className='image-list p-0 pb-5'>
                        <li className="list-group-item">
                        <img src='https://verseengineering.com.np/wp-content/uploads/2024/02/IMG_8527-1-1-scaled.jpg' alt='' />
                        </li>
                        <li className="list-group-item">
                        <img src='https://verseengineering.com.np/wp-content/uploads/2024/02/IMG_2725-scaled.jpg' alt='' />
                        </li>
                        <li className="list-group-item">
                        <img src='https://verseengineering.com.np/wp-content/uploads/2024/02/423422468_702611448745299_6801262476105511496_n.jpg' alt='' />
                        </li>
                    </ul>
              
                </ScrollAnimation>
            </section>
        
        </div>
    )
}

export default TeamContent
