let newNumbers = []

let randomsNumbers = () => {
     
    }
console.log(randomsNumbers())

window.onload = function(){
    let insideOf = document.getElementById("containerOfNumbers")
    for ( let i = 0; i < 25; i++){
        newNumbers[i] = []
    
    const child = document.createElement("div")
    child.className = "randomingNumber"

    child.onclick = function() {
        let selected = document.getElementById("Randomize")
        selected= Math.floor ((Math.random() * 76)) + 1
        return selected
    }
    const showing = document.createElement("h3")
    const numberOfTable = i + 1;
    showing.innerText = numberOfTable

    child.appendChild(showing)
    insideOf.appendChild(child)


    }
}
