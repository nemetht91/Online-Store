import React, {useState} from 'react';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function ShoppingCartToogle(props){
    const cart = useContext(CartContext);

    function handleClick(){
    }

    return <div onClick={handleClick} className='shoppingCart'>
        <i className="fa-solid fa-cart-shopping"></i>
        <div>
            <p>{cart.getTotalQuantity()}</p>
        </div>
    </div>
}

export default ShoppingCartToogle;