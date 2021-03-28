// reference to important DOM custom elements
var timeDisplayEl = $('#currentDay');
// var hour1 = parseInt("hour": 0);

// adding the current day, date and time in the jubotron
function displayTime (){
    var liveDay = moment().format('dddd');
    var liveDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(liveDay + ", " + liveDateTime);
}

// updating seconds every second
setInterval(displayTime, 1000);

// $(document).ready(function(){
// });

// time-block and hour content
// this will extract integer value of hour
var timeCurrent = moment().hour();
console.log(timeCurrent);

// this will extract the integer value of timeblockTime
var timeblockTime = parseInt($(this).attr("id"));
console.log(timeblockTime);

// loops as the day progress, the textarea changes the color using past, present and future css style
function timeBlock() {
    // var timeblockTime = parseInt($("hour"));
        if  (timeblockTime === timeCurrent){
            timeBlock.removeClass("past")
            timeBlock.addClass("present")
        } else {
            timeBlock.removeClass("past")
            timeBlock.removeClass("present")
            timeBlock.addClass("future")
        }
}; 

// Shadow pulse off to start with
var shadowPulseOff = $(".fas").removeClass("shadowPulse");

// save text botton with save icon
$(".saveBtn").on("click",function(){
    var userText = $(this).siblings(".description").val();
    var userTime = $(this).parent().attr("id");
    localStorage.setItem(userText, userTime);
})

// shadow pulse on after after entering the data to prompt user to save
var shadowPulseOn = $(".fas").addClass("shadowPulse");

// get item from local storage to save in the textarea after presisng the save button
function getTimeAndText(){
    $("#Time9Am .description").val(localStorage.getItem("Time9Am"));
    $("#Time10am .description").val(localStorage.getItem("Time10Am"));
    $("#Time11Am .description").val(localStorage.getItem("Time11Am"));
    $("#Time12Pm .description").val(localStorage.getItem("Time12Pm"));
    $("#Time1Pm .description").val(localStorage.getItem("Time1Pm"));
    $("#Time2Pm .description").val(localStorage.getItem("Time2Pm"));
    $("#Time3Pm .description").val(localStorage.getItem("Time3Pm"));
    $("#Time4Pm .description").val(localStorage.getItem("Time4Pm"));
    $("#Time5Pm .description").val(localStorage.getItem("Time5Pm"));
};