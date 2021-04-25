// Date Object methods, DOM Manipulation, Working with Arrays
// Not completed yet
// How to use Date objects in Javascript:
// MDN reference: https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Date



// the way in which we can extract the current date and time is by invoking the Date() constructor:

let now = new Date();


// we also have methods to use with Date objects such as: 

now.getFullYear();
now.getMonth();
now.getDate();
// that will return respectively:

// year number (eg. 1970)
// month number (from 0 to 11), I know, very strange indeed!
// the day number (from 1 to 31)


// Grabbing the total number of days in the current month
// In the project we are using a trick to extract dynamically the exact number of days in the current month by using this code:

new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()


// so you can use parameters in the Date() function to create a date object for a different date/time in the past or the future.



// by using:

new Date(2021, 11, 0)
// we are asking to create a date string with 2021 as a year, 11 as December, and with 0 we are asking to go back 1 day from that month 1st day.



// that's why we get back this:

// Tue Nov 30 2021 00:00:00 GMT+0100
// November 30th 2021. 

// And that's the trick to get the total number of days of a particular month. 

// You'd use now.getMonth() + 1 to grab the next month, just to go back one day and get the last day of the previous month, hence the number of days in the current month!



// of course we could use it regularly to just grab any particular day like:

new Date(2021, 11, 25)
// for Christmas 2021:

// Sat Dec 25 2021 00:00:00 GMT+0100


// Create as many cells as there are days in the month
// we save the numberOfDays in a variable, grab the reference of the calendar div,

// then use a for loop that will stop when i < numberOfDays, creating as many day cells as the numberOfDays.

const now = new Date();

const numberOfDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

let calendar = document.querySelector("#calendar");

for (let i = 0; i < numberOfDays; i++) {
    const cell = document.createElement("div");
    calendar.appendChild(cell);
}


// Add class to show border on the selected day



// inside the previous for loop we write:

child.onclick = function (event) {

    let selected = document.querySelector(".selected");

    if (selected) {
        selected.classList.remove("selected");
    }

    event.currentTarget.classList.add("selected");
}
// an onclick event that for every day pressed will check if there's another day .selected, if there is we remove the class from there, and add it to the day that we've actually pressed.

// "selected" class needs some CSS styling to be seen, of course.


// Adding Appointments
// For instance we need a top level variable to store the main Array for the appointments:

let appointments = [];
// this is going to be the "memory" of our appointments, untill we refresh the page.



// inside the previous for loop we are going to create as many sub arrays as we have days in the month:

appointments[i] = [];


// by using the index of the for loop we are basically creating one new empty array for each day inside of the first "appointments" array.

// Something like this:

[
    [], [], [], [], [], [], [],
    [], [], [], [], [], [], [],
    [], [], [], [], [], [], [],
    ...
]
// with each day having its own empty array ready to be filled with appointments.*



// We now need to update #newMeetingDay element with the day number, so that we can retrieve it inside of the next saveMeeting function. 

// In the previous child.onclick function add:

// document.querySelector("#meeting-day").innerText = i + 1;
// this will add the index value of the for loop we are in as innerText, + 1 to have a 1 based notation number (we want to avoid having a 0 for the first day).



// we then create the saveMeeting function to compose our meeting string by using values from the appoinment's section inputs and push them in the correct sub-array of the appointments array (*one of the aformentioned):

const saveMeeting = function () {
    const meetingDay = document.querySelector("#meeting-day").innerText;
    let meetingTime = document.querySelector("#meeting-time");
    let meetingName = document.querySelector("#meeting-name");
    // input values get stored

    let calendar = document.querySelector("#calendar");

    let dayCell = calendar.children[parseInt(meetingDay) - 1];

    appointments[parseInt(meetingDay) - 1].push(meetingTime.value + " - " + meetingName.value);

    meetingTime.value = "";
    meetingName.value = "";
    //resets the inputs
};
// You can see sometimes -1 used to go back to the 0 based notation (1 --> 0), in order to select correctly the array's element starting from 0, because the day value is using a 1 based notation and starts from 1 while arrays starts from 0 and we want to sync the two elements order.



// Show Appointments
// we need to create a function showAppointments that is going to be triggered when a day is clicked and received the day number as an arguement.

const showAppointments = function (day) {

    let todaysAppointments = appointments[day - 1];

    document.querySelector("#appointments").style.display = "block";
    let appointmentList = document.querySelector("#appointmentList");

    appointmentList.innerHTML = "";

    for (let i = 0; i < todaysAppointments.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = todaysAppointments[i];
        appointmentList.appendChild(li);
    }
};


// We receive the day from where the function will be called. todaysAppointments will store the content of the sub-array of the corresponding array for that day in the appointments array: appointments[day - 1]



// we then:

// make the #appointments div visible with a display: block;
// grab the <ul id="appointment-list"> to use later to append multiple <li>
// make sure that the list starts empty before adding list items
// create a for loop to draw in the page as many <li> as there are appointments in the day's array: todaysAppointments[i]

