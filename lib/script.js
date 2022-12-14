const apiKey = 'live_kP5CcKWDcyIUvIeZz7c8NgRuPT6HZT2pxDcRbgNvzSbKASbAxaNLVZPflqQXqvfk'

const url = `https://api.thecatapi.com/v1/images/search/?api_key=${apiKey}`

const randomButton = document.querySelector('.randomButton')

const kittyIMG = document.querySelector('.categoryCatImage')


randomButton.addEventListener('click', function(){

    fetch(url) 
    .then((response) => response.json())
.then((response) => { kittyIMG.src = `${response[0].url}`})

})

