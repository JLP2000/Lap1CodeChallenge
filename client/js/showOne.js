const buttonTen = document.getElementById("ten");
buttonTen.addEventListener("click", () => {
    window.location.replace("allSearches.html");
});

const buttonOne = document.getElementById("one");
buttonOne.addEventListener("click", getSearchURL)

// function getInfoByName(search, allData) {
//     result = allData.find(data => data.name == search);
//     if(!result){
//         return;
//     }
//     return result;
// }

// function getSearchURL(e){
//     e.preventDefault();
//     const inputValue = document.getElementById("searchInput").value;
//     let url = `http://localhost:3000/searches`

//     fetch(url)
//     .then((res) => res.json())
//     .then(data => {
//         result = getInfoByName(inputValue, data);
//         let webLink = result.url;
//         window.location.replace(webLink);
//     })
// }

function getSearchURL(e){
    e.preventDefault();
    const inputValue = document.getElementById("searchInput").value
    localStorage.setItem("searchName", inputValue);
    window.location.replace("search.html");
}
