function countDate() {
	var first = new Date();
	first = Date.parse(document.getElementById('date1').value);

	var second = new Date();
	second = Date.parse(document.getElementById('date2').value);

	if (isNaN(first) || isNaN(second)) {
		alert('wrong date format');
		document.getElementById('date1').value = "October 13, 2014 11:13:00";
		document.getElementById('date2').value = "October 14, 2014 11:13:00";

		return;
	}

	var diff = new Date(Math.abs(second - first))
	var years = parseInt(diff/(1000 * 60 * 60 * 24 * 365));

	diff -= years * 1000 * 60 * 60 * 24 * 365;

	var all_days = parseInt(diff/(1000 * 60 * 60 * 24));
	var months = parseInt(all_days/30);
	var days = all_days - months;

	diff -= all_days * 1000 * 60 * 60 * 24;

	var hours = parseInt(diff/(1000 * 60 * 60));

	diff -= hours * 1000 * 60 * 60;

	var minutes = parseInt(diff/(1000 * 60));

	diff -= minutes * 1000 *60;

	var seconds = parseInt(diff/(1000));

	document.getElementById('result').innerText = 'Между датами прошло ' + 
													years + ' лет, ' +
													months + ' месяцев, ' +
													days + ' дня, ' +
													hours + ' часов, ' +
													minutes + ' минут, ' +
													seconds + ' секунд.';
}
