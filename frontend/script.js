document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');

    if (passwordInput && togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', () => {
            const isHidden = passwordInput.type === 'password';
            passwordInput.type = isHidden ? 'text' : 'password';

            const icon = togglePasswordBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-eye', isHidden);
                icon.classList.toggle('fa-eye-slash', !isHidden);
            }

            togglePasswordBtn.setAttribute('aria-pressed', String(isHidden));
            togglePasswordBtn.setAttribute('aria-label', isHidden ? 'Show password' : 'Hide password');
        });
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        const userData = {
            email: email,
            loginTime: new Date().toISOString()
        };

        localStorage.setItem('pathai_user', JSON.stringify(userData));

        const btn = loginForm.querySelector('.login-btn');
        const originalContent = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        btn.disabled = true;

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    });
});