var firstName       = document.getElementById("firstName");
var lastName        = document.getElementById("lastName");
var mobileNumber    = document.getElementById("mobileNumber");
var password        = document.getElementById("password");
var day             = document.getElementById("daySelect").value;
var month           = document.getElementById("monthSelect").value;
var year            = document.getElementById("yearSelect");
var gender          = document.getElementsByName('inlineRadioOptions');

var fnameError      = document.getElementById('fnameError');
var lnameError      = document.getElementById('lnameError');
var mobileError     = document.getElementById('mobileError');
var passwordError   = document.getElementById('passwordError');
var dateError       = document.getElementById('dateError');
var genderError     = document.getElementById('genderError');

function required(){
    if(firstName.value.length == 0){
        fnameError.innerText = 'This field is required';
    }else{
        fnameError.innerText = '';
    }
    if(lastName.value.length == 0){
        lnameError.innerText = 'This field is required';
    }else{
        lnameError.innerText = '';
    }
    if(mobileNumber.value.length == 0){
        mobileError.innerText = 'This field is required';
    }else{
        mobileError.innerText = '';
    }
    if(password.value.length == 0){
        // console.log(passwordError.innerText = 'H');
        passwordError.innerText = 'This field is required';
    }else{
        passwordError.innerText = '';
    }
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}
function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
    


function getFirstName(input) {
    var message;

    if (input.value.length < 3 && input.value.length != 0) {
        message = "you must provide at least 3 characters";
    }
    // .. More Conditions

    return message;
}

function getLastName(input) {
    var message;

    if (input.value.length < 3 && input.value.length != 0) {
        message = "you must provide at least 3 characters";
    }

    // .. More Conditions

    return message;
}
function getMobilNumber(input) {
    var message;

    if(input.value.length != 0){
        if(input.value.length < 8){
            message = 'Input error !';
        }
        else if(isNumeric(input.value) && input.value.length != 11){
            message = 'You must enter your phone number';
        }else if(!validateEmail(input.value)){
            message = 'Check the email format';
        }
    }

    // .. More Conditions

    return message;
}

function getPassword(input) {
    var message;

    if (input.value.length < 8 && input.value.length != 0) {
        message = "You must provide at least 8 character";
    }

    // .. More Conditions

    return message
}

function calcYear(input){
    var message;
    
    var currentYear = new Date().getFullYear();

    if(currentYear - input.value < 18){
        message = "You must be greater than 18 years old";
    }

    return message;
    // currentYear = currentYear.getFullYear();
}


function selectGender(input){
    var message;

    var checked = false;
    
    input.forEach(element => {
        if(element.checked){
            checked = true;
        }
    })
    if(!checked){
        message = 'You must choose your gender';
    }
    return message;
}


function sendData() {

    selectGender(gender);

    required();
    
    // fnameError.innerHTML = '';
    if(getFirstName(firstName) !== undefined){
        let element = document.createElement('span');
        element.innerText = getFirstName(firstName);
        fnameError.appendChild(element);
    }
    if(getLastName(lastName) !== undefined){
        let element = document.createElement('span');
        element.innerText = getLastName(lastName);
        lnameError.appendChild(element);
    }
    if(getMobilNumber(mobileNumber) !== undefined){
        let element = document.createElement('span');
        element.innerText = getMobilNumber(mobileNumber);
        mobileError.appendChild(element); 
    }
    if(getPassword(password) !== undefined){
        let element = document.createElement('span');
        element.innerText = getPassword(password);
        passwordError.appendChild(element); 
    }
    dateError.innerHTML = '';
    if(calcYear(year) !== undefined){
        let element = document.createElement('span');
        element.innerText = calcYear(year);
        dateError.appendChild(element); 
    }

    genderError.innerHTML = '';
    if(selectGender(gender) !== undefined){
        let element = document.createElement('span');
        element.innerText = selectGender(gender);
        genderError.appendChild(element); 
    }

}