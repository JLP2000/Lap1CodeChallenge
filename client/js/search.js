window.addEventListener("load", getResults)

let datalength

fetch("http://localhost:3000/searches")
        .then((res) => res.json())
        .then(data => {
            console.log(data.length)
            datalength = data.length;
        })


function getResults(e) {
    e.preventDefault();

    for(let i = 1; i <= datalength; i++){
        let url = `http://localhost:3000/searches/${i}`

        fetch(url)
        .then((res) => res.json())
        .then(data => {
            
            let searchResult = document.getElementById(`${i}`);
            let a = searchResult.querySelector("a")
            let h2 = searchResult.querySelector("h2")
            let h2a = h2.querySelector("a")
            let p = searchResult.querySelector("p")

            a.textContent = data.url;
            a.setAttribute("href", data.url);
            h2a.textContent = data.title;
            h2a.setAttribute("href", data.url);
            p.textContent = data.desc;

        })
    }
}