const url = "https://api.thecatapi.com/v1/images/search"

const button = document.querySelector(".randomButton")

button.addEventListener("click", handleClick)

function handleClick() {
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        //console.log(data[0].url);
        document.querySelector(".randomCat").innerHTML = `<img src="${data[0].url}" class="randomCatImage">`
    })
    .catch((err) => console.log("oops something went wrong", err));
}