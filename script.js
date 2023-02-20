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

let result = document.querySelector('#result');
result.style.display = 'none';

let formContainer = document.querySelector('#form-container');
let newForm = document.querySelector('#continue');

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
    } else {
        cardNumber.textContent = e.target.value;
    }    
});

inputNumber.addEventListener('blur', e => {
    e.preventDefault();
    let numberPattern = /^\d+\s\d+\s\d+\s\d{4}$/;
    if(!numberPattern.test(inputNumber.value)) {
        let warning = document.createElement('p');
        warning.textContent = 'Wrong format, numbers only';
        warning.classList.add('error');

        const error = document.querySelectorAll('.error');
        if(error.length === 0) {
            inputNumber.parentNode.insertBefore(warning, inputNumber.nextSibling);
        }

        setTimeout(function() {
            warning.remove();
        }, 5000);
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

btnConfirm.addEventListener('click', e => {
    e.preventDefault();
    
    let inputs = document.getElementsByTagName('input');
    let warning;
    let allInputsHaveValues = true;

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
    };

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
          allInputsHaveValues = false;
          break;
        }
    }
      
    if (allInputsHaveValues) {
        formContainer.style.display = 'none';
        result.style.display = 'flex';
    }
});

newForm.addEventListener('click', e => {
    e.preventDefault()
    location.reload();
})