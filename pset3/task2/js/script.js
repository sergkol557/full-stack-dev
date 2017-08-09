var top_show = 100;
var delay = 1000;

$(document).ready(function () {

	if ($(this).scrollTop() > top_show) $('#top').fadeIn();
	else $('#top').fadeOut();

	$(window).scroll(function () {
		if ($(this).scrollTop() > top_show) $('#top').fadeIn();
		else $('#top').fadeOut();
	});

	$('#top').click(function () {
		$('body,html').animate( {scrollTop: 0}, delay);
	});

	$('#nav').find('a').click(function () {
		var id = $(this).attr('data-id');
		var position_id = $('#'+id).parent().attr('id');

		swapElements(position_id);

		$("html, body").delay(delay).animate({scrollTop: $('#'+id).offset().top }, delay);
	});

});

function swapElements(position) {

	if (position == 'center') {
		return;
	} else {
		var centerHtml = $('#center').html();
		$('#center').html($('#'+position).html());
		$('#'+position).html(centerHtml);
	}

}

