import { createContext, useState } from "react";


export const CartContext = createContext({
    items: [],
    preview: Boolean,
    getProductQuantity: () => {}, // The actual function is not defined here, we just telling that there is a function inside the context with this name
    addOneToCart: () => {},
    removeOneToCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    getTotalQuantity: () => {},
    showPreview: () => {},
    hidePreview: () => {}
});


export function CartProvider({children}){

    const [cartProduct, setCartProduct] = useState([]);
    const [preview, setPreview] = useState([false]);

    // [{item: {}, quantity: 2}]

    function getProductQuantity(id){
        const quantity = cartProduct.find((product) => { return product.item.id === id})?.quantity;


        if(quantity == undefined){
            return 0;
        }

        return quantity;
    }


    function addOneToCart(newItem){
        
        const {item, newQuantity} = newItem;

        const quantity = getProductQuantity(item.id);
        if (quantity == 0){
            setCartProduct((prevValue) => {
                return [...prevValue, newItem];
            });

            return;
        }

        setCartProduct(
            cartProduct.map(
                product => 
                product.item.id === item.id
                ? {...product, quantity: product.quantity + newItem.quantity} : product
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
                product.item.id === id
                ? {...product, quantity: product.quantity -1 } : product
            )
        )
    }

    function deleteFromCart(id){
        setCartProduct( cartProduct =>
            cartProduct.filter( 
                product => product.item.id != id
            )
        )
    }

    function getTotalCost(){
        let totalCost = 0;

        return totalCost;
    }

    function getTotalQuantity(){
        let totalQuantity = 0;

        cartProduct.map((product) => {
            totalQuantity += product.quantity;
        });

        return totalQuantity;
    }

    function showPreview(){
        setPreview(true);
    }

    function hidePreview(){
        setPreview(false);
    }
    
    const contextValue  ={
        items: cartProduct,
        preview: preview,
        getProductQuantity,
        addOneToCart,
        removeOneToCart,
        deleteFromCart,
        getTotalCost,
        getTotalQuantity,
        showPreview,
        hidePreview
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;