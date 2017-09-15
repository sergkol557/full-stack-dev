$(document).ready(function () {

	var msg2 = document.cookie.replace(/(?:(?:^|.*;\s*)usr_msg\s*\=\s*([^;]*).*$)|^.*$/, '$1');

	msg2 = msg2.split('+').join(' ');
	msg2 = decodeURI(msg2);



	if (msg2) {
		logChat('user receive msg - '+msg2);
		alert(msg2);
	}

	var login = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, '$1');
	login = login.split('+').join(' ');
	login = decodeURI(login);



	if(!login){
		logChat('illegal user redirected from chat.html');
		location.href = 'index.html';
	}

	$('#go').click(function () {
		sendMessage($('#text-msg').val());
	});

	$('html').keydown(function (event) {

		if (event.keyCode === 13) {
			sendMessage($('#text-msg').val());
		}
	});

	setInterval(sendMessage(), 1000);

});

function sendMessage(msg) {

	var html_coded = $('<div/>').text(msg).html();

	$.post('chat.php', {suggest: html_coded}, function (result) {
		if (msg) $("#text-msg").val('');
		if(msg) logChat('user send msg - '+msg);

		var $textarea = $('.textarea');
		$textarea.html(result);
		logChat('user retrieve message - ' + result);
		$textarea.scrollTop($textarea.prop('scrollHeight'));
	});
}
