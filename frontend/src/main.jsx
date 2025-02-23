import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Header from './Header/Header';
import { Route, Routes, HashRouter } from 'react-router-dom'; // Import HashRouter correctly
import Footer from './Footer/Footer';
import Str1 from './Main/Str1my/Str1';
import Str2 from './Main/Str2your/Str2';
import Str3 from './Main/Str3my/Str3';
import Str4 from './Main/Str4your/Str4';
import Str5 from './Main/Str5my/Str5';
import Str6 from './Main/Str6together/Str6';
import Str7 from './Main/Str7Main/Str7';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route index element={<Str1/>} />
        <Route path="/Str1" element={<Str1 />} /> 
        <Route path="/Str2" element={<Str2 />} /> 
        <Route path="/Str3" element={<Str3 />} /> 
        <Route path="/Str4" element={<Str4 />} /> 
        <Route path="/Str5" element={<Str5 />} /> 
        <Route path="/Str6" element={<Str6 />} /> 
        <Route path="/Str7" element={<Str7 />} /> 
      </Routes>
      <Footer />
    </HashRouter>
  </StrictMode>
);