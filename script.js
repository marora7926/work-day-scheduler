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
var timeblockTime = 0;
console.log(timeblockTime);

// loops as the day progress, the textarea changes the color using past, present and future css style
function timeBlock() {
    // var timeblockTime = parseInt($("hour"));
        if  (timeblockTime === timeCurrent){
            timeBlock.addClass("present")
        } else {
            timeBlock.addClass("future")
        }
}; 

// save botton with save icon and prompting user to save the text
$(".saveBtn").on("click",function(){
    var userText = $(this).siblings(".description").val();
    var userTime = $(this).parent().attr("id");
    localStorage.setItem(userText, userTime);
})

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