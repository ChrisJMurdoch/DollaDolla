
let main;

document.addEventListener("DOMContentLoaded", function(event) {

    main = document.getElementsByTagName("main")[0];

    render();

    // Fake loading until API is implemented
    setTimeout( function() {document.getElementsByClassName("splash")[0].classList.add("hidden");}, 1000 );
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

    const unitX = x => Math.round(x*canvas.width/100);
    const unitY = y => Math.round(y*canvas.height/100);

    ctx.transform(1, 0, 0, -1, 0, canvas.height);
    ctx.lineCap = 'round';
    ctx.shadowBlur = 10;
    ctx.lineWidth = 3;
    
    // Projected line
    
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.shadowColor = "rgba(255,255,255,0.3)";

    ctx.beginPath();
    ctx.moveTo( unitX(1),  unitY(1)  );
    ctx.lineTo( unitX(99), unitY(90) );
    ctx.stroke();

    // Real line

    ctx.strokeStyle = "white";
    ctx.shadowColor = "rgba(255,255,255,0.75)";

    ctx.beginPath();
    ctx.moveTo( unitX(1),  unitY(1)  );
    ctx.lineTo( unitX(10), unitY(10) );
    ctx.lineTo( unitX(20), unitY(30) );
    ctx.lineTo( unitX(30), unitY(20) );
    ctx.lineTo( unitX(40), unitY(40) );
    ctx.lineTo( unitX(50), unitY(40) );
    ctx.lineTo( unitX(60), unitY(60) );
    ctx.lineTo( unitX(70), unitY(50) );
    ctx.stroke();

    // Current marker

    ctx.strokeStyle = "white";
    ctx.shadowColor = "rgba(255,255,255,0.75)";
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo( unitX(70), unitY(50) );
    ctx.lineTo( unitX(70), unitY(50) );

    ctx.stroke();

}
