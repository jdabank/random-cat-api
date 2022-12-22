
const url='http://api.thecatapi.com/v1/images/search';
const getCat = document.querySelector(`.randomButton`);
const catPic = document.querySelector(`.randomCatImage`);

getCat.addEventListener('click', doClick)


function doClick(){
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        let randImage = document.querySelector(".randomCatImage");
        randImage.src = res[0].url;
    });
}




