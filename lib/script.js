url = 'https://api.thecatapi.com/v1/images/search'

randomButton = document.querySelector('.randomButton')
imageDisplay = document.querySelector('img')

randomButton.addEventListener('click', getImage)

function getImage() {
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => {
        imageDisplay.src = data[0].url
        console.log(data[0])
    })
    .catch(error => {
        console.error(error)
    })

    }