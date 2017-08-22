$(document).ready(function(){

    $('#go').click(function () {
        sendMessage($("#text-msg").val());
    });

    $("html").keydown(function (event) {

		if (event.keyCode == 13) {
			sendMessage($("#text-msg").val());
		}
    });

    setInterval(sendMessage(), 60000);


});

function sendMessage(msg) {

	var html_coded = $('<div/>').text(msg).html();

	$.post("chat.php", {suggest: html_coded}, function(result) {
		if(msg) $("#text-msg").val("");
		
		$(".textarea").html(result);
		$(".textarea").scrollTop($(".textarea").prop('scrollHeight'));
	});


}