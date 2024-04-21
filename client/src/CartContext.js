import { createContext, useState } from "react";


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {}, // The actual function is not defined here, we just telling that there is a function inside the context with this name
    addOneToCart: () => {},
    removeOneToCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});


export function CartProvider({children}){

    const [cartProduct, setCartProduct] = useState([]);

    // [{id: 1, quantity: 2}]

    function getProductQuantity(id){
        const quantity = cartProduct.find(product => {product.id === id})?.quantity;

        if(quantity == undefined){
            return 0;
        }

        return quantity;
    }


    function addOneToCart(item){
        const quantity = getProductQuantity(item.id);

        if (quantity == 0){
            setCartProduct((prevValue) => {
                return [...prevValue, item];
            });
            return;
        }

        setCartProduct(
            cartProduct.map(
                product => 
                product.id === item.id
                ? {...product, quantity: product.quantity + item.quantity} : product
            )
        )
    }

    function removeOneToCart(id){
        const quantity =getProductQuantity(id);

        if(quantity === 0){
            return;
        }

        if(quantity === 1){
            deleteFromCart(id);
            return;
        }

        setCartProduct(
            cartProduct.map(
                product => 
                product.id === item.id
                ? {...product, quantity: product.quantity -1 } : product
            )
        )
    }

    function deleteFromCart(id){
        setCartProduct( cartProduct =>
            cartProduct.filter( 
                product => product.id != id
            )
        )
    }

    function getTotalCost(){
        let totalCost = 0;

        return totalCost;
    }
    
    const contextValue  ={
        items: cartProduct,
        getProductQuantity,
        addOneToCart,
        removeOneToCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;