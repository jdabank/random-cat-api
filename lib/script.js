const url = "https://api.thecatapi.com/v1/images/search";
const btnRand = document.querySelector('.randomButton');
const reset = document.querySelector('.randomButton');
const divCat = document.querySelector('.categoryCat')

const yarnBall = (e) => {
  e.preventDefault(); 

  fetch(url)
  .then(res => {
    return res.json(); 
  }) 
  .then((data) => {
    displayCat(data)
    console.log(data)
  })

  .catch(err => console.log('oops', err));
}  

function displayCat(catPic) {
  const catPicHTML = `
  <img src="${catPic[0].url}" alt="Cat Pic">
  `;
  while (divCat.childNodes.length > 0) {
    divCat.removeChild(divCat.firstChild)
  }
  divCat.insertAdjacentHTML("beforeend", catPicHTML);
}

btnRand.addEventListener('click', yarnBall)