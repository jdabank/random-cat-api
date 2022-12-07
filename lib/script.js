const url = "https://api.thecatapi.com/v1/images/search";

const buttonForCat = document.querySelector(".randomButton");

const catImage = document.querySelector('.img')

buttonForCat.addEventListener('click', theClick)


function theClick() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
     console.log(data);
    })
    .catch((err) => console.log("oops something went wrong", err));
}

