const randoLink = 'https://api.thecatapi.com/v1/images/search?api_key=e6f2adcdc125aef38c14ca0be4465d6a75b789e6.rtfd';
const sortedLink = 'https://api.thecatapi.com/v1/images/search?breed_ids=beng';
const sortID = 'https://api.thecatapi.com/v1/breeds';
const randButton = document.getElementById('randomButton');
const sortedRandomButton = document.getElementById('searchButton');
const inputFeild = document.getElementById('input');
let category=[];    //to store whatever is input in the inputfeild
let idCode=[];      //to store the id's in an array
let catType=[];     //to store category names
let idVar;          //what will be added to the URL for sort function to work 

randButton.addEventListener('click', randomCat);
//sortedRandomButton = document.addEventListener('click', sortedRandomCat)

// sortedRandomButton.addEventListener('click',sortedRandomCat);


//fetches random-cat-api link for standard random output.
function randomCat () {
fetch(randoLink)
.then (res=>res.json())
.then( res => displayCat(res[0].url))
.catch(err => console.log('unsuccessful', err));
}


//Sets an <img src> to the recieved URL
function displayCat(imgurl){
    console.log(typeof(imgurl[0].url));
   document.getElementById('randomCatImage').src=imgurl;
} 


//what will return the random categorized image
// function sortedRandomCat(){     
// fetch(sortedLink)
// .then(thing=>console.log("success", thing.json()))
// .catch("somethings wrong");
// }


//fetches all picture attributes from api. used to creat an array of id codes.
function infoDump(){
    fetch(sortID)
    .then((thang => thang.json()))
    .then(thang =>makeIDarray(thang))
    .catch(console.log("unsuccessful"));
}


infoDump();


//creats an array of id codes used to select the id code for the categories.
function makeIDarray(something){
     for(let i=0; i<67; i++){
        //console.log(something[i].id)
        idCode.push(something[i].id);
        
    }   
        console.log(idCode);
        return idCode;
}


//fetches all picture attributes from api. used to create an array of category names.
function getCategoryArray(){

    fetch(sortID)
    .then((thangs => thangs.json()))
    .then(thangs =>makeCategoryArray(thangs))
    .catch(console.log("unsuccessful"));

}


//creates an array of category names. will be used to compare category input to select appropriate id codes.
function makeCategoryArray(somethang){

    for(let i=0; i<67; i++){
       //console.log(something[i].name)
       catType.push(somethang[i].name);
       
   }   

   console.log(catType);
   return catType;

}
getCategoryArray();