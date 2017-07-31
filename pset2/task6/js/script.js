function countDate() {
	var first = new Date();
    first = Date.parse(document.getElementById('date1').value);

	var second = new Date();
	second = Date.parse(document.getElementById('date2').value);

    var diff = new Date(Math.abs(second - first))
    var years = Math.round(diff/(1000 * 60 * 60 * 24 * 365));

    diff -= years;

    var all_days = Math.round(diff/(1000 * 60 * 60 * 24));
    var months = Math.round(all_days/30);
    var days = all_days - months;

    diff -= all_days;

    var hours = Math.round(diff/(1000 * 60 * 60));

    diff -= hours;

    var minutes = Math.round(diff/(1000 * 60));

    diff -= minutes;

    var seconds = Math.round(diff/(1000 * 60));

    document.getElementById('result').innerHTML = 'Между датами прошло ' + years + ' лет, ' +
                                                                            months + ' месяца, ' +
                                                                            days + ' дня,' +
                                                                            hours + 'часов,' +
                                                                            minutes + 'минут,', +
                                                                            seconds + 'секунд.';
}
