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
    
    // Displays date in the jumbotron
    var dateDisplay = $("#day");
    var date = moment().format("dddd, MMM Do YYYY");
    dateDisplay.text(date);
    
    // Saves the items to local storage
    saveBtn.on("click", function() {
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, description);
    });

    // Function to change the classes of the time blocks
    function blockChange() {
        
        // Array to loop through
        var timeArr = [am9, am10, am11, pm12, pm1, pm2, pm3, pm4, pm5];
        
        // Loop through array to change colors of the time blocks and get stored information
        for(let i = 0; i < timeArr.length; i++) {    
            // Variable to grab the id number to compare with the hour and the description of the hour
            var workTime = timeArr[i].attr("id");
            var hourDesc = timeArr[i].children(".description");

            if (workTime == hour) {
                timeArr[i].addClass("present");
                timeArr[i].removeClass("future");
                hourDesc.val(localStorage.getItem(workTime));
            }
            else if (workTime > hour) {
                timeArr[i].addClass("future");
                timeArr[i].removeClass("past");
                hourDesc.val(localStorage.getItem(workTime));
            }
            else {
                timeArr[i].addClass("past");
                timeArr[i].removeClass("present");
                hourDesc.val(localStorage.getItem(workTime));
            }
        }    
    };

    // Function being called
    blockChange();
});