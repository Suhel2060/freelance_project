import React from 'react'
import '../../css/homepage.css'

import ScrollAnimation from 'react-animate-on-scroll';

const Homepage = () => {
  return (
<>
<div className="homepage">
<div className='bgimage'>


</div>
<div className="bgoverlay">
  
</div>
<h2 className='homepage-title'>
<ScrollAnimation animateIn="fadeIn" animateOnce={true} initiallyVisible={true} animatePreScroll  >
Verse Engineering and Bulders
</ScrollAnimation>
</h2>

<h3 className='homepage-subtitle'>
<ScrollAnimation animateIn="fadeIn" animateOnce={true} initiallyVisible={true} animatePreScroll >
Imagine Design, Buld
</ScrollAnimation>
</h3>
</div>
</>
  )
}

export default Homepage
