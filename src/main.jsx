import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Header from './Header/header';
import { Route, Routes, HashRouter } from 'react-router-dom'; // Import HashRouter correctly
import Footer from './Footer/Footer';
import Str1 from './Main/Str1my/Str1';
import Str2 from './Main/Str2your/Str2';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route index element={<Str1/>} />
        <Route path="/Str1" element={<Str1 />} /> 
        <Route path="/Str2" element={<Str2 />} /> 
      </Routes>
      <Footer />
    </HashRouter>
  </StrictMode>
);