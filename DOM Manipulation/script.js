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


// element.classList
// This property holds all the CSS classes assigned to the element.



let myHeading = document.getElementsByTagName('h1')[0]

myHeading.classList.add("new-class") // adds a class of "new-class" to the heading


// You can also use the property className for directly access or set the classes in a string form.


// element.style
// This property holds all the CSS properties of the element.



let myHeading = document.getElementsByTagName('h1')[0]

myHeading.style.color = 'red' // CHANGES THE H1 TEXT COLOR


// Every CSS property of the element can be accessed with its name written in camelCase (ex.: backgroundColor, fontSize, width). 
// You can read its value or overwrite it.


// How to create new HTML elements with JS
// ‌

// For creating new elements in the DOM, use the createElement method in the document object.



let myNewParagraph = document.createElement('p')


// You just created a new paragraph from scratch! But right now it doesn't have any content and it's not appended anywhere in the page 
// (so it's not visible in the browser).



// using the innerText property I can add some content to my empty paragraph
myNewParagraph.innerText = "Let's add some text to this new paragraph"

// using the style property I can change the font weight
myNewParagraph.style.fontWeight = 600

// finally let's append this paragraph at the end of our page
document.querySelector('body').appendChild(myNewParagraph)


// With appendChild(element) you can insert an element as the last child of another element (the parent).



// With removeChild(element) you can delete an element from the DOM. Must be invoked from the parent element, 
// with a reference to the element to remove as the parameter.





