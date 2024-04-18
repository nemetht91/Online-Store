import React, {useState} from 'react';

function ShoppingCart(){
    const [items, setItems] = useState([]);

    return <div className='shoppingCart'>
        <i className="fa-solid fa-cart-shopping"></i>
        <div>
            <p>{items.length}</p>
        </div>
    </div>
}

export default ShoppingCart;