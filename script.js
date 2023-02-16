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
    
    var inputs = document.getElementsByTagName('input');
    var warnings = document.getElementsByClassName('error');
    while (warnings.length > 0) {
        warnings[0].parentNode.removeChild(warnings[0]);
    }

    // Loop through each input element
    for (var i = 0; i < inputs.length; i++) {
        // Check if the input element is required and if it's empty
        if (inputs[i].hasAttribute('required') && inputs[i].value === '' && inputs[i].id !== 'mm') {
            var warning = document.createElement('p');
            warning.innerHTML = 'Can\'t be blank';
            warning.classList.add('error');
            inputs[i].parentNode.insertBefore(warning, inputs[i].nextSibling);
            setTimeout(() => {
                warning.parentNode.removeChild(warning);
            }, 3000);
        }
    }
})  

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
    } 
    // else if(isNaN(e.target.value)) {
    //     numberAlert.textContent = 'Wrong format, numbers only';
    //     setTimeout(() => {
    //         numberAlert.remove();
    //     }, 3000);
    // } 
    else {
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