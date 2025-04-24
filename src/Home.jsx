import React from 'react'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Partner from './Component/Partner'
import Apply from './Component/Apply'
import Service from './Component/Service'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Partner />
      <Apply />
      <Service/>
    </>
  );
}

export default Home