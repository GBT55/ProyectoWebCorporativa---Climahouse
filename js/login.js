const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("login-input-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    const confirmPassword = loginForm.confirmPassword.value;

    if (password === "" || email === "" || username === "") {
        alert("No has llenado todos los campos, intentalo de nuevo.");
        location.reload();
    } else if (password === confirmPassword) {
        alert(`${username}, te has registrado correctamente!`);
        window.location.replace('index.html');
    } else {
        alert(`Las contraseñas introducidas no coinciden, porfavor intentalo de nuevo.`);
        location.reload();
    }
})