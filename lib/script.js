
// The Fetch()_ request
const url = ' https://api.thecatapi.com/v1/images/search'
console.log(url)


fetch({url})
    .then(response => console.log(response))

