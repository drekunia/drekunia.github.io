function handleSubmit(event) {
  event.preventDefault();

  var status = document.getElementById('my-form-status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      status.innerHTML = 'Sent!';
      Swal.fire('Thank you!', 'Thanks for your submission.', 'success');
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = 'An error has occurred.';
      Swal.fire(
        'Oops...',
        'There was a problem submitting your form.',
        'error'
      );
    });
}
