$(document).ready(function () {

	var msg = document.cookie.replace(/(?:(?:^|.*;\s*)usr_msg\s*\=\s*([^;]*).*$)|^.*$/, '$1');

	msg = msg.split('\+').join(' ');
	msg = decodeURI(msg);



	if (msg) {
		logChat('user receive msg - '+msg);
		alert(msg);
	}

});