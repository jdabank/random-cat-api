let catAPI = "https://api.thecatapi.com/v1/images/search"
let randomCatButton = document.querySelector(".randomButton");
let container = document.querySelector(".randomCatImage ");

// fetch(catAPI) returns a random image, and passes it to display random cat as (randomCat) in part 2
randomCatButton.addEventListener("click", displayRandomCat)
console.log(randomCatButton); 
//part2 - NOT WORKING 
async function displayRandomCat(){
    let request = await fetch(catAPI);
    const randomCat = await request.json();
    console.log(randomCat);
    const imageURL = randomCat[0].url;
    container.src = imageURL;
    console.log('hi');
}

