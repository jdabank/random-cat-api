// part one


const url = 'https://api.thecatapi.com/v1/images/search'
const randomButton = document.querySelector('.randomButton');
const randomContainer = document.querySelector('.randomCat');
const form = document.querySelector("form");

randomButton.addEventListener("click", randomKitty);

function randomKitty () {
    fetch(url)
        .then(response => {
            return response.json;
        })
        .then(data => {
          let randomImage = document.querySelector('.randomCatImage');
          randomImage.src = data[0].url;
        })
        .catch(error => {
            console.log("something went wrong", error)
        })
}


