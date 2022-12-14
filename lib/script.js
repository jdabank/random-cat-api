// //https://github.com/jdabank/random-cat-api
// const url = "https://api.thecatapi.com/v1/images/search";
// let header={
// "x-api-key":
// "live_c7NFwQNovYorkhRwoYbtV1ytRgM1c7I3KmWGi5ucgGsnk1aBvtmJfe4HDV36SJzd"
// }
// const catButton = document.querySelector(`.randomButton`);
// // let randomButton= document.getElementId('randomButtonClick')
// let image= document.getElementById('image')

// const catImage= document.querySelector('.categoryCatImage')

// const
// function handleClick(){
//     fetch(url, {header})
//     .then((response) => response.json())
//     .then ((data) => {
//         let randImage = document.querySelector(".randomCatImage");
//         randImage.src = res[0].url;
//     });


// catButton.addEventListener('click', function(){
//     fetch(url,{header}) 
//   .then((response) => response.json())
//   .then((result) => {
//     console.log('Success:', result);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
// })
// })


// fetch(url,{header}) 
//   .then((response) => response.json())
//   .then((result) => {
//     console.log('Success:', result);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   }):

const url = "https://api.thecatapi.com/v1/images/search";
let header={
"x-api-key":
"live_c7NFwQNovYorkhRwoYbtV1ytRgM1c7I3KmWGi5ucgGsnk1aBvtmJfe4HDV36SJzd"}

fetch(url, header)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"))