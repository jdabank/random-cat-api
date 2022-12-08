url = 'https://api.thecatapi.com/v1/images/search'

randomButton = document.querySelector('.randomButton')
imageDisplay = document.querySelector('img')
randomButton.addEventListener('click', getImage)


categoryUrl = 'https://api.thecatapi.com/v1/images/search?category_ids='

inputBox = document.querySelector('.input')
searchButton = document.querySelector('.searchButton')
searchButton.addEventListener('click', getImgByCategory)

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

function getImgByCategory(input) {
    input.preventDefault()
    fetch(categoryUrl + inputBox.value.toString())
        .then(response => {
            return response.json()
        })
        .then(data => {
            imageDisplay.src = data[0].url
        })
}