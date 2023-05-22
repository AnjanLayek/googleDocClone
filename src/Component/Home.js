import React from 'react'
import Bodycard from './Bodycard'
import ContentPart from './ContentPart'
import Navbar from './Navbar'
import '../App.css';

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Bodycard/>
      <ContentPart/>
    </div>
  )
}

export default Home
