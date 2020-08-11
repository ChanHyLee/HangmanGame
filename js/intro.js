const openingWrap = document.querySelector(".js-openingWrap");
const wordInput = document.querySelector(".js-wordInput");
const hangman = document.querySelector(".js-hangmanImg");
const hangman2 = document.querySelector(".js-hangmanImg2");
const mainWrap = document.querySelector(".js-mainWrap");

const SHOWING_CLASS = "showing";

let answer = "";

function handleEnterUp(event) {
    hangman.classList.add(SHOWING_CLASS);
    hangman2.classList.remove(SHOWING_CLASS);
    const word = wordInput.value;
    if (word !== "") {
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if ((word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) || (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)) {
                count = count + 1;
            }
        }
        if (count === word.length) {
            answer = word.toUpperCase();
            wordInput.value = "";
            wordInput.blur();
            openingWrap.classList.remove(SHOWING_CLASS);
            mainWrap.classList.add(SHOWING_CLASS);
            running();
        } else {
            wordInput.value = "";
            alert("Please write words using only the alphabet.");
        }
    } else {
        wordInput.value = "";
        alert("You didn't write anything!");
    }
}

function handleEnterDown(event) {
    hangman.classList.remove(SHOWING_CLASS);
    hangman2.classList.add(SHOWING_CLASS);
}

function handleMouseUp(event) {
    const word = wordInput.value;
    if (word !== "") {
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if ((word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) || (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)) {
                count = count + 1;
            }
        }
        if (count === word.length) {
            answer = word.toUpperCase();
            wordInput.value = "";
            wordInput.blur();
            openingWrap.classList.remove(SHOWING_CLASS);
            mainWrap.classList.add(SHOWING_CLASS);
            running();
        } else {
            wordInput.value = "";
            alert("Please write words using only the alphabet.");
        }
    } else {
        wordInput.value = "";
        alert("You didn't write anything!");
    }
}

function handleMouseOut(event) {
    hangman.classList.add(SHOWING_CLASS);
    hangman2.classList.remove(SHOWING_CLASS);
}

function handleMouseOver(event) {
    hangman.classList.remove(SHOWING_CLASS);
    hangman2.classList.add(SHOWING_CLASS);
}

function init() {
    openingWrap.classList.add(SHOWING_CLASS);
    mainWrap.classList.remove(SHOWING_CLASS);
    hangman.classList.add(SHOWING_CLASS);
    hangman2.classList.remove(SHOWING_CLASS);
    hangman.addEventListener("mouseover", handleMouseOver);
    hangman2.addEventListener("mouseout", handleMouseOut);
    hangman2.addEventListener("mouseup", handleMouseUp);
    wordInput.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            handleEnterDown();
        }
    });
    wordInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            handleEnterUp();
        }
    });
    wordInput.focus();
}
init();
