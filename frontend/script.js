
let main;

document.addEventListener("DOMContentLoaded", function(event) {
    main = document.getElementsByTagName("main")[0];
});

function switchPage(page) {
    pageSetups[page]();
}

const pageSetups = {

    DASHBOARD: function() {
        main.classList.add("dashboard");
        main.classList.remove("breakdown");
        main.classList.remove("support");
    },

    BREAKDOWN: function() {
        main.classList.remove("dashboard");
        main.classList.add("breakdown");
        main.classList.remove("support");
    },

    SUPPORT: function() {
        main.classList.remove("dashboard");
        main.classList.remove("breakdown");
        main.classList.add("support");
    }
}
