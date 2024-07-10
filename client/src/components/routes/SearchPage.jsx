import React, {useEffect, useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import dataFetcher from "../../../dataFetch";
import Product from "../body/product/product";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../ProductsContext";
import { useParams } from "react-router-dom";


function SearchPage(){
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams()

    const [products, setProducts] = useState([])
    const [searchedText, setSearchedText] = useState("");
    const [categoryFilters, setCategoryFilters] = useState([]);
    const [categories, setCategorys] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await dataFetcher.searchProducts(location.state.text);
            setProducts(data);
            updateCategories(data);
        }
        updateText();
        fetchProducts();
    }, [location.state]);

    function updateCategories(data){
        let tempCategories = [];
        data.forEach((product) => {
            if(!(tempCategories.includes(product.categoryId))){
                tempCategories.push(product.categoryId);
            }
        })
        setCategorys(tempCategories);
    }


    function updateText(){
        if(location.state == undefined){
            setSearchedText("");
        }else{
            setSearchedText(location.state.text);
        }
    }

    function addCategoryFilter(categoryId){
        if(categoryFilters.includes(categoryId)){
            return;
        }
        setCategoryFilters((preValue) => {
            return [
                ...preValue,
                categoryId
            ]
        })
    }

    function removeCategoryFilter(categoryId){
        if(!categoryFilters.includes(categoryId)){
            return;
        }
        setCategoryFilters((preValue) => {
            return preValue.filter((value) => {
                return value != categoryId;
            })
        })
    }

    function isFiltered(categoryId){
        if(categoryFilters.length == 0){
            return true;
        }
        return categoryFilters.includes(categoryId);
    }



    return <div className="search-page page">
        <h1>Search Results</h1>
        <div className="search-bar">
            <p>{searchedText}</p>
        </div>
        <div className="content">
            <div className="products">
                {products.map((product) => {
                    return isFiltered(product.categoryId) && <Product key={product.id} detail={product} />
                })}    
            </div>
          <div className="filters">

                {categories.map((categoryId) => {
                    return <CategoryFilter 
                    key={categoryId} 
                    categoryId={categoryId}
                    addFilter={addCategoryFilter}
                    removeFilter={removeCategoryFilter}/>
                })}
          </div>
        
        </div>

    </div>


}

function CategoryFilter(props){

    const [category, setCategory] = useState({});
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const fetchCategory = async () => {
            const data = await dataFetcher.getCategoryById(props.categoryId);
            setCategory(data);
        }
        fetchCategory();
    }, [])

    function handleClick(){
        if(isActive){
            props.removeFilter(category.id);
            setIsActive(false);
        }else{
            props.addFilter(category.id);
            setIsActive(true);
        }
    }

    return <div className="categoryFilter" onClick={handleClick}>
        <div className="tick">
            {isActive && <i className="fa-solid fa-check"></i>}
        </div>
        <p>{category["name"]}</p>
    </div>
}

export default SearchPage;