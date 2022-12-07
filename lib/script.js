const url = 'https://api.thecatapi.com/v1/images/search';
const randomButton = document.querySelector(".randomButton");
const randomCat = document.querySelector(".randomCat");


randomButton.addEventListener("click", handleClick);

function handleClick(e){
    e.preventDefault();

    fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => {
        displayCat(data);
    })
}

function displayCat(cat){
    const catPic = `
        <img src = ${cat[0].url}>
    `;

    randomCat.insertAdjacentHTML("beforeend", catPic);
}

