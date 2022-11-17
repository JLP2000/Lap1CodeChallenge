const searchResults = require("../data");

class Search{
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.url = data.url;
        this.title = data.title;
        this.desc = data.desc;
    }

    static get all(){
        const searches = searchResults.map((search) => new Search(search));
        return searches;
    }

    static findById(id){
        const searchID = searchResults.filter((searches) => searches.id === id)[0]
        if(!id){
            return;
        }
        const search = new Search(searchID);
        return search;
    }

    static findByName(name){
        const searchName = searchResults.filter((searches) => searches.name === name)[0]
        if(!name){
            return;
        }
        const search = new Search(searchName)
        return search;
    }
}

module.exports = Search;
