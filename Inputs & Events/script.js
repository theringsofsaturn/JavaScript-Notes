// Accessing input fields


// <input> tags are used for user interaction. 
// You can always read/overwrite their content accessing the value property of their JavaScript reference.



let myInput = document.getElementById('firstInput')
console.log(myInput.value) // OUTPUTS THE INPUT FIELD'S VALUE



// Define event listeners in HTML

<button onclick="myFunc(event)">CLICK ME</button>

// then you declare the function in JS
const myFunc = function(e) {
    alert('You clicked me')
}
