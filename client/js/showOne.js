const buttonTen = document.getElementById("ten");
buttonTen.addEventListener("click", () => {
    window.location.replace("allSearches.html");
});


const buttonOne = document.getElementById("one");
buttonOne.addEventListener("click", getRandomSearch)

function randomNumberGenerator(){
    return Math.floor(Math.random() * (10) + 1);
}



function getRandomSearch(e){
    e.preventDefault();
    let id = randomNumberGenerator();
    let url = `http://localhost:3000/searches/${id}`

    fetch(url)
    .then((res) => res.json())
    .then(data => {
        let webLink = data.url;
        window.location.replace(webLink);
    })
}
