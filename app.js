let passwordInput = document.querySelector(".password-input");
let checkbox = document.querySelector(".password-checkbox");

checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
        passwordInput.setAttribute("type", "text");
    } else {
        passwordInput.setAttribute("type", "password");
    }
});
