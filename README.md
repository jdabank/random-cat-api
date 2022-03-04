[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Random Cat API

Now that you've worked in APIs, learn how to comb through an API's
documentation! By reading about what an API can do and how to use it, you'll be
able to add amazing features and functionality to your projects and
applications.

## Prerequisites

- DOM & Events
- APIs & AJAX

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
3. Fulfill the listed requirements.

Starter code is available in [`lib/`](lib/). You are required to turn in your
submission by making a pull request on the original repository.

## Requirements

### Part 1

First, use `fetch()` to make a GET request to the Cat API and console log the
response object.

- Navigate to the [Cat API Documentation](https://docs.thecatapi.com/) and read
  through the documentation.
- In `script.js`, use `fetch()` and the "Get a Random Kitty" URL to make a GET
  request and console log the response object.

> How will you know if your request was successful?

### Part 2

Next, use the Cat API to display an image of a random cat every time the user
clicks a button! You will add functionality to the Random Cat button that has
been provided for you.

- Add functionality so that when the Random Cat button is clicked, an image of a
  random cat appears!

### Part 3

Finally, you will add a search feature to the form in the starter code. To
utilize this API's search functionality, you will need to request and use an API
key. The key will go in a fetch object called headers. Check out the
[fetch documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
to learn more about this!

You will need to give your fetch function a second parameter called `headers`,
which will be an object that takes the key:value pair
`'x-api-key': 'INSERT YOUR API KEY HERE'`. It will look something like this:

```
fetch('www.randomURL.com', {
    headers: {
        'x-api-key': 'INSERT YOUR API KEY HERE'
    }
})
```

Adding the API key allows you to utilize all that the Cat API has to offer!

- Go to the [Cat API web site](https://thecatapi.com/) and request an API key by
  clicking SIGN UP FOR FREE. The key will be emailed to you right away.
- In the email, click API DOCUMENTATION and read through it to learn how to use
  the Cat API to its fullest capacity.
- Add functionality so that when a user enters a category's ID number into the
  input field, a random cat from that category appears!

### Bonus

When a user enters the name of the category into the input field, a random cat
from that category appears!

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
