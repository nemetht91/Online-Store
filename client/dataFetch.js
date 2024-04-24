
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

    async getPopularCategories(){
        return await this.fetchData('popular-categories');
    }

}

const dataFetcher = new DataFetcher();

export default dataFetcher;