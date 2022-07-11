let frameContainer = document.querySelector(".frame-container");
let allButtons = document.querySelectorAll("button")

let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

let randomColor = function generateRandomColor(){
    return Math.floor(Math.random() * rainbow.length)
}

let miniButton = document.querySelector("#mini")
let mediumButton = document.querySelector("#medium")
let maxButton = document.querySelector("#max")

let rainbowButton = document.querySelector("#rainbow")
let surpriseButton = document.querySelector("#Surprise")

function removeGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(){
for (let i = 0; i < 256; i++){
    let grid = document.createElement("div")
    frameContainer.appendChild(grid)
    grid.classList.add("gridColor")
}}

createGrid()

