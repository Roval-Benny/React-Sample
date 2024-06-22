const Product = ({product,deleteProduct}) =>{
    
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px',
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <button 
              onClick={() => deleteProduct(product.id)} 
              style={{
                padding: '10px 20px', 
                backgroundColor: '#DC3545', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                fontSize: '16px'
              }}
            >
              Delete
            </button>
          </div>
    );
}

export default Product;