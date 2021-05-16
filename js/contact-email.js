const re =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateForm() {
  event.preventDefault();

  var formRequired = document.querySelectorAll('[required]'),
    email = document.getElementById('email'),
    button = document.getElementById('submit-email'),
    emailValid = re.test(email.value) && email.value.includes('.'),
    buttonText = '',
    status = document.getElementById('email-form-status');

  if (emailValid) {
    email.setCustomValidity('');
    email.style.borderColor = 'success';
  } else {
    email.setCustomValidity('invalid');
    email.style.borderColor = 'danger';
  }

  formRequired.forEach((element) => {
    if (element.value === '') {
      element.setCustomValidity('invalid');
    } else {
      element.setCustomValidity('');
    }
  });

  formRequired.forEach((element) => {
    if (element.checkValidity() && emailValid) {
      button.disabled = false;
      buttonText = 'Send';
    } else {
      button.disabled = true;
      buttonText = 'Fill in';
    }
  });

  button.innerHTML = buttonText;
  status.innerHTML = '';
}

function handleSubmit() {
  event.preventDefault();

  var status = document.getElementById('email-form-status'),
    form = document.getElementById('email-form'),
    formRequired = document.querySelectorAll('[required]'),
    formBool = true,
    email = document.getElementById('email').value,
    emailValid = re.test(email) && email.includes('.'),
    data = new FormData(form),
    button = document.getElementById('submit-email');

  formRequired.forEach((element) => {
    if (element.value === '') {
      formBool = false;
    }
  });
  
  if (formBool) {
    if (emailValid) {
      fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      }).then((response) => {
        if (response.status !== 200) {
          status.innerHTML = '<i>An error has occurred</i>';
          Swal.fire(
            'Oops...',
            "There was a problem submitting your form<br>Please send your email to <a href='mailto:drekunia@gmail.com'>drekunia@gmail.com</a>",
            'error'
          );
        } else {
          status.innerHTML = '<i>Sent!</i>';
          Swal.fire('Thank you!', 'Thanks for your submission', 'success');
          form.reset();
          button.disabled = true;
          button.innerHTML = 'Done';
        }
      });
    } else {
      status.innerHTML = '<i>Invalid email address</i>';
      Swal.fire(
        'Oops...',
        "You've entered an invalid email address<br>Please make sure it's correct",
        'error'
      );
    }
  } else {
    status.innerHTML = '<i>All fields are required</i>';
    Swal.fire(
      'Oops...',
      'All fields are required<br>Please make sure they are filled in correctly',
      'error'
    );
  }
}
