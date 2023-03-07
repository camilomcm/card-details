# Frontend Mentor - Interactive card details form solution

This is my solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [solution - repository](https://github.com/camilomcm/card-details)
- Live Site URL: [Add live site URL here](https://camilomcm.github.io/card-details/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

This is my first challenge using '(vanilla) JavaScript', it took me some time and this is the result. The main concept I reinforced was the inputs form validation with different conditions, showing the corresponding warnings. The latter I made it with the next code snippet:

```js
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].hasAttribute('required') && inputs[i].value === '' && inputs[i].id !== 'mm') {
    let warning = document.createElement('p');
    warning.textContent = 'Can\'t be blank';
    warning.classList.add('error');
    inputs[i].parentNode.insertBefore(warning, inputs[i].nextSibling);
    setTimeout(function() {
        warning.remove();
    }, 3000);
  }
};
```

### Useful resources

- [JavaScript](https://developer.mozilla.org/es/) - One the main sites documenting web technologies, including CSS, HTML, and JavaScript.
- [Differente questions](https://stackoverflow.com/) - It's stackoverflow, you know what the deal is :grin:.

## Author

- Website - [Camilo Martinez](https://camilomcm.github.io/portfolio/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/camilomcm)