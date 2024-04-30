import { createContext, useState } from "react";
import { CartContext } from "./CartContext";

export const ProductsContext = createContext({
    items: [],
    category: {},
    getProduct: () => {},
    updateProducts: () => {},
});

export function ProductProvider({children}){

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    function updateProducts(data, category){
            setProducts(data);
            setCategory(category);
    }

    function getProduct(id){
        return products.find((product) => {
            return product.id == id;
        })
    }

    const contextValue ={
        items: products,
        category: category,
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