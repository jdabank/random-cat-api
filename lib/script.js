const url = "https://api.thecatapi.com/v1/images/search"
let header = {
   "x-api-key":
   "live_7iW9kg7JGHYuvX4PBx5Zk3MUvX5qJMAYyaClXnmW66lgZEmbMqegvXdoLKhAjwZF"
}
const catButton = document.querySelector(`.randomButton`);
catButton.addEventListener('click', handleClick)

function handleClick() {
fetch(url, { header })
    .then((res) => res.json())
    .then((res) => {
        let randImage = document.querySelector(".randomCatImage");
        randImage.src = res[0].url;
    });
}