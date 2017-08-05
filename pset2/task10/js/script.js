function countSumm() {
	
	var number = document.getElementById('number').value;
	var summ = 0;
	var i;

	if (number == "") {

		alert ('you must enter number');
		document.getElementById('number').value = 81;
		return;
	}

	for ( i = 0; number >= 1; i++ ) {

		summ += number % 10;
		number = parseInt(number / 10);
	}
	
	document.getElementById('result').innerText = 'Сумма цифр равна '+ summ;
}