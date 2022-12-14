const url= "https://api.thecatapi.com/v1/images/search"
let header = {
   "x-api-key":
   "live_c7NFwQNovYorkhRwoYbtV1ytRgM1c7I3KmWGi5ucgGsnk1aBvtmJfe4HDV36SJzd"
}
const catButton = document.querySelector(`.randomButton`);
catButton.addEventListener('click', handleClick)


function handleClick() {
fetch(url, {header})
    .then((res) => res.json())
    .then((res) => {
        let randImage = document.querySelector(".randomCatImage");
        randImage.src = res[0].url;
    });
}











