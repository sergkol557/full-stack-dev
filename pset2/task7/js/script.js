function learn_sign() {
	var date = document.znak_zodiac.your_date.value;
	var this_month = document.znak_zodiac.your_month.selectedIndex;
	var result = "Неверная дата!";

	if (this_month == 1 && date >= 20 || this_month == 2 && date <= 18) result = "Водолей";
	else if (this_month == 2 && date >= 19 || this_month == 3 && date <= 20) result = "Рыбы";
	else if (this_month == 3 && date >= 21 || this_month == 4 && date <= 19) result = "Овен";
	else if (this_month == 4 && date >= 20 || this_month == 5 && date <= 20) result = "Телец";
	else if (this_month == 5 && date >= 21 || this_month == 6 && date <= 21) result = "Близнецы";
	else if (this_month == 6 && date >= 22 || this_month == 7 && date <= 22) result = "Рак";
	else if (this_month == 7 && date >= 23 || this_month == 8 && date <= 22) result = "Лев";
	else if (this_month == 8 && date >= 23 || this_month == 9 && date <= 22) result = "Дева";
	else if (this_month == 9 && date >= 23 || this_month == 10 && date <= 22) result = "Весы";
	else if (this_month == 10 && date >= 23 || this_month == 11 && date <= 21) result = "Скорпион";
	else if (this_month == 11 && date >= 22 || this_month == 12 && date <= 21) result = "Стрелец";
	else if (this_month == 12 && date >= 22 || this_month == 1 && date <= 19) result = "Козерог";
	else result = "Неверная дата!";

	if ((date<1)||(this_month == 2 && date>29)) result = "Неверная дата!";
	if ((this_month == (1||3||5||7||8||10||12)) && date>31) result = "Неверная дата!";
	if ((this_month == (4||6||9||11)) && date>30) result = "Неверная дата!";
	
	document.getElementById('znak').value = result;
}