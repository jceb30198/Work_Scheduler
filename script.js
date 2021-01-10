$(document).ready(function() {

    // Variables
    var timeBlock = $(".time-block")
    var am9 = $("#9");
    var am10 = $("#10");
    var am11 = $("#11");
    var pm12 = $("#12");
    var pm1 = $("#20");
    var pm2 = $("#21");
    var pm3 = $("#22");
    var pm4 = $("#23");
    var pm5 = $("#24");
    var saveBtn = $(".saveBtn");
    var hour = moment().hour();
    
    // Array to loop through
    var timeArr = [am9, am10, am11, pm12, pm1, pm2, pm3, pm4, pm5];

    // Displays date in the jumbotron
    var dateDisplay = $("#day");
    var date = moment().format("dddd, MMM Do YYYY, h:mm a");
    dateDisplay.text(date);

    // Function to change the classes of the time blocks
    function blockChange(x) {
        
        // Variable to grab the id number to compare with the hour
        var currentTime = x.attr("id");

        if (currentTime == hour) {
            x.addClass("present");
            x.removeClass("future");
        }
        else if (currentTime > hour) {
            x.addClass("future");
            x.removeClass("past");
        }
        else {
            x.addClass("past");
            x.removeClass("present");
        }
    };

    // For loops to repeat through the function
    for (let i = 0; i < timeArr.length; i++){
        blockChange(timeArr[i]);
    };
})