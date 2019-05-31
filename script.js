window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    let x = document.querySelector("#submitbtn");

    if (!x) {

        document.querySelector("#ikon").addEventListener("click", toggleMenu);
        document.querySelector("#outerbox1").addEventListener("click", toggleBtn);
        document.querySelector("#outerbox2").addEventListener("click", toggleBtn);

        document.querySelector("#outerbox3").addEventListener("click", toggleBtn);

        document.querySelector("#outerbox4").addEventListener("click", toggleBtn);

        document.querySelector("#uploadbtn").addEventListener("click", modalAfleveringer);

    } else {
        document.querySelector("#submitbtn").addEventListener("click", resetPassword);
    }

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


function toggleBtn() {
    console.log("toggleBtn");
    this.nextElementSibling.classList.toggle("collapse-hide");
    this.lastElementChild.classList.toggle("expandbtn");
    this.lastElementChild.classList.toggle("collapsebtn");
}

function resetPassword() {

    document.getElementById("p1").innerHTML = "An email has been sent to your e-mail address. <br> Please check your inbox.";

    let parent = document.getElementById("forgot_form");
    let child = document.getElementById("reset_input");
    parent.removeChild(child);

    let parent1 = document.getElementById("container_forgot");
    let child1 = document.getElementById("submitbtn");
    parent1.removeChild(child1);



}

let myModal = document.querySelector("#myModal");

function modalAfleveringer() {
    console.log("modalAfleveringer");

    myModal.classList.remove("collapse-hide");
    myModal.classList.add("modal");
    document.querySelector("#closebtn").addEventListener("click", modalClose);

    document.querySelector("#send").addEventListener("click", uploadSucceed);

}

function modalClose() {
    console.log("modalClose");
    myModal.classList.add("collapse-hide");
    myModal.classList.remove("modal");
    location.reload();

}

function uploadSucceed() {

    let modal = document.getElementById("modal-indhold");
    let form = document.getElementById("aflevering-modal");
    modal.removeChild(form);

    document.getElementById("overskrift").innerHTML = "Submission complete!";

    document.getElementById("p-succeed").innerHTML = "You have successfully submitted your assignment! You may close this window.";



}
