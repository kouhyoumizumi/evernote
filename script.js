const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completeFx = document.getElementById("fx-complete");
const failFx = document.getElementById("fx-fail");
const bg = document.getElementById("bg-music");
const bgPlayBtn = document.getElementById("btnPlayBG");

completeFx.volume = 0.13
failFx.volume = 0.13
bg.volume = 0.1

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

function playMusic() {
    if (!bg.paused) {
        bgPlayBtn.innerHTML = "Play Background Music"
        bg.pause()
    }
    else {
        bg.play()
        bgPlayBtn.innerHTML = "Pause Background Music"
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        if (e.target.classList.value !== "checked")
            completeFx.play();
        else
            failFx.play();
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

addEventListener("keypress", function (keyevt) {
    if (keyevt.key === 'Enter') {
        addTask();
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();