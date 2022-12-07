const url = `https://api.thecatapi.com/v1/images/search`;

let header = {
    'x-api-key':'live_MWhL6d9uLe1SLmWjK7AELzKHa6cXS2aR1rX0GWNmWQFAai1IQo1eumVnhYG7RdHf'
}

const catButton = document.querySelector(`.randomButton`);

catButton.addEventListener('click', handleClick)
// const container = document.

function handleClick() {
fetch(url, { header })
    .then((res) => res.json())
    .then((res) => {
        let randImage = document.querySelector(".randomCatImage");
        randImage.src = res[0].url;
    });
}



// function displayData(data){}

// function displayCat(url, ) {
    

// }