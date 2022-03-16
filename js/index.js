import { showTimer } from "./showTimer.js";

document.addEventListener('DOMContentLoaded', showTimer);
document.addEventListener('DOMContentLoaded', formValidation);

function formValidation() {
    const form  = document.querySelector(".footer-form");
    const formWrap = document.querySelector(".form-wrapper");
    const input = document.querySelector("#mail");

    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            formRemoveError(input);
            input.classList.add("good");

            // let requestEmail = input.value.match(/[\s\S]*?(?=@)/)[0];

            formWrap.classList.add("sending");
            let response = await fetch(`https://reqres.in/api/login`, {
                method : "POST",
                body : formData
            });

            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                formWrap.classList.remove("sending");
                input.classList.remove("good");
            } else {
                formWrap.classList.remove("sending");
                input.classList.remove("good");
                alert("Ошибка");
            }

        } else {
            alert("Зполните поля")
        }

        function formValidate(form) {
            let error = 0;
            let formReq = document.querySelector('.req');

            formRemoveError(input);

            if (emailTest(input)) {
                formAddError(input);
                error++;
            } else if (input.value === "") {
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

        function emailTest(input) {
            return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(input.value);
        }
    }
}
