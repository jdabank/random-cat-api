let url = 'http://api.thecatapi.com/v1/images/search'
let randomButton = document.querySelector('.randomButton')
let randomCatImage = document.querySelector('.randomCatImage')

// Part 1
// fetch(`${url}`)
// .then((res) => res.json())
// .then((data) => {
//     console.log(data)
// })


// Part 2
randomButton.addEventListener('click', handleClick)

function handleClick(e) {
    e.preventDefault()

    // const { randomCatImage } = e.target.elements;
    
    fetch(`${url}`)
    .then(res => res.json())
    .then((data) => {
        randomCatImage.src=`${data[0].url}`
    })
        // image.src = data.url;
    .catch((err) => console.log('This has failed', err))
    
}