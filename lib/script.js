const apiKey = 'live_kP5CcKWDcyIUvIeZz7c8NgRuPT6HZT2pxDcRbgNvzSbKASbAxaNLVZPflqQXqvfk'

let header = {
    "x-api-key": 'live_kP5CcKWDcyIUvIeZz7c8NgRuPT6HZT2pxDcRbgNvzSbKASbAxaNLVZPflqQXqvfk'
}

const url = `https://api.thecatapi.com/v1/images/search`

const randomButton = document.querySelector('.randomButton')

const kittyIMG = document.querySelector('.categoryCatImage')


randomButton.addEventListener('click', function(){

    fetch(url, {header}) 
    .then((response) => response.json())
.then((response) => { kittyIMG.src = `${response[0].url}`})

})

