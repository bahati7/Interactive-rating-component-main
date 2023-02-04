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