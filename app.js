let scoreHome = document.getElementById("score_home");
let scoreGuest = document.getElementById("score_guest");

let countHome = 0;
let countGuest = 0;

function homeplus1() {
    countHome += 1;
    scoreHome.textContent = countHome;
}
function homeplus2() {
    countHome += 2;
    scoreHome.textContent = countHome;
}
function homeplus3() {
    countHome += 3;
    scoreHome.textContent = countHome;
}

function guestplus1() {
    countGuest += 1;
    scoreGuest.textContent = countGuest;
}
function guestplus2() {
    countGuest += 2;
    scoreGuest.textContent = countGuest;
}
function guestplus3() {
    countGuest += 3;
    scoreGuest.textContent = countGuest;
}