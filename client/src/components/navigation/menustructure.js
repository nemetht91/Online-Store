const stucture = [
    {
        main: {name: "Deals", url: "products"}, 
        sub:[]
    },
    {
        main: {name: "Food", url: "products"}, 
        sub:[
            {name: "Vegtable", id: 1}, 
            {name: "Fruit", id: 2}, 
            {name: "Meat & Poultry", id: 3}, 
            {name: "Fish & Seafood", id: 4}, 
            {name: "Dairy & Egg", id: 5}, 
            {name: "Bakery", id: 6}, 
            {name: "Pastas & Grains", id: 7}, 
            {name: "Cereals and Snacks", id: 8}
        ]},
    {
        main: {name: "Beverages", url: "products"}, 
        sub:[
            {name: "Tea", id: 9}, 
            {name: "Coffee", id: 10}, 
            {name: "Soft Drinks", id: 11}, 
            {name: "Beer", id: 12}, 
            {name: "Wine", id: 13}
        ]},
    {
        main: {name: "Household", url: "products"}, 
        sub:[
             {name: "Home & Kitchen", id: 14},
             {name: "Cleaning Supplies", id: 15}
            ]},
    {
        main:{name: "Personal Care", url: "products"}, 
        sub:[
            {name: "Personal Hygiene", id: 16}, 
            {name: "Babies", id: 17}
        ]},
    {
        main: {name: "Most Popular", url: "popular"}, 
        sub:[]
    },
    {
        main: {name: "My Orders", url: "orders"}, 
        sub:[]
    },
]

export default stucture;