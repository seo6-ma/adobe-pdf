const emailForm = document.getElementById('emailForm');
const passwordForm = document.getElementById('passwordForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');
const displayedEmail = document.getElementById('displayedEmail');
const changeEmailLink = document.getElementById('changeEmailLink');
const viewPdfLink = document.getElementById('viewPdfLink');

// Load saved email if exists
window.addEventListener('load', function() {
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
    }
});

// Email Form Submission
emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailError.style.display = 'none';
    
    const email = emailInput.value.trim();
    
    if (!isValidEmail(email)) {
        emailError.style.display = 'block';
        return;
    }
    
    localStorage.setItem('savedEmail', email);
    
    displayedEmail.textContent = email;
    
    emailForm.classList.remove('active');
    passwordForm.classList.add('active');
    
    passwordInput.focus();
});

// Password Form Submission
passwordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    passwordError.style.display = 'none';
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    if (password.length < 6) {
        passwordError.style.display = 'block';
        return;
    }
    
    if (rememberCheckbox.checked) {
        localStorage.setItem('savedEmail', email);
    } else {
        localStorage.removeItem('savedEmail');
    }
    
    // Save credentials
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    
    // Redirect to page 2
    successMessage.style.display = 'block';
    
    setTimeout(function() {
        window.location.href = 'page2.html';
    }, 1500);
});

// Change email link
changeEmailLink.addEventListener('click', function(e) {
    e.preventDefault();
    
    passwordForm.classList.remove('active');
    emailForm.classList.add('active');
    
    passwordError.style.display = 'none';
    passwordInput.value = '';
    rememberCheckbox.checked = false;
    
    emailInput.focus();
});

// View PDF link
viewPdfLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('images/background.jpg', '_blank');
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

emailInput.addEventListener('blur', function() {
    if (this.value.trim().length > 0 && isValidEmail(this.value.trim())) {
        emailError.style.display = 'none';
    }
});

passwordInput.addEventListener('blur', function() {
    if (this.value.length >= 6) {
        passwordError.style.display = 'none';
    }
});

function resetForm() {
    emailForm.classList.add('active');
    passwordForm.classList.remove('active');
    
    emailInput.value = '';
    passwordInput.value = '';
    rememberCheckbox.checked = false;
    displayedEmail.textContent = '';
    
    emailInput.focus();
}

emailInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        emailForm.dispatchEvent(new Event('submit'));
    }
});

passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        passwordForm.dispatchEvent(new Event('submit'));
    }
});