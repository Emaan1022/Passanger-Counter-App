// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count
let count = 0

function increment() {
    console.log("The button was clicked")
    count = count + 1
    document.getElementById("count-el").innerText = count
}
