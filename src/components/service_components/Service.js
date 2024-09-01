import React from 'react'
import ScrollAnimationMin from 'react-animate-on-scroll'
import '../../css/homepage.css'

const Service = () => {
    return (
       <>
            <div className="h-20 homepage">
                <div className='bgimage'>


                </div>
                <div className="bgoverlay">

                </div>
                <h2 className='homepage-title'>
                    <ScrollAnimationMin animateIn="fadeIn" animateOnce={true} initiallyVisible={true} animatePreScroll  >
                        About Bidur Engineering
                    </ScrollAnimationMin>
                </h2>

            </div>
            </>
    )
}

export default Service
