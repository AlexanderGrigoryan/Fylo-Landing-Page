const button = document.body.getElementsByClassName('secure__btn')[0];
const warning  = document.body.getElementsByClassName('secure__alert')[0];
const form = document.body.getElementsByClassName('secure__form')[0];
const buttonAccess = document.body.getElementsByClassName('access__btn')[0];
const warningAccess  = document.body.getElementsByClassName('access__alert')[0];
const formAccess = document.body.getElementsByClassName('access__form')[0];

const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener("click", (event) => {
    if (!form.value.match(checkEmail)) {
        warning.style.display = "block";
    } else {
        warning.style.display = "none";
    }
});

buttonAccess.addEventListener("click", (event) => {
    if (!formAccess.value.match(checkEmail)) {
        warningAccess.style.display = "block";
    } else {
        warningAccess.style.display = "none";
    }
});

