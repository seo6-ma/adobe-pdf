const verifyForm = document.getElementById('verifyForm');
const email2Input = document.getElementById('email2');
const password2Input = document.getElementById('password2');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

// Check if user came from page 1
window.addEventListener('load', function() {
    const userEmail = localStorage.getItem('userEmail');
    const userPassword = localStorage.getItem('userPassword');
    
    if (!userEmail || !userPassword) {
        alert('Please login first');
        window.location.href = 'index.html';
    }
});

// Verify Form Submission
verifyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    
    const email = email2Input.value.trim();
    const password = password2Input.value;
    
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
    
    let isValid = true;
    
    // Validate email
    if (!isValidEmail(email)) {
        emailError.style.display = 'block';
        isValid = false;
    }
    
    // Validate password
    if (password.length < 6) {
        passwordError.style.display = 'block';
        isValid = false;
    }
    
    // Check if credentials match
    if (isValid && (email !== savedEmail || password !== savedPassword)) {
        emailError.style.display = 'block';
        emailError.textContent = translations[window.currentLanguage].credentialsError;
        isValid = false;
    }
    
    if (isValid) {
        successMessage.style.display = 'block';
        
        setTimeout(function() {
            // Open PDF
            window.open('images/background.jpg', '_blank');
            
            // Clear stored credentials
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userPassword');
            
            // Redirect back to login
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 1000);
        }, 1500);
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

email2Input.addEventListener('blur', function() {
    if (this.value.trim().length > 0 && isValidEmail(this.value.trim())) {
        emailError.style.display = 'none';
    }
});

password2Input.addEventListener('blur', function() {
    if (this.value.length >= 6) {
        passwordError.style.display = 'none';
    }
});

email2Input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        password2Input.focus();
    }
});

password2Input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        verifyForm.dispatchEvent(new Event('submit'));
    }
});