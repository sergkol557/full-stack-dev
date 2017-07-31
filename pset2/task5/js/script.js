function showYear() {
	var number = document.getElementById('year').value;

	if (number > 150) {
		alert('your age is much big');
		document.getElementById('year').value = '0';

	} else if (number == "") {
		alert('you must input age');
		document.getElementById('time').value = '0';

	} else {
		var years = ["лет", "год", "года", "года", "года", "лет", "лет", "лет", "лет", "лет"];

		document.getElementById('result').innerText = number + " " + years[ String(number).slice(-1) ];
	}
}
