function learn_sign() {
	var date = document.getElementById('day').value;
	var this_month = document.getElementById('month').value;
	var result = "";
	var image_src = "img/";

	if (this_month == 1 && date >= 20 || this_month == 2 && date <= 18) {
		result = "Водолей";
		image_src += "Aquarius.png"
    }
	else if (this_month == 2 && date >= 19 || this_month == 3 && date <= 20) {
		result = "Рыбы";
        image_src += "Pisces.png"
    }
	else if (this_month == 3 && date >= 21 || this_month == 4 && date <= 19) {
		result = "Овен";
        image_src += "Aries.png"
    }
	else if (this_month == 4 && date >= 20 || this_month == 5 && date <= 20) {
		result = "Телец";
        image_src += "Taurus.png"
    }
	else if (this_month == 5 && date >= 21 || this_month == 6 && date <= 21) {
		result = "Близнецы";
        image_src += "Gemini.png"
    }
	else if (this_month == 6 && date >= 22 || this_month == 7 && date <= 22) {
		result = "Рак";
        image_src += "Cancer.png"
    }
	else if (this_month == 7 && date >= 23 || this_month == 8 && date <= 22) {
		result = "Лев";
        image_src += "Leo.png"
    }
	else if (this_month == 8 && date >= 23 || this_month == 9 && date <= 22) {
		result = "Дева";
        image_src += "Virgo.png"
    }
	else if (this_month == 9 && date >= 23 || this_month == 10 && date <= 22) {
		result = "Весы";
        image_src += "Libra.png"
    }
	else if (this_month == 10 && date >= 23 || this_month == 11 && date <= 21) {
		result = "Скорпион";
        image_src += "Scorpio.png"
    }
	else if (this_month == 11 && date >= 22 || this_month == 12 && date <= 21) {
		result = "Стрелец";
        image_src += "Sagittarius.png"
    }
	else if (this_month == 12 && date >= 22 || this_month == 1 && date <= 19) {
		result = "Козерог";
        image_src += "Capricorn.png"
    }
	else result = "Неверная дата!";

	if ((date<1)||(this_month == 2 && date>29)) result = "Неверная дата!";
	if ((this_month == (1||3||5||7||8||10||12)) && date>31) result = "Неверная дата!";
	if ((this_month == (4||6||9||11)) && date>30) result = "Неверная дата!";
	
	document.getElementById('znak').value = result;
    document.getElementById("zodiac_image").src = image_src;
}

function checkMonth() {
	var month = document.getElementById('month').value;

	if (month < 1 || month > 12) {
        document.getElementById('month').value = "";
	}
}

function checkDay() {
    var day = document.getElementById('day').value;

    if (day < 1 || day > 31) {
        document.getElementById('day').value = "";
    }
}