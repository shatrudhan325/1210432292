import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/categories/laptop/products?top=10');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.productName}</h2>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
