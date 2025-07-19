import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './assets/Navbar/nav'
import Home from "./assets/Home/Home"
import Hero from "./assets/Hero/Hero"
import Catagory from './assets/catagory/Catagory'
import Product from "../src/assets/Product/Product"
import Card from "../src/assets/Cards/Card"

function App() {
  return (
  <div>
    <Nav/>
    <Hero/>
    <Catagory/>
    <Home/>
    <Product/>
    <Card />
  </div>
  )
}

export default App;
