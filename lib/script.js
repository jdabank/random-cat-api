const randoLink = 'https://api.thecatapi.com/v1/images/search?api_key=e6f2adcdc125aef38c14ca0be4465d6a75b789e6.rtfd';
const randButton = document.getElementById('randomButton');

randButton.addEventListener('click', randomCat);


function randomCat () {
fetch(randoLink)
.then (res=>res.json())
.then( res => displayCat(res[0].url))
.catch(err => console.log('unsuccessful', err));
}

function displayCat(imgurl){
    console.log(typeof(imgurl[0].url));
   document.getElementById('randomCatImage').src=imgurl;
} 

//function sortedRandomCat(){

//}