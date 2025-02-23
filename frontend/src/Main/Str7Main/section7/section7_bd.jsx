// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Section7 = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/images')
//       .then(response => setImages(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//         {images.map((item, index) => (

//           <div key={index}>
//             {item.data}
//             {item.namebottom}
//           </div>

//         ))}
//     </div>
//   );
// };
// export default Section7;