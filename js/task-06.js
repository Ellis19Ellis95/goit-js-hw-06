const validationInput = document.getElementById('validation-input');
validationInput.addEventListener('blur', () => {
    const expectedLength = parseInt(validationInput.getAttribute('data-length'), 10);
    const inputLength = validationInput.value.length;
    if (inputLength === expectedLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
  }
});