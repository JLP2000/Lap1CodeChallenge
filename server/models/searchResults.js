const searchResults = require("../data");

class Search{
    constructor(data){
        this.id = data.id;
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
}

module.exports = Search;
