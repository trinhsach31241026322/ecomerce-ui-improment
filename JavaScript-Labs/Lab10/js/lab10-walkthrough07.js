/* put your animation code here */

$(function () {
    $('figure img').on('mouseover', function () {
        // Build the larger preview filename from the hovered image.
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace('small', 'medium');

        // Add a preview image and caption to the page.
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');
        preview.append(image);
        preview.append(caption);
        $('body').append(preview);

        $(this).addClass('gray');
        $('#preview').fadeIn(1000);
    });

    $('figure img').on('mouseleave', removePreview);
    $('figure img').on('mousemove', movePreview);
});

function removePreview() {
    $(this).removeClass('gray');
    $('#preview').remove();
}

function movePreview(e) {
    $('#preview')
        .css('top', (e.pageY - 10) + 'px')
        .css('left', (e.pageX + 30) + 'px');
}
