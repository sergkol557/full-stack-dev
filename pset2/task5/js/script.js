function showYear() {
	var number = document.getElementById('year').value;


	if (number > 150) {

		document.getElementById('result').innerText = 'your age is much big';
		return;

	} else if (number == "") {
		
		document.getElementById('result').innerText = 'you must input age';
		return;

	} else {
		var years = ["лет", "год", "года", "года", "года", "лет", "лет", "лет", "лет", "лет"];
		var result = years[ String(number).slice(-1) ];

		if ( number.toString(number).length > 1 && String(number).slice(-2, -1) == 1) {

			result = "лет";
		}

		document.getElementById('result').innerText = number + " " + result;
	}
}
