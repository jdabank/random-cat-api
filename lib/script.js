const url = "https://api.thecatapi.com/v1/images/search";

const buttonForCat = document.querySelector(".randomButton");

const catImage = document.querySelector('.randomCat')

buttonForCat.addEventListener('click', theClick)


function theClick() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data[0]);
        catImage.innerHTML = `<img src="${data[0].url}" class="randomCatImage">`
    })
    .catch((err) => console.log("oops something went wrong"));
}
