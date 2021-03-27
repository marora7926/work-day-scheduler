// reference to important DOM custom elements
var timeDisplayEl = $('#currentDay');

// adding the current day, date and time in the jubotron
function displayTime (){
    var liveDDT = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(liveDDT);
}

// updating seconds every second.
setInterval(displayTime, 1000);