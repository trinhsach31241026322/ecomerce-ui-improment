/* put your DOM code here */

$(function () {
    // Create a new DOM element.
    var img = $('<img src="images/art/thumbs/13030.jpg">');

    // Insert it immediately before the panel.
    var panel = $('.panel');
    img.insertBefore(panel);
});
