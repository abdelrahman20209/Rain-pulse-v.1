function redirectToLogin() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = '#03132e';
    overlay.style.zIndex = '9999';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.5s';
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        window.location.href = "login.html";
    }, 500);
}

const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const btn = document.querySelector('.login-btn');

        btn.innerText = "Connecting to Pulse...";
        btn.disabled = true;

        setTimeout(() => {
            if (email === "admin@rainpulse.com" && password === "123") {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "dashboard.html";
            } else {
                alert("Wrong credentials! Please try again.");
                btn.innerText = "Sign In";
                btn.disabled = false;
            }
        }, 1200); 
    });
}

const createAccBtn = document.getElementById('createAccount');
if (createAccBtn) {
    createAccBtn.addEventListener('click', () => {
        alert("Registration is currently closed. Contact Rain Pulse Admin.");
    });
}