window.addEventListener("DOMContentLoaded", () => {
    const humburger = document.querySelector(".humburger"),
        menu = document.querySelector(".menu"),
        menuItem = document.querySelectorAll(".menu_item");


    humburger.addEventListener("click", () => {
        menu.classList.toggle("menu_active");

        humburger.classList.toggle("humburger_active");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            menu.classList.toggle("menu_active");

            humburger.classList.toggle("humburger_active");
        })
    });

});