import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
    items: [],
    category: {},
    getProduct: () => {},
    updateProducts: () => {},
    getProductByName: () => {},
});

export function ProductProvider({children}){

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")));
    const [category, setCategory] = useState([]);

  
    function updateProducts(data, category){
            console.log(data);
            setProducts(data);
            setCategory(category);
            localStorage.setItem("products", JSON.stringify(data));
            
    }

    function getProduct(id){
        return products.find((product) => {
            return product.id == id;
        })
    }

    function getProductByName(name){
        return products.find((product) => {
            return product.name == name;
        })
    }

    const contextValue ={
        items: products,
        category: category,
        updateProducts,
        getProduct,
        getProductByName,
    }

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductProvider;