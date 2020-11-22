const name = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const text = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let enter = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    text.innerHTML = "";
    if (name.value.length < 6) {
        warnings += `Invalid name <br>`;
        enter = true;
    }
    if(!regexEmail.test(email.value)) {
        warnings += `Invalid email <br>`;
        enter = true;
    }
    if(pass.value.length < 8) {
        warnings += `Invalid password <br>`
    }
    if(enter) {
        text.innerHTML = warnings;
    }
    else {
        text.innerHTML = "Sent";
    }
})