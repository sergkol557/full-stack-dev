function countSumm() {	
	var summ = 0;

	for (var i = -1000; i <= 1000; i++) {

		if ( String(i).endsWith('2') || String(i).endsWith('3') || String(i).endsWith('7')) {
			summ += i;
		}
	}

	document.getElementById('result').innerText = summ;
}