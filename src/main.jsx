import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Header from './Header/Header'
import { Router, Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import Str1 from './Main/Str1my/Str1'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Header/>
      <Routes>
        <Route index element={<Str1/>} />
      </Routes>
      <Footer/>
    </HashRouter>
  </StrictMode>,
)
