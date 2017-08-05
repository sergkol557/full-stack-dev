function countSumm() {	
	var summ = 0;
	var last_digit = 0;

	for (var i = -1000; i <= 1000; i++) {
		last_digit = Math.abs( i % 10);

		if ( last_digit == 2 || last_digit == 3 || last_digit ==7) {
			summ += i;
		}
	}

	document.getElementById('result').innerText = summ;
}