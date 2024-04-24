document.getElementById("signup-btn").onclick = ()=>{
    document.getElementById("login-signup-container").classList.remove("d-none");
    document.body.style.overflow = "hidden";
}

document.getElementById("login-signup-container").onclick = ()=>{
    document.getElementById("login-signup-container").classList.add("d-none");
    document.body.style.overflow = "visible";
}


let form = document.getElementById("login-signup-form");
let submitBtn = document.getElementById("login-submit-btn");
let email = document.getElementById("email-form-input");
let password = document.getElementById("password-form-input");
submitBtn.addEventListener("click", (e)=>{
    email.value = email.value.replace(/\s+/g, '');
    e.preventDefault();

    document.getElementById("password-form-input-label").innerHTML = "Password";
    password.classList.remove("is-invalid");
    email.classList.remove("is-invalid");
    document.getElementById("email-form-input-label").innerHTML = "Email address";

    if(email.value === '' || email.value == null || email.value.indexOf('@')<1 || email.value.indexOf('.com')<1){
        email.classList.add("is-invalid");
        document.getElementById("email-form-input-label").innerHTML = "invalid E-mail";
    }
    else if(password.value.length < 8){
        document.getElementById("password-form-input-label").innerHTML = "invalid Password";
        password.classList.add("is-invalid");
    }
    else {
        document.getElementById("login-signup-container").classList.add("d-none");
        document.body.style.overflow = "visible";
    }
})
