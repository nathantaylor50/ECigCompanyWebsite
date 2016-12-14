$(document).ready(function() {

    var date = new Date();

    var currentDay = date.getDay();

    $('#weekly_schedule ul:eq(' + currentDay +')').children().first().addClass('today');
});
