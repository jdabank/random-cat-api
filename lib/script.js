


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

// const url = `https://api.thecatapi.com/v1/images/search`
// let header={
// "x-api-key":
// "live_c7NFwQNovYorkhRwoYbtV1ytRgM1c7I3KmWGi5ucgGsnk1aBvtmJfe4HDV36SJzd"}
// const randomButton= document.querySelector('.randomButton')
// const kittyIMG= document.querySelector('.categoryCatImage')
// const apiKey= "live_c7NFwQNovYorkhRwoYbtV1ytRgM1c7I3KmWGi5ucgGsnk1aBvtmJfe4HDV36SJzd"

// randomButton.addEventListener("click", function(){

//     fetch(url, {header}) 
//     .then((response) => response.json())
// .then((response) => { kittyIMG.src = `${response[0].url}`})
// })

// const url = `https://api.thecatapi.com/v1/images/search`

// const randomButton = document.querySelector('.randomButton')

// const kittyIMG = document.querySelector('.categoryCatImage')


// randomButton.addEventListener('click', function(){

//     fetch(url, {header}) 
//     .then((response) => response.json())
// .then((response) => { kittyIMG.src = `${response[0].url}`})

// const apiKey = 'live_c7NFwQNovYorkhRwoYbtV1ytRgM1c7I3KmWGi5ucgGsnk1aBvtmJfe4HDV36SJzd'
// let header = {
//     "x-api-key": 'live_c7NFwQNovYorkhRwoYbtV1ytRgM1c7I3KmWGi5ucgGsnk1aBvtmJfe4HDV36SJzd'
// }
// const url = `https://api.thecatapi.com/v1/images/search`
// const randomButton = document.querySelector('.randomButton')
// const kittyIMG = document.querySelector('.categoryCatImage')


// randomButton.addEventListener('click', function(){

//     fetch(url, {header}) 
//     .then((response) => response.json())
// .then((response) => { kittyIMG.src = `${response[0].url}`})

// })

// const apiKey = 'live_c7NFwQNovYorkhRwoYbtV1ytRgM1c7I3KmWGi5ucgGsnk1aBvtmJfe4HDV36SJzd'

// const url = `https://api.thecatapi.com/v1/images/search/?api_key=${live_c7NFwQNovYorkhRwoYbtV1ytRgM1c7I3KmWGi5ucgGsnk1aBvtmJfe4HDV36SJzd}`

// const randomButton = document.querySelector('.randomButton')

// const kittyIMG = document.querySelector('.categoryCatImage')


// randomButton.addEventListener('click', function(){

//     fetch(url) 
//     .then((response) => response.json())
// .then((response) => { kittyIMG.src = `${response[0].url}`})

// })

const url= "https://api.thecatapi.com/v1/images/search"
let header = {
   "x-api-key":
   "live_c7NFwQNovYorkhRwoYbtV1ytRgM1c7I3KmWGi5ucgGsnk1aBvtmJfe4HDV36SJzd"
}
const catButton = document.querySelector(`.randomButton`);
catButton.addEventListener('click', handleClick)
//click is just the name of it( it can be press or buttun etc)

function handleClick() {
fetch(url, {header})
    .then((res) => res.json())
    .then((res) => {
        let randImage = document.querySelector(".randomCatImage");
        randImage.src = res[0].url;
    });
}