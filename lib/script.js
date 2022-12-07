let url = 'http://api.thecatapi.com/v1/images/search';
let randomButton = document.querySelector('.randomButton');
let image = document.querySelector('button');

// Part 1
fetch(`${url}`)
.then((res) => res.json())
.then((data) => {
    console.log(data)
})

// Part 2
// randomButton.addEventListener('click', generateCat)

// function generateCat(e) {
//     e.preventDefault();

//     const { randCatImg } = e.target.img;
    
//     fetch(`${url}/${randCatImg.src.value}`)
//     .then((res) => res.json())
//     .then((data) => {
//         displayCat(data);
//         // image.src = data.url;
//     })
// }

// function displayCat() {
//     const felines = `
//       <img src='${randCatImg.url} />
//     `;
  
//     container.insertAdjacentHTML("beforeend", felines);
//   }
