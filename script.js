// reference to important DOM custom elements
var timeDisplayEl = $('#currentDay');

// adding the current day, date and time in the jubotron
function displayTime (){
    var liveDay = moment().format('dddd');
    var liveDT = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(liveDay + ", " + liveDT);
}

// updating seconds every second
setInterval(displayTime, 1000);

// developing layout of the calender


// time-block and hour content


// form with textarea


// save botton with save icon and prompting user to save the text
// saving data from textarea to local storage after pressing the save button.


// repeat the same for X number of times 9am to 5pm


// as the day progress, the textarea changes the color usinf pasy, present and future css style

