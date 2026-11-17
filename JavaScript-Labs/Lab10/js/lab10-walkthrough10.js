$(function () {
    $('.animLoading').hide();

    $('#consume').click(function () {
        $('.animLoading').show();
        $('#results ul').empty();

        var url = 'http://www.randyconnolly.com/funwebdev/services/travel/cities.php';

        $.get(url)
            // Handle a successful response.
            .done(function (data) {
                $.each(data, function (index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo('div#results ul');
                });
            })
            // Report request failures.
            .fail(function (xhr, status, error) {
                alert('failed loading data - status=' + status + ' error=' + error);
            })
            // Always hide the loading indicator after the request finishes.
            .always(function () {
                $('.animLoading').fadeOut('slow');
            });
    });
});
