$(document).ready(function () {

	var msg = document.cookie.replace(/(?:(?:^|.*;\s*)usr_msg\s*\=\s*([^;]*).*$)|^.*$/, '$1');

	$('#msg__dialog-close').click(function () {
		$('#msg__dialog').hide();
	});

	msg = msg.split('\+').join(' ');
	msg = decodeURI(msg);

	if (msg) {
		var dialog = $('#msg__dialog');
		dialog.find('p').text(msg);
		dialog.show();
		deleteCookie('usr_msg');
	}

});

function deleteCookie(name) {
	document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};