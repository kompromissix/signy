import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Section4 = () => {
  const [tovar, setTovar] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/api/tovar')
      .then(response => setTovar(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        {tovar.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.pass}</p>
            <p>{item.punkt}</p>
            <p>{item.cena}</p> 
          </div>
        ))}
    </div>
  );
};

export default Section4;