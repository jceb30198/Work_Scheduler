$(document).ready(function() {

    // Variables
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
    
    // Displays date in the jumbotron
    var dateDisplay = $("#day");
    var date = moment().format("dddd, MMM Do YYYY, h:mm a");
    dateDisplay.text(date);

    
    
})