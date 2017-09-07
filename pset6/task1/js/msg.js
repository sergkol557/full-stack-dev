$(document).ready(function () {

	var msg = document.cookie.replace(/(?:(?:^|.*;\s*)usr_msg\s*\=\s*([^;]*).*$)|^.*$/, '$1');

	msg = msg.split('\+').join(' ');

	if (msg) {
		alert(msg);
	}

});