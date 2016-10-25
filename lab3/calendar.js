/**
 * @file
 * Handles Calendar generation
 */

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
    var d = new Date();
    var mth = d.getMonth()+1;
    var yr = d.getFullYear();

    $("#month").val(mth);
    $("#year").val(yr);

    showCalendar (mth, yr);

    $("#month,#year").change(function(e) {
        showCalendar($("#month").val(), $("#year").val());
    });

    $('input[value="All Month Available"]').click(function(){
        $('.clickable').removeClass('unavailable');
        $('.clickable').addClass('available');
        $('.clickable').addClass('scheduled');
    });

    $('input[value="All Month UnAvailable"]').click(function(){
        $('.clickable').removeClass('available');
        $('.clickable').addClass('unavailable');
        $('.clickable').addClass('scheduled');

    });
});

function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}

function showCalendar (mth, yr) {
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    // Added this for easier rendering
    var weekRows = Math.ceil( (numberOfDaysInMonth + firstDayOfWeek + 1) / 7);

    // Added this to keep track of our current display date
    var day = 1;
    var currentDayOfTheWeek = firstDayOfWeek;

    // Add in debugging
    var str = "";
    str += "Number of days in the month: " + numberOfDaysInMonth + "\n";
    str += "First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")\n";
    str += "Rows to generate: " + weekRows + "\n";

    $("#debug").html(str);

    // Empties current calendar
    $("#results").html('');

    // Create Week Rows
    for (var week = 0; week < weekRows; week++) {
        var dayMarkup = '';

        if (day == 1) {
            for (var i = 0; i < firstDayOfWeek; i++) {
                dayMarkup += '<div class="day"></div>';
            }
        }

        for (var weekDay = currentDayOfTheWeek; weekDay < 7; weekDay++) {
            if (day <= numberOfDaysInMonth) {
                dayMarkup += '<div class="day clickable">' + day + '</div>';
            }
            else {
                dayMarkup += '<div class="day"></div>';
            }

            day +=1;
        }

        // Reset to zero at the end of generating a week
        currentDayOfTheWeek = 0;
        $("#results").append('<div class="row" id="row-' + week + '">' + dayMarkup + '</div>');
    }

    $('.clickable').click(function(){
        var $clickable = $(this);

        if ($clickable.hasClass('scheduled')) {
            if ($clickable.hasClass('available')) {
                $clickable.removeClass('available');
                $clickable.addClass('unavailable');
            }
            else {
                $clickable.removeClass('unavailable');
                $clickable.removeClass('scheduled');
            }
        }
        else {
            $(this).addClass('available');
            $(this).addClass('scheduled');
        }
    });
}
