//Initialize variables for HTML
const url = "https://api.thecatapi.com/v1/images/search";
const btnRand = document.querySelector('.randomButton');
const divCat = document.querySelector('.categoryCat')

//fetch() will return after the other instances have completed
const yarnBall = (e) => {
  // Prevents web page from reloading.
  e.preventDefault(); 
  
  fetch(url)
  //pulls the inforamtion, parameter is a function
  .then(res => {
    //returns to the next .then statement
    return res.json(); 
  }) 
  .then((data) => {
    //runs displayCat function with data from api
    displayCat(data)
    console.log(data)
  })
  //error handling
  .catch(err => console.log('Something went wrong', err));
}  

//Function for displaying cat pic
function displayCat(catPic) {
  //declare HTML elements in a string within a variable
  const catPicHTML = `
  <img src="${catPic[0].url}" alt="Cat Pic">
  `;
  //removes existing cat picture
  while (divCat.childNodes.length > 0) {
    divCat.removeChild(divCat.firstChild)
  }
  //inserts HTML block above with the HTML elements and information
  divCat.insertAdjacentHTML("beforeend", catPicHTML);
}


//Get image upon click for random cat image
btnRand.addEventListener('click', yarnBall)
