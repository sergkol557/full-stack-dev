function countSumm() {	
	var summ = 0;

	for (var i = -1000; i <= 1000; i++) {
		summ += i;
	}

	document.getElementById('result').innerText = summ;
}