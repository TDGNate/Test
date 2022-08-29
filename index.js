window.onload = function () {
  const btn = document.getElementById('send')
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_k2icfbo', 'template_crd40yf', this)
        .then(() => {
          btn.value = 'Sending...';
          console.log('SUCCESS!');
        }, (error) => {
          btn.value = 'Send';
          console.log('FAILED...', error);
        },
      )
    });
};