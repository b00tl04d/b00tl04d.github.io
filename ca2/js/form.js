// Form JS script for setting the webpage position after form input validation is processed via the Constraint validation API

// Using Bootstrap 5.2 Validation 
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        document.body.scrollTop = document.documentElement.scrollTop = 165;
      }
    else {
        alert("Thank you for giving your feedback! I hope you enjoyed browsing my website!");
        form.submit();
    }

      form.classList.add('was-validated')
    }, false)
  })
})()
