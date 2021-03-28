// reference to important DOM custom elements
var timeDisplayEl = $('#currentDay');
var timeBlock = $('time-block');

// adding the current day, date and time in the jubotron
function displayTime (){
    var liveDay = moment().format('dddd');
    var liveDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(liveDay + ", " + liveDateTime);
}

// updating seconds every second
setInterval(displayTime, 1000);

// developing layout of the calender
// setting variable in global scope.
var textareaArrays = "";
var storedText = "";


$(document).ready(function(){
});
// time-block and hour content


// form with textarea


// save botton with save icon and prompting user to save the text
// saving data from textarea to local storage after pressing the save button.

// loops as the day progress, the textarea changes the color using past, present and future css style
var timeCurrent = moment().hour();

function timeBlock() {
    var timeblockTime = parseInt($("hour"));
        if  (timeblockTime === timeCurrent){
            timeBlock.addClass("present")
        } else {
            timeBlock.addClass("future")
        }
}; 
