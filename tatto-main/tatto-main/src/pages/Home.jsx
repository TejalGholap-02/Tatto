import React from 'react'
import HomeHero from '../components/home/HomeHero'
import StylesSection from '../components/home/StylesSection'
import ServicesOverviewSection from '../components/home/ServicesOverviewSection'

const Home = () => {
  return (
    <div>
    <HomeHero/>  
    <StylesSection/>    
    <ServicesOverviewSection/>
    </div>
  )
}

export default Home
