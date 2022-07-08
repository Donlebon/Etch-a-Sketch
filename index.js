let frameContainer = document.querySelector(".frame-container");
let allButtons = document.querySelectorAll("button")

// 320px
let miniButton = document.querySelector("#mini")
// 400px
let mediumButton = document.querySelector("#medium")
// 480px
let maxButton = document.querySelector("#max")

let colorButton = document.querySelector("#color")
let surpriseButton = document.querySelector("#Surprise")

function generateGrid(){
    for(let i = 0; i < 256; i++){
        let grid = document.createElement("div");
        grid.classList.add("frames");
        frameContainer.appendChild(grid)
    }
}

generateGrid()

// Select all Frame Grids Generated from Generate Grid
let allFrames = document.querySelectorAll(".frames")

function resetGrid(value, index){
    allFrames[index].style.backgroundColor = "transparent"
}

function changeMiniDimension(){
    frameContainer.style.height = "320px"
    frameContainer.style.width = "320px"
}

function changeMini(value, index){
    allFrames[index].style.height = "20px";
    allFrames[index].style.width = "20px";
}

function changeMediumDimension(){
    frameContainer.style.height = "400px"
    frameContainer.style.width = "400px"
}

function changeMedium(value, index){
    allFrames[index].style.height = "25px";
    allFrames[index].style.width = "25px";
}

function changeMaxDimension(){
    frameContainer.style.height = "480px"
    frameContainer.style.width = "480px"
}

function changeMax(value, index){
    allFrames[index].style.height = "30px";
    allFrames[index].style.width = "30px";
}

function addClick(value, index){
    allButtons[index].addEventListener("click", function(e){
        if(allButtons[index].getAttribute("id") === "mini"){
            changeMiniDimension()
            allFrames.forEach(changeMini)
            allFrames.forEach(resetGrid)
        }
        else if (allButtons[index].getAttribute("id") === "medium"){
            changeMediumDimension()
            allFrames.forEach(changeMedium)
            allFrames.forEach(resetGrid)
        } else if (allButtons[index].getAttribute("id") === "max"){
            changeMaxDimension()
            allFrames.forEach(changeMax)
            allFrames.forEach(resetGrid)
        }
    })
}

allButtons.forEach(addClick)



function paintGrid(value, index){
    allFrames[index].addEventListener("click", function(e){
        allFrames.forEach(testing)
        if(e.type === "click"){
            allFrames[index].style.backgroundColor = "black"
            console.log(e)
        }
    })
}

function testing(value, index){
    allFrames[index].addEventListener("mouseover", function(e){
        allFrames[index].style.backgroundColor = "black"
    })
}

allFrames.forEach(paintGrid)

