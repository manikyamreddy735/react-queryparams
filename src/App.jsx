import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    
    <>
      {/* NAvbar Component */}
      <Navbar/>

      {/* Routing setup for the app */}
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>

      </Routes>
    </>
  )
}

export default App
