import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Category from './sections/Category'
import Footer from './sections/Footer'
import Types from './sections/Types'
import Services from './sections/Services'
import Productsgrid from './sections/Productsgrid'
import Banner from './sections/Banner'
import Reviews from './sections/Reviews'
import Insta from './sections/Insta'

const App = () => {
  return (
   <>
   <Header/>
   <Hero/>
   <Category/>
   <Types/>
   <Services/>
   <Productsgrid/>
   <Banner/>
   <Reviews/>
   <Insta/>
   <Footer/>
   </>
  )
}

export default App