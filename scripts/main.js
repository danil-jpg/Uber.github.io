import humburger from "./modules/humburger.js";
import timer from "./modules/timer.js";
import  modal from "./modules/modal.js";
import form from "./modules/form.js";
import cards from "./modules/cards.js"

window.addEventListener("DOMContentLoaded" , () => {
    humburger();
    timer()
    modal(".modal" , "form" ,"form_close")
    form()
    cards()
})




