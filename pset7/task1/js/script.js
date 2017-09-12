var ip_reg = new RegExp('^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$', 'i');
var url_reg = new RegExp('^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)','g');
var email_reg = new RegExp('^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$','i');
var date_reg = new RegExp('(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d','i');
var time_reg = new RegExp('^([0-1]\\d|2[0-3])(:[0-5]\\d){2}$','i');

$(document).ready(function () {

	$('#submit').click(function (event) {
			event.preventDefault();

			if(validateField('ip', ip_reg) &&
				validateField('url', url_reg)&&
				validateField('email', email_reg)&&
				validateField('date', date_reg)&&
				validateField('time', time_reg)
			){
				$.post( "validation.php",
					{
						ip: document.getElementById('ip').value,
						url: document.getElementById('url').value,
						email: document.getElementById('email').value,
						date: document.getElementById('date').value,
						time: document.getElementById('time').value
					})
					.done(function( response ) {
						alert( "php validation: " + response );
					});
			} else {
				alert( "js validation: not valid");
			}
	});

});

function validateField(field ,field_reg) {
	var field_value = document.getElementById(field).value;
	if(!field_value){
		return false;
	}

	var check_field = field_value.match(field_reg);
	if(check_field[0] !== field_value){
		console.log(field + ' ' + field_value + ' ' + check_field[0]);
		return false;
	}
	return true;
}
