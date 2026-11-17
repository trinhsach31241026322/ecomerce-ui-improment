/* Exercise 10.2: basic jQuery selectors and methods */
var msg = $('#msgArea');
msg.val('here is some new text');

$('#msgArea').val('My class is ' + $('#msgArea').attr('class'));

var buttons = $('button');
buttons.css('background-color', 'red');

var temp = $('body');
temp.css('background-color', 'ivory');

$('.center-icons').addClass('selected');

// This replaces the #first row's contents, as shown in the exercise.
$('#first').html('new Title');
