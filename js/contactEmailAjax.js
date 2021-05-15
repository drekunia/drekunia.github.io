function handleSubmit() {
  event.preventDefault();

  var status = document.getElementById('my-form-status');
  let form = document.getElementById('email-form');
  var data = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => {
    if (response.status !== 200) {
      status.innerHTML = 'An error has occurred.';
      Swal.fire(
        'Oops...',
        "There was a problem submitting your form.<br>Please send your email to <a href='mailto:drekunia@gmail.com'>drekunia@gmail.com</a>.",
        'error'
      );
    } else {
      status.innerHTML = 'Sent!';
      Swal.fire('Thank you!', 'Thanks for your submission.', 'success');
      form.reset();
    }
  });
}
