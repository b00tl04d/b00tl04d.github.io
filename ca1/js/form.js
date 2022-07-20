// Custom form JS script for setting the webpage position after form input validation is processed via the Constraint validation API

// Reference for reportValidity() : https://stackoverflow.com/questions/63491564/change-default-html-input-validation-message
// Reference for checkValidity() : https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/checkValidity
// Reference for scrolling to the top of the page: https://stackoverflow.com/questions/4210798/how-to-scroll-to-top-of-page-with-javascript-jquery
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation

function submitForm() {

    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var email = document.getElementById('email');
    var phoneNumber = document.getElementById('phone-number');
    var dateOfBirth = document.getElementById('dob-input');
    
    const form = document.getElementById('feedback');
    
    if (firstName.checkValidity() == false) {
        firstName.reportValidity();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    else if (lastName.checkValidity() == false) {
        lastName.reportValidity();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    else if (email.checkValidity() == false) {
        email.reportValidity();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    else if (phoneNumber.checkValidity() == false) {
        phoneNumber.reportValidity();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    } 
    else if (dateOfBirth.checkValidity() == false) {
        dateOfBirth.reportValidity();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    else {
        form.submit();
    }
    
    return false
}
