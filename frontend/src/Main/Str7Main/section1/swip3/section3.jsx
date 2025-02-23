import React, { useEffect, useState } from 'react';
import axios from 'axios';

import box from './img/box.png';
import './section3.scss';

const Section3 = () => {
  const [header, setHeader] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/header')
      .then(response => {
        // Берем только первую строку из массива
        if (response.data.length > 2) {
          setHeader(response.data[2]);
        }
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <section className='section1'>
      <div className='div-center'>
        <div className='div-left'>
          <h1>Цифровой документооборот в три этапа:</h1>
          <p>1 - 2 - <span>3</span></p>
          <div className='text-bd'>
            {header ? ( 
              <>
                <h1>{header.name}</h1>
                <p>{header.namebottom}</p>
              </>
            ) : (
              <p>Загрузка данных...</p> 
            )}
          </div>
          <button>ПОПРОБОВАТЬ БЕСПЛАТНО</button>
        </div>

        <div className='div-right'>
          <img src={box} alt="Box" />
        </div>
      </div>
    </section>
  );
};

export default Section3;