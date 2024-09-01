import React from 'react'
import '../../css/homepage.css'

import ScrollAnimation from 'react-animate-on-scroll';

const ClientSection = () => {
  return (
 <>
 <div className="h-20 homepage">
<div className='bgimage'>


</div>
<div className="bgoverlay">
  
</div>
<h2 className='homepage-title'>
<ScrollAnimation animateIn="fadeIn" animateOnce={true} initiallyVisible={true} animatePreScroll  >
About Verse
</ScrollAnimation>
</h2>

</div>
</>
  )
}

export default ClientSection
