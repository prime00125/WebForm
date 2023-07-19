const inputElements = document.querySelectorAll('input');
const errorElements = document.querySelectorAll('.inputError');

inputElements.forEach(function(inputElement, index) {
  inputElement.addEventListener('blur', function() {
    const errorElement = errorElements[index];
    if (inputElement.value.trim() === '') {
      showError(inputElement, errorElement);
    } else {
      hideError(errorElement);
    }
  });
});

function showError(inputElement, errorElement) {
  const errorMessage = 'Please complete this required field';
  errorElement.textContent = errorMessage;
  errorElement.style.display = 'inline';
}

function hideError(errorElement) {
  errorElement.style.display = 'none';
}
