import React, { useEffect, useState } from 'react'
import { getProductData } from '../functions/products';

const Products = () => {
  const [productDatas, setProductDatas] = useState([]);


  async function getLogs(item) {
    try {
      const logs = await getProductData(item);
      console.log(logs)
      setProductDatas(logs || []);
    } catch (error) {
      console.error('Error fetching log data:', error);
    }
  }

  useEffect(() => {
    // const initialCount = 5;
    getLogs();

  }, []);
  return (
//     <div>

// {productDatas.length > 1 && productDatas.length < 51 ?  (
//         <ul>
//         {productDatas.slice(2, 50).map((product, index) => (
//             <li key={index}>
//                 <p>Index: {index + 1}</p>
//               <img src={product.images[0]} alt="" />

//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading products...</p>
//       )}
   
      
//     </div>
<div>
  {productDatas.length > 0 ? (
    <div>
      {productDatas.map((product, index) => {
        if (index > 0 && index < 50) { 
          return (
            <div className='card border-[1px] border-solid w-[100px]' key={index}>
              <p>Index: {index }</p> 
              <img className='w-full' src={product.images[0]} alt={`Product ${index + 1}`} />
            </div>
          );
        } else {
          return null; 
        }
      })}
    </div>
  ) : (
    <p>Loading products...</p>
  )}
</div>

  )
}

export default Products