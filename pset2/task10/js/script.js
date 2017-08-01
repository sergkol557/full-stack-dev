function countSumm() {
	
	var number = document.getElementById('number').value;
	var len = number.toString(number).length;
	var summ = 0;
	var i;

	if (number == "") {

		alert ('you must enter number');
		document.getElementById('number').value = 81;
		return;
	}

	for ( i = 0; i < number.toString(number).length; i++ ) {

		summ += Number(number.charAt(i));
	}
	
	document.getElementById('result').innerText = 'Сумма цифр равна '+ summ;
}