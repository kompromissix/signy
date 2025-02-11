import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Header from './Header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes>
      <Header/>
      {/* <Route index element={<Main/>} /> */}
      {/* <Route path='Main' element={<Main/>}/> */}
    </Routes>
    <Footer/>
  </StrictMode>,
)
