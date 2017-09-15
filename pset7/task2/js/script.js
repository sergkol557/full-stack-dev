function replaceText() {
	var input_reg = document.getElementById('reg').value;
	var input_text = document.getElementById('textarea').innerText;
	var regul_expr = new RegExp (input_reg, 'g');
	var result_text = input_text.replace(regul_expr, '<mark>' +input_reg + '</mark>');

	document.getElementById('textarea').innerHTML = result_text;
}
