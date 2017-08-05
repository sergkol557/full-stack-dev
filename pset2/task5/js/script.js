function showYear() {
	var number = document.getElementById('year').value;
	var element = document.getElementById('result');


	if (number > 150) {

        element.innerText = 'your age is much big';
		return;

	} else if (number == "") {

        element.innerText = 'you must input age';
		return;

	} else {
		var years = ["лет", "год", "года", "года", "года", "лет", "лет", "лет", "лет", "лет"];
		var last_digit = number % 10;

		if (last_digit == 0 || last_digit > 4 && last_digit <= 9) result = "лет";
		else if (last_digit > 1 && last_digit <5) result = "года";
		else result = "год";

		if ( parseInt(number % 100 /10) == 1) {
			result = "лет";
		}

		element.innerText = number + " " + result;
	}
}
