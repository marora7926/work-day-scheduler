// LIVE DATE AND TIME DISPLAY ELEMENT
// reference to important DOM custom elements
var timeDisplayEl = $('#currentDay');

// adding the current day, date and time in the jubotron
function displayTime (){
    var liveDay = moment().format('dddd');
    var liveDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(liveDay + ", " + liveDateTime);
}

// updating seconds every second
setInterval(displayTime, 1000);

// MAIN DISPLAY ELEMENT
function timeBlock() {

    // this will extract integer value of curent hour
    var timeCurrent = moment().hour();
    console.log(timeCurrent);
    
     // loops as the day progress, the textarea changes the color using past, present and future css style
    $(".time-block").each(function (){    
     // this will extract the integer value of timeblockTime
    var timeblockTime = parseInt($(this).attr("id").split("hour")[1]);
    console.log(timeblockTime);

        // this will kepp the past class theme
        if (timeblockTime < timeCurrent) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        // this will kepp the present class theme
        }else if  (timeblockTime === timeCurrent){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        // this will kepp the future class theme    
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
};

$(document).ready(function () {
    timeBlock();

    function shadowPulseFunc () {
        
        // Shadow pulse variable for turning it off to start with
        var shadowPulseOff = $(".fas").removeClass("shadowPulse");
        // shadow pulse variable for turning it on after entering the data to prompt user to save
        var shadowPulseOn = $(".fas").addClass("shadowPulse");
        
        if ("<textarea>" === ""){
            shadowPulseOff = false;
        } else {
            shadowPulseOn = false;
        };
    }
    shadowPulseFunc();

    // save text botton with save icon
    $(".saveBtn").on("click",function(){
        var userText = $(this).siblings(".description").val();
        var userTime = $(this).parent().attr("id");
        localStorage.setItem(userText, userTime);
    })

    // get item from local storage to save in the textarea after presisng the save button
    function getTimeAndText(){
        $("#time9Am .description").val(localStorage.getItem("time9Am"));
        $("#time10am .description").val(localStorage.getItem("time10Am"));
        $("#time11Am .description").val(localStorage.getItem("time11Am"));
        $("#time12Pm .description").val(localStorage.getItem("time12Pm"));
        $("#time1Pm .description").val(localStorage.getItem("time1Pm"));
        $("#time2Pm .description").val(localStorage.getItem("time2Pm"));
        $("#time3Pm .description").val(localStorage.getItem("time3Pm"));
        $("#time4Pm .description").val(localStorage.getItem("time4Pm"));
        $("#time5Pm .description").val(localStorage.getItem("time5Pm"));
    };
})