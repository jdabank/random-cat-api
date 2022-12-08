const form = document.querySelector('form')
const url = 'https://api.thecatapi.com/v1/images/search'
const randomButton = document.querySelector('.randomButton')

let header = {
    "x-api-key": 'live_kP5CcKWDcyIUvIeZz7c8NgRuPT6HZT2pxDcRbgNvzSbKASbAxaNLVZPflqQXqvfk'
}
function handleClick(){
    fetch(url, { header }) 
    .then((res) => res.json())
    .then((res) => {
        let ranImage = document.querySelector('randomCatImage');
        ranImage.src = res[0].url
    })
}

randomButton.addEventListener("click", handleClick)


