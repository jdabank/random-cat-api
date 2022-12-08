const cat= "http://127.0.0.1:5500/"
const url = "https://api.thecatapi.com/v1/images/search"

//Part 1.)

//a.)
fetch(cat)
.then(result => {
    console.log(" Cool! Here's the cat API", result)
})
.catch(error=> {
    console.log("No cats")
})


fetch(url).then(res => {
    console.log("Nice! Here's a Random cat", res)
    return res.json();
})

.then((data) => {
    console.log(data.results)
})

// .catch(err=> {
//     console.log("No good")
// })


