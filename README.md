# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
    - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- Solution URL: https://github.com/bahati7/Interactive-rating-component-main
- Live Site URL: https://interactive-rating-component-main-sable.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript


### What I learned

In this challenge in learned queryselector in Js


```js
let card1 = document.querySelector(".card");
let cardRresult = document.querySelector(".card-result");
let spanRating = document.querySelector("#selected-rating");
let btn = document.querySelector("#submit");

btn.addEventListener('click', ()=>{
    const rating = document.querySelector("input[name=radio]:checked").value;
    card1.style.display ="none";
    cardRresult.style.display ="block";
    spanRating.innerText = rating;
})
}
```



## Author

Website - https://bahatiphilemon.netlify.app/
Frontend Mentor - https://www.frontendmentor.io/profile/bahati7
Twitter - https://twitter.com/PhilemonBahati


## Acknowledgments

Thank you to Frontend Mentor team - https://www.frontendmentor.io/
