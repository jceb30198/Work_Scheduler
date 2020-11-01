$(document).ready(function() {

    // Variables
    var currentDay = $("#currentDay");
    var timeBlock = $(".time-block");
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
    
    // This function will change the color if the time is different
    function colorChange() {
        
        timeBlock.each(function () {
            var hour = moment().hour();
            var scheduleTime = $(this).attr("id");
            
            if (scheduleTime > hour) {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
            else if (scheduleTime == hour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            console.log(this);
            console.log(scheduleTime);
        })
    }
    
    // Click to save the text from textarea to storage
    saveBtn.on("click", function() {
        var description = $(this).siblings(".description").val();
        var scheduleTime = $(this).parent().attr("id");
        
        localStorage.setItem(scheduleTime, description);
        
        console.log(this);
        console.log(description);
    })
    
    // This is where all of the data is stored
    $(".description").val(localStorage.getItem(am9));
    $(".description").val(localStorage.getItem(am10));
    $(".description").val(localStorage.getItem(am11));
    $(".description").val(localStorage.getItem(pm12));
    $(".description").val(localStorage.getItem(pm1));
    $(".description").val(localStorage.getItem(pm2));
    $(".description").val(localStorage.getItem(pm3));
    $(".description").val(localStorage.getItem(pm4));
    $(".description").val(localStorage.getItem(pm5));
    
    // This determines the current time display in the Jumbotron
    currentDay.text(moment().format("dddd, MMMM Do YYYY"));

    // Calls the function to run
    colorChange();
})