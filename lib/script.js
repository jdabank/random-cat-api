url = "https://api.thecatapi.com/v1/images/search";

const randomCat = document.querySelector(".randomButton");
const randomCatImage = document.querySelector(".randomCatImage");

// const randomButton = image()
randomCat.addEventListener("click", image);

function image() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      randomCatImage.src = data[0].url;
      console.log(data[0]);
    })
    .catch((err) => console.log("wrong"));
}
