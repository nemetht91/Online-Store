const categories = [
    {id: 1, name: "Vegtables", img:"../src/assets/img/vegtables.png", url:""},
    {id: 2, name: "Fruit", img:"", url:""},
    {id: 3, name: "Meat & Poultry", img:"../src/assets/img/meat.png", url:""},
    {id: 4, name: "Fish & Seafood", img:"", url:""},
    {id: 5, name: "Dairy & Eggs", img:"../src/assets/img/dairy.png", url:""},
    {id: 6, name: "Bakery", img:"../src/assets/img/bakery.png", url:""},
    {id: 7, name: "Pastas & Grains", img:"", url:""},
    {id: 8, name: "Cereals & Snacks", img:"../src/assets/img/cereal.png", url:""},
    {id: 9, name: "Tea", img:"", url:""},
    {id: 10, name: "Coffee", img:"", url:""},
    {id: 11, name: "Soft Drinks", img:"../src/assets/img/softdrink.png", url:""},
    {id: 12, name: "Beer", img:"", url:""},
    {id: 13, name: "Wine", img:"../src/assets/img/wine.png", url:""},
    {id: 14, name: "Home & Kitchen", img:"", url:""},
    {id: 15, name: "Cleaning Supplies", img:"../src/assets/img/cleaning.png", url:""},
    {id: 16, name: "Personal Hygiene", img:"", url:""},
    {id: 17, name: "Babies", img:"", url:""},
];

export const popularCategories = [1, 6, 13, 5, 3, 11, 15, 8];

export function getCategoriy(id){
    return categories.find((category) => {return category.id === id})
}

export function getCategoryByName(name){
    return categories.find((category) => {return category.name === name})
}

export function getPopularCategories(){
    let popCat = [];
    popularCategories.map((id) =>{
        let category = getCategoriy(id);
        popCat.push(category);
    });
    return popCat;
}

export default categories;

