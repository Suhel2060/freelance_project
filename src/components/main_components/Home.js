import React from 'react'
import About from '../home_components/About'
import ClientSection from '../home_components/ClientSection'
import Visualization from '../home_components/Visualization'
import CompanyDetail from '../home_components/CompanyDetail'
import TeamContent from '../home_components/TeamContent'
import Footer from '../home_components/Footer'
import Homepage from '../home_components/Homepage'

const Home = () => {
  return (
  <>
        <Homepage/>
        <About/>
        <div style={{backgroundImage: "linear-gradient(180deg, #EEF8FF 0%, #EEF8FF 100%)" }}>
          <ClientSection/>
          <Visualization />
          <CompanyDetail/>
          <TeamContent/>
          <Footer/>
        </div>
  </>
  )
}

export default Home;
