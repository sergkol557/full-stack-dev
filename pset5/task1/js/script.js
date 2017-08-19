$(document).ready(

    $("#msg").submit(function (event) {

        event.preventDefault();
        var data = $("#msg-txt").text().html();
        console.log(data);
        var posting = $.post( "chat.php", { name: $('#name').val(), name2: $('#name2').val() } );

        posting.done(function( data ) {
            $("#msg-txt").html().text();
        });

    });
);