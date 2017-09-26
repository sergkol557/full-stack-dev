$(document).ready(function () {

	getData('json');

	$('.js-sources').click(function () {
		$('.active').removeClass('active');
		var sourceButton = $(this);
		sourceButton.addClass('active');
		getData(sourceButton.data('source'));
	});

	function getData(dataType) {

		$.get('main.php?data=' + dataType, function (result) {
			clearPage();
			pushUrl(dataType);
			var weatherList = '';
			for (var key in result) {
				var weatherInfo = result[key];
				if (typeof (weatherInfo) === 'object') {
					weatherList = weatherList +
						'<div class="hourly-forecast clearfix">' +
						'<div class="forecast-date">' + toTime(weatherInfo['time']) + '</div>' +
						'<div class="forecast-weather">' +
						'<div class="forecast-temperature">' + weatherInfo['temp'] + '&deg;</div>' +
						'<div class="forecast-icon">' +
						'<img id="cur_weather_img" height="45" src="' + 'icons/' + getImage(weatherInfo['weather']) + '">' +
						'</div>' +
						'</div>' +
						'</div>';

				}
			}
			$('#forecast').append(weatherList);

			$('.date').html(toCurrentTime(result['cur_time']));
			$('.current-temperature').html(result['cur_temp']);
			$('#cur_weather_img').attr('src', 'icons/' + getImage(result['cur_weather']));
		})
	}
});

var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function toCurrentTime(seconds) {
	var date = new Date(seconds * 1000);

	return weekday[date.getDay()] + '<br>' + date.getDate() + '/' + date.getMonth();
}

function toTime(seconds) {
	var date = new Date(seconds * 1000);

	return addZero(date.getHours()) + ':00 ' + weekday[date.getDay()] + ' ' + date.getDate() + '/' + date.getMonth();
}

function addZero(time) {
	return time < 10 ? '0' + time : time;
}

function getImage(weather) {
	if (weather === 'sunny') {
		return '01.png';
	} else if (weather === 'rainy') {
		return '03.png';
	} else if (weather === 'snowy') {
		return '04.png';
	} else if (weather === 'cloudy') {
		return '02.png';
	}
}

function clearPage() {
	$('#forecast').html('');
	$('#current_temperature').html('');
	$('#date').html('');
}

function pushUrl(queryType) {
	history.pushState({name:queryType}, '', '?data='+queryType);
}
