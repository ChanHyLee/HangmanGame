const submitForm = document.querySelector(".js-submitForm");
const submitInput = document.querySelector(".js-submitInput");
const blank = document.querySelector(".js-blank");
const wrongWord = document.querySelector(".js-wrongWord");
const hang1 = document.querySelector(".js-hang1");
const hang2 = document.querySelector(".js-hang2");
const hang3 = document.querySelector(".js-hang3");
const hang4 = document.querySelector(".js-hang4");
const head = document.querySelector(".js-head");
const body = document.querySelector(".js-body");
const leftLeg = document.querySelector(".js-leftLeg");
const rightLeg = document.querySelector(".js-rightLeg");
const leftArm = document.querySelector(".js-leftArm");
const rightArm = document.querySelector(".js-rightArm");
const gameOver = document.querySelector(".js-gameOver");
const congrats = document.querySelector(".js-congrats");

let status = "";
let count = 0;
let usedLetter = [];
let wrongLetter = "";

function updateStatus(newStatus) {
    wrongWord.innerText = wrongLetter;
    if (count === 11) {
        blank.innerText = `Game Over\nThe answer was ${answer}`;
        submitInput.blur();
        submitInput.classList.remove(SHOWING_CLASS);
        gameOver.classList.add(SHOWING_CLASS);
    } else if (count === 1) {
        if (newStatus === answer) {
            blank.innerText = `You won!\nThe answer was ${answer}`;
            submitInput.blur();
            submitInput.classList.remove(SHOWING_CLASS);
        } else {
            blank.innerText = newStatus;
            hang1.classList.add(SHOWING_CLASS);
        }
    } else if (count === 2) {
        if (newStatus === answer) {
            blank.innerText = `You won!\nThe answer was ${answer}`;
            submitInput.blur();
            submitInput.classList.remove(SHOWING_CLASS);
        } else {
            blank.innerText = newStatus;
            hang2.classList.add(SHOWING_CLASS);
        }
    } else if (count === 3) {
        if (newStatus === answer) {
            blank.innerText = `You won!\nThe answer was ${answer}`;
            submitInput.blur();
            submitInput.classList.remove(SHOWING_CLASS);
        } else {
            blank.innerText = newStatus;
            hang3.classList.add(SHOWING_CLASS);
        }
    } else if (count === 4) {
        if (newStatus === answer) {
            blank.innerText = `You won!\nThe answer was ${answer}`;
            submitInput.blur();
            submitInput.classList.remove(SHOWING_CLASS);
        } else {
            blank.innerText = newStatus;
            hang4.classList.add(SHOWING_CLASS);
        }
    } else if (count === 5) {
        if (newStatus === answer) {
            blank.innerText = `You won!\nThe answer was ${answer}`;
            submitInput.blur();
            submitInput.classList.remove(SHOWING_CLASS);
        } else {
            blank.innerText = newStatus;
            head.classList.add(SHOWING_CLASS);
        }
    } else if (count === 6) {
        if (newStatus === answer) {
            blank.innerText = `You won!\nThe answer was ${answer}`;
            submitInput.blur();
            submitInput.classList.remove(SHOWING_CLASS);
        } else {
            blank.innerText = newStatus;
            body.classList.add(SHOWING_CLASS);
        }
    } else if (count === 7) {
        if (newStatus === answer) {
            blank.innerText = `You won!\nThe answer was ${answer}`;
            submitInput.blur();
            submitInput.classList.remove(SHOWING_CLASS);
        } else {
            blank.innerText = newStatus;
            leftLeg.classList.add(SHOWING_CLASS);
        }
    } else if (count === 8) {
        if (newStatus === answer) {
            blank.innerText = `You won!\nThe answer was ${answer}`;
            submitInput.blur();
            submitInput.classList.remove(SHOWING_CLASS);
        } else {
            blank.innerText = newStatus;
            rightLeg.classList.add(SHOWING_CLASS);
        }
    } else if (count === 9) {
        if (newStatus === answer) {
            blank.innerText = `You won!\nThe answer was ${answer}`;
            submitInput.blur();
            submitInput.classList.remove(SHOWING_CLASS);
        } else {
            blank.innerText = newStatus;
            leftArm.classList.add(SHOWING_CLASS);
        }
    } else if (count === 10) {
        if (newStatus === answer) {
            blank.innerText = `You won!\nThe answer was ${answer}`;
            submitInput.blur();
            submitInput.classList.remove(SHOWING_CLASS);
        } else {
            blank.innerText = newStatus;
            rightArm.classList.add(SHOWING_CLASS);
        }
    } else {
        if (newStatus === answer) {
            blank.innerText = `You won!\nThe answer was ${answer}`;
            submitInput.blur();
            submitInput.classList.remove(SHOWING_CLASS);
            congrats.classList.add(SHOWING_CLASS);
        } else {
            blank.innerText = newStatus;
        }
    }
}

function getResult(str) {
    usedLetter.push(str);
    let newStatus = "";
    let unmatch = 0;
    for (let i = 0; i < answer.length; i++) {
        if (str === answer.charAt(i)) {
            newStatus = newStatus + str;
        } else {
            newStatus = newStatus + status.charAt(i);
            unmatch = unmatch + 1;
        }
    }
    status = newStatus;
    if (unmatch === answer.length) {
        count = count + 1;
        wrongLetter = wrongLetter + str;
        updateStatus(status);
    } else {
        updateStatus(status);
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const word = submitInput.value.toUpperCase();
    if (word.length === 1) {
        if ((word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90)) {
            if (usedLetter.includes(word)) {
                submitInput.value = "";
                alert("Please write another letter.");
            } else {
                getResult(word);
                submitInput.value = "";
            }
        } else {
            submitInput.value = "";
            alert("Please write the one alphabet.");
        }
    } else {
        submitInput.value = "";
        alert("Please write the one alphabet.");
    }
}

function paintBlank(str) {
    const len = str.length;
    let lenOfBlank = "";
    for (let i = 0; i < len; i++) {
        lenOfBlank = lenOfBlank + "_";
    }
    blank.innerText = lenOfBlank;
    status = lenOfBlank;
}

function running() {
    paintBlank(answer);
    hang1.classList.remove(SHOWING_CLASS);
    hang2.classList.remove(SHOWING_CLASS);
    hang3.classList.remove(SHOWING_CLASS);
    hang4.classList.remove(SHOWING_CLASS);
    head.classList.remove(SHOWING_CLASS);
    body.classList.remove(SHOWING_CLASS);
    leftLeg.classList.remove(SHOWING_CLASS);
    rightLeg.classList.remove(SHOWING_CLASS);
    leftArm.classList.remove(SHOWING_CLASS);
    rightArm.classList.remove(SHOWING_CLASS);
    gameOver.classList.remove(SHOWING_CLASS);
    congrats.classList.remove(SHOWING_CLASS);
    submitInput.classList.add(SHOWING_CLASS);
    submitInput.focus();
    submitForm.addEventListener("submit", handleSubmit);
}