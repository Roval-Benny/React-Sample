import { useEffect } from "react";
import { useState } from "react";
import ProductList from "./product-list";
import useFetch from "./fetch";

const ProductBody = ({})=>{
    const [products, setProducts] = useState([]); 
    const [productList, setProductList] = useState([]);

    useFetch('https://localhost:7005/product', {
            method: 'GET'
        },(data) =>{
            setProducts(data);
            setProductList(data);
        });

    function deleteProduct(id){
        fetch('https://localhost:7005/product/?productid='+id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            setProducts(data);
            setProductList(data);
        });
    }

    function searchProduct(e){
        const searchValue = e.target.value;
        const newProductList = products.filter((product) => {
            return product.name.includes(searchValue);
        });
        setProductList(newProductList);
    }

    return(
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <input 
                type="text" 
                placeholder="Search" 
                onChange={searchProduct}
                style={{ padding: '10px', fontSize: '16px' }}
            />
            <ProductList products={productList} deleteProduct={deleteProduct}/>
        </div>
    );
}

export default ProductBody; 