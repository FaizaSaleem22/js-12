// q1
// var user = prompt("enter your name")
// function alertBox(a){
//     var greet = "Welcome " + a
//     alert(greet)
// }

// q2
function mobile(){
    alert("Thanks for purchasing a phone from us")
}

// q3

function deleteRow(e){
    // var row = e.closest("tr")
    // or
    var row = e.parentNode.parentNode
    row.remove()
}

// q5
var span = document.getElementById("number")
var count = Number(span.innerText)
console.log(span, count)
function increment(e){
    count += 1
    console.log(count)
    span.innerText= count
}
function decrement(e){
    count -= 1
    console.log(count)
    span.innerText= count
}
//  second method
var p = document.getElementById("num")
var counter = 0
function changeNumber(amount){
    counter = counter + (amount)
    p.innerText = counter
}