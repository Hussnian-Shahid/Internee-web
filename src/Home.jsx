import React from 'react'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Partner from './Component/Partner'
import Apply from './Component/Apply'
import Service from './Component/Service'
import Content from './Component/Content'
import Career from './Component/Career'
import Mock from './Component/Mock'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Partner />
      <Apply />
      <Service />
      <Content />
      <Career />
      <Mock/>
    </>
  );
}

export default Home