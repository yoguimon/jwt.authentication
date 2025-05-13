// auth.js

const API_URL = '/api/v1/auth';

async function registerUser(userData) {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error en el registro');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        alert('Registro exitoso');
    } catch (error) {
        console.error('Registro fallido:', error);
        alert('Error al registrarse');
    }
}

async function loginUser(credentials) {
    try {
        const response = await fetch(`${API_URL}/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            throw new Error('Error al iniciar sesión');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        Swal.fire({
          title: "Inicio de sesión exitoso",
          icon: "success"
        });
    } catch (error) {
        console.error('Login fallido:', error);
        Swal.fire({
          title: "Error al iniciar sesión",
          icon: "error"
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const userData = {
                firstname: document.getElementById('firstname').value,
                lastname: document.getElementById('lastname').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            };
            registerUser(userData);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const credentials = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            };
            loginUser(credentials);
        });
    }
});
