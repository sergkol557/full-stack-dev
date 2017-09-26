$(document).ready(function () {
	
	$('#msg__dialog-close').click(function () {
		$('#msg__dialog').hide();
	});

	var msg = document.cookie.replace(/(?:(?:^|.*;\s*)usr_msg\s*\=\s*([^;]*).*$)|^.*$/, '$1');

	msg = msg.split('+').join(' ');
	msg = decodeURI(msg);
	if (msg) {
		var dialog = $('#msg__dialog');
		dialog.find('p').text(msg);
		dialog.show();
		deleteCookie('usr_msg');
	}

	var login = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, '$1');
	login = login.split('+').join(' ');
	login = decodeURI(login);

	if(!login){
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

	setInterval(sendMessage, 1000);

});

function sendMessage(msg) {

	var html_coded = $('<div/>').text(msg).html();

	$.post('chat.php', {suggest: html_coded}, function (result) {
		if (msg) $("#text-msg").val('');

		var $textarea = $('.textarea');
		$textarea.html(result);
		$textarea.scrollTop($textarea.prop('scrollHeight'));
	});
}

function deleteCookie(name) {
	setCookie(name, "", {
		expires: -1
	})
}
