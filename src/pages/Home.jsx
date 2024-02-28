import React from 'react'
import HomeHero from '../components/HomeHero'
import Swiper from '../components/Swiper'
import Supports from '../components/Supports'
import HomeMain from '../components/HomeMain'

const Home = ({ language, setLanguage }) => {

  return (
    <>
      <HomeHero language={language} setLanguage={setLanguage} />
      <Supports language={language} setLanguage={setLanguage} />
      <HomeMain language={language} setLanguage={setLanguage} />
      {/* <Swiper/> */}
    </>
  )
}

export default Home