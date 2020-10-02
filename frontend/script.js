
let main;

document.addEventListener("DOMContentLoaded", function(event) {
    main = document.getElementsByTagName("main")[0];

    render();
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

function render() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    // Sync canvas resolution with size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const w = canvas.width/100, h = canvas.height/100;

    ctx.transform(1, 0, 0, -1, 0, canvas.height);

    ctx.lineCap = 'round';
    ctx.lineWidth = 2;
    
    // Real line

    ctx.strokeStyle = "#FF0000";

    ctx.beginPath();

    ctx.moveTo(0*w, 0*h);
    ctx.lineTo(10*w, 10*h);
    ctx.lineTo(20*w, 30*h);
    ctx.lineTo(30*w, 20*h);
    ctx.lineTo(40*w, 40*h);
    ctx.lineTo(50*w, 40*h);
    ctx.lineTo(60*w, 60*h);
    ctx.lineTo(70*w, 50*h);

    ctx.stroke();

    // Projected line
    
    ctx.strokeStyle = "#0000FF";

    ctx.beginPath();

    ctx.moveTo(0*w, 0*h);
    ctx.lineTo(100*w, 90*h);
    
    ctx.stroke();

    // Current marker

    ctx.strokeStyle = "#FF5500";
    ctx.lineWidth = 25;

    ctx.beginPath();

    ctx.moveTo(70*w, 50*h);
    ctx.lineTo(70*w, 50*h);
    
    ctx.stroke();

}
