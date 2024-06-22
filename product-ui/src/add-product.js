import React from "react";
import { useState, useEffect } from "react";

const AddProduct = ({setAddProduct}) => {
    function saveProduct(){
        fetch('https://localhost:7005/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.querySelector('input[placeholder="Name"]').value,
                price: document.querySelector('input[placeholder="Price"]').value
            })
        })
        .then(response => response.json())
        .then(data => {
            setAddProduct(false);
        });
    }
    return(
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ color: '#007BFF' }}>Add Product</h2>
            <input type="text" placeholder="Name" style={{ padding: '10px', fontSize: '16px', margin: '10px 0' }}/>
            <input type="text" placeholder="Price" style={{ padding: '10px', fontSize: '16px', margin: '10px 0' }}/>
            <button onClick={() => saveProduct()} style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', marginRight: '10px' }}>Save</button>
            <button onClick={() => setAddProduct(false)} style={{ padding: '10px 20px', backgroundColor: '#DC3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Cancel</button>
        </div>
    );
}

export default AddProduct;