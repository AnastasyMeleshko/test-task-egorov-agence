import { showTimer } from "./showTimer.js";

document.addEventListener('DOMContentLoaded', showTimer);
document.addEventListener('DOMContentLoaded', formValidation);

// function insertGifForSearch() {
//     let search = document.createElement("div");
//     search.classList.add("search-active");
//     return search;
// }

function formValidation() {
    const form  = document.querySelector(".footer-form");
    const formWrap = document.querySelector(".form-wrapper");
    const input = document.querySelector("#mail");
    const modal = document.getElementById("modal");
    // let modalForSearch =  modal.cloneNode(true);
    // modalForSearch.innerHTML = "";
    // modalForSearch.classList.add("search-active");
    // console.log(modalForSearch)
    let informMessage;

    // let newSearch = insertGifForSearch();

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
            // document.querySelector(".container").append(modalForSearch);
            if (response.ok) {

                // modal.innerHTML = "";
                // modal.append(newSearch);
                let result = await response.json();
                setTimeout(() => {
                    // modalForSearch.style.opacity = "1";
                        alert(result.message);
                        informMessage = "result.message";
                    }, 3000);
                form.reset();
                setTimeout(() => { formWrap.classList.remove("sending"); }, 3000);
                input.classList.remove("good");
            } else {
                // modal.innerHTML = "";
                // modal.append(newSearch);
                // modalForSearch.style.opacity = "1";
                setTimeout( () => {
                    formWrap.classList.remove("sending");
                    input.classList.remove("good");
                }, 2500);
                setTimeout(() => {
                    response.json().then(error => {
                        const e = new Error('Ooops...Something went wrong')
                        e.data = error
                        throw error
                    })
                    // modal.innerHTML = "";
                    // modal.append(newSearch);
                    alert("Ooops...Something went wrong");
                    informMessage = "Ooops...Something went wrong";
                    }, 3000);

        }} else {
            setTimeout(() => {
                alert("Please enter an e-mail address!");
                informMessage = "Please enter your e-mail address!";
                }, 300);
            formAddError(input);
        }

        function formValidate(form) {
            let error = 0;

            formRemoveError(input);

            if (!emailTest(input)) {
                formAddError(input);
                error++;
            } else if (input.value === "") {
                formAddError(input);
                error++;
            } else if (input.value.length < input.minLength) {
                formAddError(input);
                error++;
            }

            function emailTest(input) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value))
                {
                    return (true);
                }
                return (false);
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

