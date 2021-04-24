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


// getElementsByTagName
// With this method you can select all the elements with a specific tag (i.e. h1, div, p etc.):



document.getElementsByTagName('putTheTagHere')

document.getElementsByTagName('div') // example


// It will return an array of elements which have the selected tag (even if just one element is found).


// querySelector
// With this method you can select an element using a CSS selector:



document.querySelector('putTheCssSelectorHere')

document.querySelector('div .row #myButton') // example


// It will return at most ONE reference to ONE element in the page.


// querySelectorAll
// With this method you can select many elements using a CSS selector



document.querySelectorAll('putTheCssSelectorHere')

document.querySelectorAll('div .row') // example


// It will return an array of elements matching your CSS selector (even if just one element is found).


// Popular element properties

// Once you select an element from the page, you can manipulate it changing its properties.

// The most popular are:


// element.innerText
// This property holds the text value contained in the element.



let myParagraph = document.getElementById('firstParagraph')

console.log(myParagraph.innerText) // WILL OUTPUT THE CURRENT TEXT IN THE ELEMENT
myParagraph.innerText = 'I got changed' // ASSIGN IT TO CHANGE ITS VALUE

// The value can be read accessing the property, or can be overwritten assigning it to another string.



// element.innerHTML
// This property holds the HTML content of the element.



let myDiv = document.getElementById('firstDiv')

console.log(myParagraph.innerHTML) // WILL OUTPUT THE CURRENT HTML IN THE ELEMENT
myParagraph.innerHTML = '<span>I got changed</span>' // ASSIGN IT TO CHANGE ITS VALUE


// The HTML content inside the selected element can be read accessing the property, or can be overwritten assigning it to another string.





