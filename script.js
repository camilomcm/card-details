let inputName = document.querySelector('#input-name');
let cardOwner = document.querySelector('#card-owner');
let inputNumber = document.querySelector('#input-number');
let cardNumber = document.querySelector('#card-number');

let inputMonth = document.querySelector('#mm');
let month = document.querySelector('#month');

let inputYear = document.querySelector('#yy');
let year = document.querySelector('#year');

let inputCVC = document.querySelector('#cvc');
let cvc = document.querySelector('#verification-code');

let btnConfirm = document.querySelector('#confirm');
let form = document.querySelector('form');

btnConfirm.addEventListener('click', e => {
    e.preventDefault();

    let pBlank = document.createElement('p');
    pBlank.textContent = 'Cant be blank';
    pBlank.classList.add('error');
    const errors = document.querySelectorAll('.error');

    // if(inputName.textContent === '') { 
    //     if(errors.length === 0) {
    //         form.insertBefore(pBlank,document.querySelector('#card-label'));
    //         // setTimeout(() => {
    //         //     pBlank.remove();
    //         // }, 3000);
    //     }
    // } else {
    //     console.log('Niceeee')
    // }

    console.log(inputName.innerHTML)
})

let numberAlert = document.querySelector('#number-alert');


inputName.addEventListener('input', (e) => {
    e.preventDefault();
    if(e.target.value === '') {
        cardOwner.textContent = 'Jane Appleseed';
    } else {
        cardOwner.textContent = e.target.value;
    }    
});

inputNumber.addEventListener('input', (e) => {
    e.preventDefault();
    if(e.target.value === '') {
        cardNumber.textContent = '0000 0000 0000 0000';
    } else if(isNaN(e.target.value)) {
        numberAlert.textContent = 'Wrong format, numbers only';
    } else {
        cardNumber.textContent = e.target.value;
    }    
});

inputMonth.addEventListener('input', (e) => {
    e.preventDefault();
    if(e.target.value === '') {
        month.textContent = '00';
    } else {
        month.textContent = e.target.value;
    }    
});

inputYear.addEventListener('input', (e) => {
    e.preventDefault();
    if(e.target.value === '') {
        year.textContent = '00';
    } else {
        year.textContent = e.target.value;
    }    
});

inputCVC.addEventListener('input', (e) => {
    e.preventDefault();
    if(e.target.value === '') {
        cvc.textContent = '000';
    } else {
        cvc.textContent = e.target.value;
    }    
});