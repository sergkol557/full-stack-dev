$(document).ready(function(){

	var msg = document.cookie.replace(/(?:(?:^|.*;\s*)usr_msg\s*\=\s*([^;]*).*$)|^.*$/, "$1");

	msg = msg.split('+').join(' ');

	if (msg){
		alert (msg);
	}

	$('#go').click(function () {
		sendMessage($("#text-msg").val());
	});

	$("html").keydown(function (event) {

		if (event.keyCode == 13) {
			sendMessage($("#text-msg").val());
		}
	});

	setInterval(sendMessage(), 3000);

});

function sendMessage(msg) {

	var html_coded = $('<div/>').text(msg).html();

	$.post('chat.php', {suggest: html_coded}, function(result) {
		if(msg) $("#text-msg").val("");
		
		$(".textarea").html(result);
		$(".textarea").scrollTop($(".textarea").prop('scrollHeight'));
	});


}