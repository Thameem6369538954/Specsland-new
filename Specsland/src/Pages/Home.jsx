import React from 'react'
import CaroselHeader from '../Components/CaroselHeader'
import Cate from "../Components/Cate/Cate"
import Products from '../Components/Products'
import Offerbar from '../Components/Offerbar'

const Home = () => {
  return (
    <div>
        <CaroselHeader />
        <Cate />
        <Products />
        <Offerbar />  
    </div>
  )
}

export default Home