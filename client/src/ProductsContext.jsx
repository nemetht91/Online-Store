import { createContext, useState } from "react";
import { CartContext } from "./CartContext";

export const ProductsContext = createContext({
    items: [],

    getProducts: () => {},
    updateProducts: () => {},
});

export function ProductProvider({children}){

    const [products, setProducts] = useState([]);

    function updateProducts(data){
            console.log(data);

            setProducts(data);
    }

    function getProduct(id){
        return products.find((product) => {
            return product.id == id;
        })
    }

    const contextValue ={
        items: products,
        updateProducts,
        getProduct,
    }

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductProvider;