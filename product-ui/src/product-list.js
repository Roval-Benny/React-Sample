import React from 'react';
import Product from './product';

function ProductList({products,deleteProduct}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ color: '#007BFF' }}>{ products.length>0 ? "Product Count: "+products.length: "No Products" }</h2>
            {products.map((product) => (
                <Product key={product.id} product={product} deleteProduct={deleteProduct} />
            ))}
        </div>
  );
}

export default ProductList;