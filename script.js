let inputName = document.querySelector('#input-name');
let cardOwner = document.querySelector('#card-owner');

let inputNumber = document.querySelector('#input-number');
let cardNumber = document.querySelector('#card-number');

let numberAlert = document.querySelector('#number-alert');


inputName.addEventListener('input', (e) => {
    e.preventDefault();
    if(e.target.value === '') {
        cardOwner.textContent = 'Jane Appleseed';
    } else {
        cardOwner.textContent = e.target.value;
    }    
})

inputNumber.addEventListener('input', (e) => {
    e.preventDefault();
    if(e.target.value === '') {
        cardNumber.textContent = '0000 0000 0000 0000';
    } else if(isNaN(e.target.value)) {
        numberAlert.textContent = 'Wrong format, numbers only';
    } else {
        cardNumber.textContent = e.target.value;
    }    
})