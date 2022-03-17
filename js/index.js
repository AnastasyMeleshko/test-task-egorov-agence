import { showTimer } from "./showTimer.js";
import {changeModalMessage} from "./modal.js";
import { emailTest } from "./emailTest.js";
export let informMessage;

document.addEventListener('DOMContentLoaded', showTimer);
document.addEventListener('DOMContentLoaded', formValidation);

function formValidation() {
    const form  = document.querySelector(".footer-form");
    const formWrap = document.querySelector(".form-wrapper");
    const input = document.querySelector("#mail");
    const modal = document.getElementById("modal");

    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            formRemoveError(input);
            input.classList.add("good");
            formWrap.classList.add("sending");
            let response = await fetch(`https://reqres.in/api/login`, {
                method : "POST",
                body : formData
            });
            if (response.ok) {
                let result = await response.json();
                setTimeout(() => {
                    informMessage = "Success";
                    changeModalMessage(modal);
                    }, 700);
                form.reset();
                setTimeout(() => { formWrap.classList.remove("sending"); }, 400);
                input.classList.remove("good");
            } else {

                if (!emailTest(input)) {
                    informMessage = "Bad";
                    changeModalMessage(modal);
                    form.reset();}

                setTimeout( () => {
                    formWrap.classList.remove("sending");
                    input.classList.remove("good");
                }, 300);
                    response.json().then(error => {
                        const e = new Error('Ooops...Something went wrong')
                        e.data = error
                        throw error
                    })

                    if (!emailTest(input)) {
                        informMessage = "Bad";
                        changeModalMessage(modal);
                    } else {
                        informMessage = "Mistake";
                    }
                    changeModalMessage(modal);

        }} else {

            if (!emailTest(input)) {
                informMessage = "Bad";
                changeModalMessage(modal);
            } else {
                informMessage = "Empty";
                changeModalMessage(modal);
            }

            formAddError(input);
            form.reset();
        }

        function formValidate(form) {
            let error = 0;

            formRemoveError(input);

            if (!emailTest(input)) {
                informMessage = "Bad";
                formAddError(input);
                error++;
            } else if (input.value === "") {
                formAddError(input);
                error++;
            } else if (input.value.length < input.minLength) {
                formAddError(input);
                error++;
            }
            return error;
        }

        function formAddError(input) {
            input.classList.add("error");
            input.parentElement.classList.add("error");
        }

        function formRemoveError(input) {
            input.classList.remove("error");
            input.parentElement.classList.remove("error");
        }
    }
}

let currentUrl = window.location.href;
let logoLink = document.querySelector(".logo-link");
logoLink.setAttribute("href", `${currentUrl}`);


