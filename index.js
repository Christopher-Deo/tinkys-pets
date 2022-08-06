// variables for animal adoption buttons

let adoptCountText = document.querySelector("#adopt-count");

let georgeBtn = document.querySelector("#george-btn");

let tankBtn = document.querySelector("#tank-btn");

// let buddyBtn = document.querySelector("#buddy-btn");

let chipsBtn = document.querySelector("#chips-btn");

let adoptBtn = document.querySelector('.adopt-btn')

let counter = 0;

// functions for adoption counter

function addToAdoptList(){
    counter += 1;
    if(counter === 1){
adoptCountText.textContent = counter + " Pet"
    } else {
      adoptCountText.textContent = counter + " Pets"
    }
}
georgeBtn.addEventListener("click", addToAdoptList);

// tankBtn.addEventListener("click", addToAdoptList);

// buddyBtn.addEventListener("click", addToAdoptList);

chipsBtn.addEventListener("click", addToAdoptList);

tankBtn.addEventListener("click", addToAdoptList);


// variables for add to cart buttons in each section

let favorites = document.querySelector("#favorites-btn");
let food = document.querySelector("#foods-btn");
let training = document.querySelector("#tng-btn");
let grooming = document.querySelector("#grooming-btn");
let cartCountText = document.querySelector("#cart-count");
let cart = 0;
// functions for cart counter

function addToCart(){
    cart += 1;
    if(cart === 1){
        cartCountText.textContent = cart + "item"
    } else {
        cartCountText = cart + "items";
    }
    }

favorites.addEventListener('click', addToCart);
food.addEventListener('click', addToCart);
training.addEventListener('click', addToCart);
grooming.addEventListener('click', addToCart);


// variables for footer and email handling

let footer = document.querySelector("footer");
let signUpForm = document.querySelector(".email-sign-up");
let input = document.querySelector("input");
let signUpBtn = document.querySelector("#sign-up");

// function to add email field and button functionality

function emailSubmitHandler(){
    var confirmationMsg = document.createElement("p");
    confirmationMsg.textContent = "Thank you for signing up " + input.value;
    signUpForm.remove();
    footer.appendChild(confirmationMsg);
  }
  
  signUpBtn.addEventListener("click", emailSubmitHandler);