let url = 'http://api.thecatapi.com/v1/images/search'
// let randomButton = document.querySelector('.randomButton')
let randomCatImage = document.querySelector('.randomCatImage')
let input = document.querySelector('.input')
let searchButton = document.querySelector('.searchButton')
let form = document.querySelector('form')

// Part 1
// fetch(`${url}`)
// .then((res) => res.json())
// .then((data) => {
//     console.log(data)
// })


// Part 2
// randomButton.addEventListener('click', handleClick)

// function handleClick(e) {
//     e.preventDefault()
    
//     fetch(`${url}`)
//     .then(res => res.json())
//     .then((data) => {
//         randomCatImage.src=`${data[0].url}`
//     })
//     .catch((err) => console.log('This has failed', err))
    
// }


// Bonus
// console.log(input.value)



form.addEventListener('submit', clickHandler)

function clickHandler(e2) {
    
    e2.preventDefault()

    let categoryURL = `http://api.thecatapi.com/v1/images/search?api_key=live_M0df7MuutgzH6TbVTYJXtyAiYFTPIrIjuW45y8IA6g5E9gjX7jhVCXjLWIsbPuWd&category_ids=${input.value}`

    fetch(`${categoryURL}`)
    .then (res2 => res2.json())
    .then ((data2) => {
        randomCatImage.src=`${data2[0].url}`
    })
    .catch((err) => console.log('This too hath failed', err))
}
