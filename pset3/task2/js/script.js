var top_show = 100;
var delay = 1000;

jQuery(document).ready(function () {

	if (jQuery(this).scrollTop() > top_show) $('#top').fadeIn();
	else jQuery('#top').fadeOut();

	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > top_show) $('#top').fadeIn();
		else jQuery('#top').fadeOut();
	});

	jQuery('#top').click(function () {
		jQuery('body,html').animate( {scrollTop: 0}, delay);
	});

	jQuery('#nav').find('a').click(function () {
		var id = jQuery(this).attr('data-id');
		var position_id = jQuery('#'+id).parent().attr('id');

		swapElements(position_id);

		jQuery("html, body").delay(delay).animate({scrollTop: $('#'+id).offset().top }, delay);
	});

});

function swapElements(position) {

	if (position == 'center') {
		return;
	} else {
		var centerHtml = jQuery('#center').html();
		jQuery('#center').html(jQuery('#'+position).html());
		jQuery('#'+position).html(centerHtml);
	}

}

