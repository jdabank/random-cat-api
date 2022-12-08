let catAPI = "https://api.thecatapi.com/v1/images/search"
let randomCatButton = document.querySelector(".randomButton");
let container = document.querySelector(".randomCatImage ");

// fetch(catAPI) returns a random image, and passes it to display random cat as (randomCat) in part 2
randomCatButton.addEventListener("click", displayRandomCat)
console.log(randomCatButton); 
//part2 -  WORKING - walked through via Noah
async function displayRandomCat(){
    //using await because the fetch is not instantaneous nor necessarily fast. It could take a while:
    let request = await fetch(catAPI);
    //using .json() to change the data being sent to a format js can interact with. must still use away as the original fetch may not be complete:
    const randomCat = await request.json();
    console.log(randomCat);
    //accessing the image object in an array sent by the server: 
    const imageURL = randomCat[0].url;
    container.src = imageURL;
    console.log('hi');
}

