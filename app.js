


const api_url="https://api.thecatapi.com/v1/images/search"



// Part 1:

//a.) Get the api to appear in console
// fetch(api_url).then(res=>{

//     console.log("We got it!", res)
//     return res.json();
// })



// Get the object to appear and make sure it is random each time
// Why does this work, I have no idea ?
// Why can't I do this twice? How to acess specific objects? 

// .then((data)=> {
//     console.log(data[0].url);
//     })




// Make button return API Get
function randoCat() {
    fetch(api_url).then(res=>{

        console.log("We got it!", res)
        return res.json();
    })
    // .then((data)=> {
    //     console.log("Hell yeah brother!  " + "" + data[0].url);
    //     })

    .then((data)=> {
        document.querySelector('img').src= data[0].url})}
