import React, { useEffect, useState } from 'react';
import axios from 'axios';

import box from './img/box.png';
import './section2.scss';

const Section2 = () => {
  const [header, setHeader] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/header')
      .then(response => {
        // Берем только первую строку из массива
        if (response.data.length > 1) {
          setHeader(response.data[1]);
        }
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <section className='section1'>
      <div className='div-center'>
        <div className='div-left'>
          <h1>Цифровой документооборот в три этапа:</h1>
          <p>1 - <span>2</span> - 3</p>
          <div className='text-bd'>
            {header ? ( // Проверяем, что header не null
              <>
                <h1>{header.name}</h1>
                <p>{header.namebottom}</p>
              </>
            ) : (
              <p>Загрузка данных...</p> // Сообщение, пока данные загружаются
            )}
          </div>
          <button>ПОПРОБОВАТЬ БЕСПЛАТНО</button>
        </div>

        <div className='div-right'>
          <img src={box} alt="Box" /> {/* Добавьте атрибут alt для img */}
        </div>
      </div>
    </section>
  );
};

export default Section2;