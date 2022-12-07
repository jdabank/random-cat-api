const url = "https://api.thecatapi.com/v1/images/search"

let button = document.querySelector(".randomButton")
let image = document.querySelector(".randomCatImage")

button.addEventListener("click", poop)


function poop() {
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data[0])
            console.log(data[0].url)
            image.src = data[0].url
        })
        .catch(err => {
            console.log(err)
        })
}  

