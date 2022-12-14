//https://github.com/jdabank/random-cat-api
const url = "https://api.thecatapi.com/v1/images/search";
let header={
"x-api-key":
"live_c7NFwQNovYorkhRwoYbtV1ytRgM1c7I3KmWGi5ucgGsnk1aBvtmJfe4HDV36SJzd"
}
const catButton = document.querySelector(`.randomButton`);
// catButton.addEventListener('click', handleClick)

const catImage= document.querySelector('.categoryCatImage')

// const
// function handleClick(){
//     fetch(url, {header})
//     .then((response) => response.json())
//     .then ((data) => {
//         let randImage = document.querySelector(".randomCatImage");
//         randImage.src = res[0].url;
//     });
fetch(url,{header}) 
  .then((response) => response.json())
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
