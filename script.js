window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#ikon").addEventListener("click", toggleMenu);

}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#ikon").textContent = "☰";
    } else {
        document.querySelector("#ikon").textContent = "X";
    }
}
