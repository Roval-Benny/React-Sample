import React from "react";
import { useState } from "react";
import ProductBody from './product-body';
import AddProduct from './add-product';
import { UserContext } from "./userContext";

function Home(){
    const [addProduct, setAddProduct] = useState(false);
    const {user, setUser} = React.useContext(UserContext);

    function onLogout(){
        setUser(null);
        localStorage.removeItem('user');
    }
    return(
        <div>
            <button style={{
                position: 'absolute',
                top: 40,
                right: 40,
                padding: '10px 20px',
                backgroundColor: '#DC3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px' 
            }} 
            onClick={onLogout}>Log out</button>
        <button 
          style={{
            display: addProduct ? 'none' : 'block',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }} 
          onClick={() => setAddProduct(!addProduct)}
        >
          Add Product
        </button>
        {addProduct ? <AddProduct setAddProduct={setAddProduct} /> : null}
        {!addProduct ? <ProductBody /> : null}
        </div>
    )
}

export default Home;    