const form = document.getElementById('signup-form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (fnameValue === '') {
    setError(fname, 'First name is required');
  } else {
    setSuccess(fname);
  }

  if (lnameValue === '') {
    setError(lname, 'Last name is required');
  } else {
    setSuccess(lname);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Invalid email');
  } else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === '') {
    setError(confirmPassword, 'Please confirm your password');
  } else if (passwordValue !== confirmPasswordValue) {
    setError(confirmPassword, 'Passwords do not match');
  } else {
    setSuccess(confirmPassword);
  }
}

function setError(input, message) {
  const inputGroup = input.parentElement;
  const errorSpan = inputGroup.querySelector('.error-message');
  inputGroup.className = 'input-group error';
  errorSpan.textContent = message;
}

function setSuccess(input) {
  const inputGroup = input.parentElement;
  inputGroup.className = 'input-group success';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
