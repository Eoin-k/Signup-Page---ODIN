const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const passwordWrapper = document.getElementById("password-wrapper")

const basicPasswordMatch = (password1,password2) => {
        if(password1.value !== password2.value) {
            passwordWrapper.innerHTML = `<p style="color: red; font-size:.8rem">Passwords do not match</p>`

        } if (password1.value === password2.value) {
            console.log("")
            passwordWrapper.innerHTML = ""
        }
}


password1.addEventListener("change", (e) =>{
    basicPasswordMatch(password1,password2);
});
password2.addEventListener("change", (e) =>{
    basicPasswordMatch(password1,password2);
});
