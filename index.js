let frameContainer = document.querySelector(".frame-container");
let allButtons = document.querySelectorAll("button")

let miniButton = document.querySelector("#mini")
let mediumButton = document.querySelector("#medium")
let maxButton = document.querySelector("#max")

let rainbowButton = document.querySelector("#rainbow")
let eraseButton = document.querySelector("#erase")

// Grid

let miniGrid = document.querySelectorAll("miniGrid")
let mediumGrid = document.querySelectorAll("mediumGrid")
let maxGrid = document.querySelectorAll("maxGrid")

// Color

let color = document.querySelector(".color")

// All Grids

let test = frameContainer.children

// Reset Grid

function removeGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Add Color
function addColor(grid){
    grid.addEventListener("mouseover", function(e){
        grid.style.backgroundColor = "black"
    })
}

function createGrid(){
    for (let i = 0; i < 961; i++){
        let grid = document.createElement("div")
        frameContainer.appendChild(grid)
        grid.classList.add("mediumGrid")
        addColor(grid)
    }
}

createGrid()


miniButton.addEventListener("click", function(e){
    removeGrid(frameContainer)
    clicked(e)
    for (let i = 0; i < 3844; i++){
        let grid = document.createElement("div")
        frameContainer.appendChild(grid)
        grid.classList.add("miniGrid")
        addColor(grid)
        reset()
    } 
})

mediumButton.addEventListener("click", function(e){
    removeGrid(frameContainer)
    clicked(e)
    for (let i = 0; i < 961; i++){
        let grid = document.createElement("div")
        frameContainer.appendChild(grid)
        grid.classList.add("mediumGrid")
        addColor(grid)
        reset()
    }}
)

maxButton.addEventListener("click", function(e){
    removeGrid(frameContainer)
    clicked(e)
    for (let i = 0; i < 256; i++){
        let grid = document.createElement("div")
        frameContainer.appendChild(grid)
        grid.classList.add("maxGrid")
        addColor(grid)
        reset()
    }}
)



// Erase Button

eraseButton.addEventListener("click", activateEraser)


let erase = false
let rainbowColors = false

function activateEraser(e){
    if(!erase){
    for (let i = 0; i < test.length; i++){
        test[i].addEventListener("mouseover", function(e){
            test[i].style.backgroundColor = "white"
        })
    }
    erase = true
    rainbowColors = false
} else{
    for (let i = 0; i < test.length; i++){
        test[i].addEventListener("mouseover", function(e){
            test[i].style.backgroundColor = "black"
        })
    }
    erase = false
    rainbowColors = false
}}

// Rainbow Button

let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

let randomColor = function generateRandomColor(){
    return Math.floor(Math.random() * rainbow.length)
}

rainbowButton.addEventListener("click", function (e){
    if(!rainbowColors){
        for (let i = 0; i < test.length; i++){
            test[i].addEventListener("mouseover", function(e){
                test[i].style.backgroundColor = rainbow[randomColor()]
                console.log(rainbow[randomColor()])
            })
        }
        rainbowColors = true
        erase = false
    } else{
        for (let i = 0; i < test.length; i++){
            test[i].addEventListener("mouseover", function(e){
                test[i].style.backgroundColor = "black"
            })
        }
        rainbowColors = false
        erase = false
    }
})

// Animation for Grid Buttons

function clicked(e){
    for (let i = 0; i < allButtons.length; i++){
        e.target.classList.remove("original-style")
        e.target.classList.add("clicked-style")
    }
    setTimeout(() => {
        e.target.classList.remove("clicked-style")
        e.target.classList.add("original-style")
    }, 500)
}

// Animation for Rainbow and Eraser Buttons

let clicker = false
let eraseOn = false
let rainbowOn = false

eraseButton.addEventListener("click", function (e){
    if(clicker && rainbowOn){
        turnOffRainbow()
        console.log("Power Off")
        rainbowOn = false
        turnOnEraser()
        clicker = true
        eraseOn = true
        console.log("Power On")
    }
    else if (!clicker && !eraseOn){
        turnOnEraser()
        clicker = true
        eraseOn = true
        console.log("Power On")
    } else if (clicker && eraseOn){
        turnOffEraser()
        console.log("Power Off")
        clicker = false
        eraseOn = false
    } 
})

rainbowButton.addEventListener("click", function (e){
    if(clicker && eraseOn){
        turnOffEraser()
        console.log("Power Off")
        eraseOn = false
        turnOnRainbow()
        clicker = true
        rainbowOn = true
        console.log("Power On")
    }
    else if (!clicker && !rainbowOn){
        turnOnRainbow()
        clicker = true
        rainbowOn = true
        console.log("Power On")
    } else if (clicker && rainbowOn){
        turnOffRainbow()
        console.log("Power Off")
        clicker = false
        rainbowOn = false
    } 
})

// Rainbow and Eraser On/Off

function turnOffRainbow(){
    rainbowButton.classList.remove("clicked-style")
    rainbowButton.classList.add("original-style")    
}

function turnOffEraser(){
    eraseButton.classList.remove("clicked-style")
    eraseButton.classList.add("original-style")   
}

function turnOnRainbow(){
    rainbowButton.classList.remove("original-style")
    rainbowButton.classList.add("clicked-style")
}

function turnOnEraser(){
    eraseButton.classList.remove("original-style")
    eraseButton.classList.add("clicked-style")
}

// Reset Function

function reset(){
    erase = false
    rainbowColors = false
    clicker = false
    eraseOn = false
    rainbowOn = false
    turnOffEraser()
    turnOffRainbow()
}