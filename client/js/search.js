window.addEventListener("load", getResults)

let datalength
const searchName = localStorage.getItem("searchName")

fetch("http://localhost:3000/searches")
        .then((res) => res.json())
        .then(data => {
            console.log(data.length)
            datalength = data.length;
        })


function getResults(e) {
    e.preventDefault();
    console.log(searchName)
    let searchResultsNum = 1;

    for(let i = 1; i <= datalength; i++){
        let url = `http://localhost:3000/searches/${i}`

        fetch(url)
        .then((res) => res.json())
        .then(data => {

            if(data.name == searchName){
                let searchResult = document.getElementById(`${searchResultsNum}`);
                let a = searchResult.querySelector("a")
                let h2 = searchResult.querySelector("h2")
                let h2a = h2.querySelector("a")
                let p = searchResult.querySelector("p")

                a.textContent = data.url;
                a.setAttribute("href", data.url);
                h2a.textContent = data.title;
                h2a.setAttribute("href", data.url);
                p.textContent = data.desc;

                searchResultsNum++;
            }
            else return;
        })
    } 
}

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", getSearchURL)

function getSearchURL(e){
    e.preventDefault();
    console.log("hello");
    const inputValue = document.getElementById("searchInput").value
    localStorage.setItem("searchName", inputValue);
    window.location.replace("search.html");
}
