const modalBackground = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const modalExitButtons = document.querySelectorAll('.modal-exit-button');
const nameInput = document.querySelectorAll('.name');
const phoneNumberInput = document.querySelectorAll('.phone');
const emailInput = document.querySelectorAll('.email');
const submitButtons = document.querySelectorAll('.submit');
const modalSubmitButton = document.querySelector('.modal-submit-button');
const formSentModalBackground = document.querySelector('.form-sent-modal-background.none');
const formSentModal = document.querySelector('.form-sent-modal__container');
const navBarCareerButton = document.querySelector('#navbar-career-link');
const navBarDropdown = document.querySelector('.dropdown-menu__container.none');
const dropdownMenu = document.querySelector('.dropdown-menu__container');
const showAnswerButton = document.querySelectorAll('.show-answer');
const answerDiv = document.querySelectorAll('.q-and-a__answer.none');
const howItWorksButtons = document.querySelectorAll('.how-it-works__headline');
const howItWorksTexts = document.querySelectorAll('.how-it-works__text.none');
const hamburgerButton = document.querySelector('.menu-hamburger-button');
const navbarLinks = document.querySelector('.main-navbar__links-from-hamburger.none');
const hamburgerNavbarCareerButton = document.querySelector('.hamburger-navbar-career-link');
const hamburgerDropdownCareers = document.querySelector('.hamburger-dropdown-menu__container.none');
const closeCareersMenu = document.querySelector('.close-careers-menu.none');
let validInputsCount = 0;

let modalsBackgrounds = [modalBackground, formSentModalBackground];
for(let i=0; i<modalsBackgrounds.length; i++) {
    modalsBackgrounds[i].addEventListener('click', ()=> {
        modalBackground.classList.add('none');
        formSentModalBackground.classList.add('none');
    })
}

for(let i=0; i<modalExitButtons.length; i++) {
    modalExitButtons[i].addEventListener('click', ()=> {
        modalBackground.classList.add('none');
        formSentModalBackground.classList.add('none');
    })
}

modalContainers = [modal, formSentModal];
for(let i=0; i<modalContainers.length; i++) {
    modalContainers[i].addEventListener('click', (event)=> {
        event.stopPropagation();
    })
}

function  makeSubmitClickable(){
    modalSubmitButton.disabled=false;
    modalSubmitButton.addEventListener('click', (event)=> {
        event.preventDefault();
        modalBackground.classList.add('none');
        formSentModalBackground.classList.remove('none');
    })
    for(let i=0; i<submitButtons.length; i++) {
        submitButtons[i].disabled=false;
        submitButtons[i].addEventListener('click', (event)=> {
        event.preventDefault();
        formSentModalBackground.classList.remove('none');
    })}
}

navBarCareerButton.addEventListener('mouseover', ()=> {
    navBarDropdown.classList.remove('none');
})

navBarCareerButton.addEventListener('mouseout', ()=> {
    navBarDropdown.classList.add('none');
})

dropdownMenu.addEventListener('mouseover', ()=> {
    navBarDropdown.classList.remove('none');
})

dropdownMenu.addEventListener('mouseout', ()=> {
    navBarDropdown.classList.add('none');
})


for(let i=0; i<nameInput.length; i++) {
    nameInput[i].addEventListener('change', ()=> {
        let name = nameInput[i].value;
        if(name.length < 2) {
            nameInput[i].classList.add('not-valid');
            nameInput[i].value = 'נא להזין שם תקין'
            makeSubmitUnclickable();
            nameInput[i].addEventListener('focus', ()=> {
                nameInput[i].value = '';
            })
        }
        else{
            nameInput[i].classList.remove('not-valid');
            nameInput[i].classList.add('valid');
            validInputsCount++;
            if(validInputsCount>=3)
                makeSubmitClickable();
        }
    })
}

for(let i=0; i<phoneNumberInput.length; i++) {
    phoneNumberInput[i].addEventListener('change', ()=> {
        let phone = phoneNumberInput[i].value;
        if(phone.length !== 10) {
            phoneNumberInput[i].classList.add('not-valid');
            phoneNumberInput[i].value = 'נא להזין מספר טלפון תקין'
            makeSubmitUnclickable();
            phoneNumberInput[i].addEventListener('focus', ()=> {
                phoneNumberInput[i].value = '';
            })
        }
        else{
            phoneNumberInput[i].classList.remove('not-valid');
            phoneNumberInput[i].classList.add('valid');
            validInputsCount++;
            if(validInputsCount>=3)
                makeSubmitClickable();
        }
    })
}

for(let i=0; i<emailInput.length; i++) {
    emailInput[i].addEventListener('change', ()=> {
        let email = emailInput[i].value;
        if(!email.includes('@')) {
            emailInput[i].classList.add('not-valid');
            emailInput[i].value = 'נא להזין כתובת מייל תקינה'
            makeSubmitUnclickable();
            emailInput[i].addEventListener('focus', ()=> {
                emailInput[i].value = '';
            })
        }
        else{
            emailInput[i].classList.remove('not-valid');
            emailInput[i].classList.add('valid');
            validInputsCount++;
            if(validInputsCount>=3)
                makeSubmitClickable();
        }
    })
}

function  makeSubmitUnclickable(){
    modalSubmitButton.disabled=true;
    for(let i=0; i<submitButtons.length; i++) {
    submitButtons[i].disabled=true;
    }
}

for(let i=0; i<showAnswerButton.length; i++){
    showAnswerButton[i].addEventListener('click', (event)=> {
        event.preventDefault();
        if(answerDiv[i].classList.contains('none'))
            answerDiv[i].classList.remove('none');
        else
            answerDiv[i].classList.add('none');
    })
}

for(let i=0; i<howItWorksButtons.length; i++){
    howItWorksButtons[i].addEventListener('click', (event)=> {
        event.preventDefault();
        if(howItWorksTexts[i].classList.contains('none'))
        howItWorksTexts[i].classList.remove('none');
        else
        howItWorksTexts[i].classList.add('none');
    })
}

hamburgerButton.addEventListener('click', ()=> {
    navbarLinks.classList.remove('none'); 
    hamburgerButton.classList.add('none');
    closeCareersMenu.classList.remove('none');    
})

closeCareersMenu.addEventListener('click', ()=> {
    navbarLinks.classList.add('none'); 
    hamburgerButton.classList.remove('none'); 
    closeCareersMenu.classList.add('none');
})

hamburgerNavbarCareerButton.addEventListener('click', ()=> {
    if(hamburgerDropdownCareers.classList.contains('none'))
        hamburgerDropdownCareers.classList.remove('none');
    else
        hamburgerDropdownCareers.classList.add('none');
})

