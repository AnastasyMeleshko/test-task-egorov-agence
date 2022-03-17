import { emailTest } from "./emailTest.js";
import { informMessage } from "./index.js";

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const modal = document.querySelector(".modal").closest(".modal");
        changeModalMessage(modal);
        setTimeout( () => { openModal(modal); }, 500);
    })
})

closeModalButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const modal = document.querySelector(".modal").closest(".modal");
        changeModalMessage(modal);
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove("active");
    overlay.classList.remove("active");
    location.reload();
}

function changeModalMessage(modal) {
    let modalHeader = document.querySelector(".modal-header");
    let modalMessage = document.querySelector(".modal-text");
    const input = document.querySelector("#mail");

    if (((informMessage === "Empty") || (informMessage === "Bad")) || (!emailTest(input))) {
        modalHeader.innerHTML = "Attention!";
        modalMessage.innerHTML = "Please enter e-mail address for subscribe!";
    }

    if (informMessage === "Success") {
        modalHeader.innerHTML = "Success!";
        modalMessage.innerHTML = "You have successfully subscribed to the email newsletter.";
    }

    if (informMessage === "Mistake") {
        modalHeader.innerHTML = "Ooops!";
        modalMessage.innerHTML = "Something went wrong. Please try to subscribe again.";
    }
}

export { changeModalMessage };
