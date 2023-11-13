const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameInput.addEventListener('input', function() {
  const inputText = nameInput.value.trim();
  nameOutput.textContent = inputText !== '' ? inputText : 'Anonymous';
});