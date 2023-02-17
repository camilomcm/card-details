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
    }  else {
        cardNumber.textContent = e.target.value;
        validateCardNumber(e.target.value);
    }    
});

function validateCardNumber(number) {
    let regEx = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
    if(number.match(regEx)) {
        console.log('Niceeee')
    } else {
        console.log('Enter a valid number');
    }
}

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

btnConfirm.addEventListener('click', e => {
    e.preventDefault();
    
    let inputs = document.getElementsByTagName('input');
    let warning;

    let warnings = document.querySelectorAll('.error');
    for (let i = 0; i < warnings.length; i++) {
        warnings[i].remove();
        
    }

    // Loop through each input element
    for (let i = 0; i < inputs.length; i++) {
        // Check if the input element is required and if it's empty
        if (inputs[i].hasAttribute('required') && inputs[i].value === '' && inputs[i].id !== 'mm') {
            let warning = document.createElement('p');
            warning.textContent = 'Can\'t be blank';
            warning.classList.add('error');
            inputs[i].parentNode.insertBefore(warning, inputs[i].nextSibling);
            setTimeout(function() {
                warning.remove();
            }, 3000);
        }
    }
});