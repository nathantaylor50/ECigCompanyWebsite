$(document).ready(function() {

    var date = new Date();

    var currentDay = date.getDay();

    $('#weektimes li:eq(' + currentDay +')').addClass('highlightDay');
});
