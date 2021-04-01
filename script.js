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
$(document).ready(function () {
    
    function timeBlock() {
        // this will extract integer value of curent hour
        var timeCurrent = moment().hour();
        console.log(timeCurrent);
        
        // loops as the day progress, the textarea changes the color using past, present and future css style
        $(".time-block").each(function (){    
        // this will extract the integer value of timeblockTime
        var timeblockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(timeblockTime);

            // this will keep the past class theme
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
    

    // function shadowPulseOff () {        
    // Shadow pulse variable for turning it off to start with
    // $(".fas").removeClass("shadowPulse");
    // $(“fas”).removeClass(“fas”)
    // $(this).addClass(“faspulse”)
        
    // shadow pulse variable for turning it on after entering the data to prompt user to save
    // var shadowPulseOn = $(".fas").addClass("shadowPulse");
        
    // if ("<textarea>" === ""){
    //     shadowPulseOff = true;
    // } else {
    //     shadowPulseOn = false;
    // };
    // }

    // alerting the user to press the save button everytime they enter a new text or add to the existing text.
    $("textarea").change(function() {
        alert("save these detials by clicking the save button" );
    });

    // save input and time to local storage after presisng the save button
    $(".saveBtn").on("click", function(){
        var userText = $(this).siblings(".description").val(); //get the nearby sibling value
        var userTime = $(this).parent().attr("id");
        localStorage.setItem(userTime, userText);
    })

    // get item from local storage to save in the textarea after presisng the save button
    $("#time9Am .description").val(localStorage.getItem("time9Am"));
    $("#time10Am .description").val(localStorage.getItem("time10Am"));
    $("#time11Am .description").val(localStorage.getItem("time11Am"));
    $("#time12Pm .description").val(localStorage.getItem("time12Pm"));
    $("#time1Pm .description").val(localStorage.getItem("time1Pm"));
    $("#time2Pm .description").val(localStorage.getItem("time2Pm"));
    $("#time3Pm .description").val(localStorage.getItem("time3Pm"));
    $("#time4Pm .description").val(localStorage.getItem("time4Pm"));
    $("#time5Pm .description").val(localStorage.getItem("time5Pm"));

    timeBlock();
})