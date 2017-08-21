$(document).ready(function(){

    $("#send").click(sendMessage($("#text-msg").val()));

    $("html").keydown(function (eventObject) {

		if (event.keyCode == 13) {
			sendMessage($("#text-msg").val());
		}
    });

    setInterval(sendMessage(), 60000);


});

function sendMessage(msg) {

	var html_coded = $('<div/>').text(msg).html().serialize();

	$.post("chat.php", {suggest: msg}, function(result) {
		if(msg) $("#text-msg").val("");

		$("textarea").html(data).text();
	});


}