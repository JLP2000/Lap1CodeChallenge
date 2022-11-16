const buttonOne = document.getElementById("ten")
addEventListener("submit", getRandomSearch)

function randomNumberGenerator(){
    return Math.floor(Math.random() * (10 - 1 + 1) + 1);
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
