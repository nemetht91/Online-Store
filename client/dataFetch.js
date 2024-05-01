
class DataFetcher{
    constructor(){
        this.serverURL = import.meta.env.VITE_API_SERVER_URL;
    }

    async fetchData(query){
        try {
            const respons = await fetch(this.serverURL+query);
            const data = await respons.json();
            return data;
        } catch (error) {
            console.log("Error while executing query: "+query);
            console.log(error);
            return [];
        }
    }

    async getTrendingItems(){
        return await this.fetchData("trending");
    }

    async getAllProducts(){
        return await this.fetchData('products');
    }

    async getProducts(categoryId){
        return await this.fetchData('products?'+new URLSearchParams({
            categoryId: categoryId
        }));
    }

    async getPopularCategories(){
        return await this.fetchData('popular-categories');
    }

    async getDeals(){
        return await this.fetchData('deals');
    }

    async getProduct(productId){
        return await this.fetchData('product?'+new URLSearchParams({
            productId: productId
        }));
    }

    async getCategory(categoryName){
        return await this.fetchData('category?'+new URLSearchParams({
            categoryName: categoryName.replace(/(\r\n|\n|\r)/gm, "")
        }));
    }

}

const dataFetcher = new DataFetcher();

export default dataFetcher;