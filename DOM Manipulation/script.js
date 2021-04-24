// Document methods for selecting HTML elements


// getElementById

// If the element has a unique id property, you can select it with:


document.getElementById('putTheIdHere')

document.getElementById('myButton') // example


// It will always return at most ONE reference to ONE element in the page.


// getElementsByClassName
// If some elements do have a common class property, you can select them with:



document.getElementsByClassName('putTheClassHere')

document.getElementsByClassName('row') // example‌


// It will return an array of elements which have the selected class (even if just one element is found).
