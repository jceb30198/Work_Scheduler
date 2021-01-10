$(document).ready(function() {

    // Variables
    var am9 = $("#9");
    var am10 = $("#10");
    var am11 = $("#11");
    var pm12 = $("#12");
    var pm1 = $("#13");
    var pm2 = $("#14");
    var pm3 = $("#15");
    var pm4 = $("#16");
    var pm5 = $("#17");
    var saveBtn = $(".saveBtn");
    var hour = moment().hour();
    
    // Array to loop through
    var timeArr = [am9, am10, am11, pm12, pm1, pm2, pm3, pm4, pm5];

    // Displays date in the jumbotron
    var dateDisplay = $("#day");
    var date = moment().format("dddd, MMM Do YYYY, h:mm a");
    dateDisplay.text(date);

    // Function to change the classes of the time blocks
    function blockChange(array) {
        
        // Variable to grab the id number to compare with the hour
        var currentTime = array.attr("id");

        if (currentTime == hour) {
            array.addClass("present");
            array.removeClass("future");
        }
        else if (currentTime > hour) {
            array.addClass("future");
            array.removeClass("past");
        }
        else {
            array.addClass("past");
            array.removeClass("present");
        }
    };

    saveBtn.on("click", function() {
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, description);
        console.log(time);
    })
    
    
    // For loops to repeat through the function
    for (let i = 0; i < timeArr.length; i++){
        blockChange(timeArr[i]);
    };
})