const view = {
  url: "https://api.thecatapi.com/v1/images/search",
  randomButton: document.querySelector(".randomButton"),
  randomCatImage: document.querySelector(".randomCatImage"),
  form: document.querySelector("form"),
  input: document.querySelector(".input"),
  searchButton: document.querySelector(".searchButton"),
  categoryCatImage: document.querySelector(".categoryCatImage"),
};

view.randomButton.addEventListener("click", showCat);
function showCat() {
  fetch(`${view.url}`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      console.log(result[0]);
      view.randomCatImage.src = result[0].url;
    })
    .catch((err) => console.log(err));
}

view.form.addEventListener("submit", categoryCat);

// function categoryCat(e) {
//   e.preventDefault();
//   console.log(e);
//   const { id } = e.target.elements;
//   console.log(`ID: ${id.value}`);
//   //geting category_id

//   let category_ids = id.value;
//   let url = `${view.url}?category_ids=${category_ids}`;
//   console.log(url);

//   fetch(url)
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result);
//       console.log(result[0]);
//       view.categoryCatImage.src = result[0].url;
//     });
// }

function categoryCat(e) {
  e.preventDefault();
  console.log(e);
  const { id } = e.target.elements;
  console.log(`ID: ${id.value}`);
  //geting category_id

  let category_ids = id.value;
  let url = `${view.url}?category_ids=${category_ids}`;

  if (category_ids === "") {
    url = `${view.url}`;
    //Console.log https://api.thecatapi.com/v1/images/search
  }
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      console.log(result[0]);
      view.categoryCatImage.src = result[0].url;
    });
}
