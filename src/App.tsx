import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobrenos from './paginas/sobrenos/Sobrenos';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/sobrenos' element={<Sobrenos />} />
          </Routes>
          </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
