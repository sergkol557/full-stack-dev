var baloons = 0;

$(document).ready(function () {

	$(document).unbind('dblclick');

	$('#header').draggable();

	$.post("content.php",
		{
			action: 'load'
		},
		function (result) {

			for (var id in result) {

				addBaloon('empty', id, result[id].left, result[id].top, result[id].text);
			}

		}, 'json');

	$('#img').dblclick(function (e) {
		addBaloon(e);
	});

});

function addBaloon(e, id, left, top, text) {


	if (e === 'empty' || e.target.className === 'image-wrapper') {

		baloons++;
		var pos = document.getElementById('img').getBoundingClientRect();
		var relX = left ? left + 'px' : e.pageX - (pos.left + pageXOffset);
		var relY = top ? top + 'px' : e.pageY - (pos.top + pageYOffset);
		var res_id = id ? id : baloons;
		var width = text ? (text.length + 1) * 8 + 'px' : '100px';

		$('#img').append($('<div>')
			.addClass('placeddiv')
			.attr('id', res_id)
			.text(text)
			.css({
				'position': 'absolute',
				'left': relX,
				'top': relY,
				'width': width
			}).draggable({
				cursor: 'move',
				containment: '#img',
				scroll: false,
				stop: function () {
					var current_position = this.getBoundingClientRect();
					$.post('content.php',
						{
							action: 'coord',
							id: $(this).attr('id'),
							left: current_position.left,
							top: current_position.top
						});
				}
			})
			.dblclick(function (e) {

				if (e.target.className.includes('placeddiv')) {

					$("input").remove();
					var text = $(this).text();
					$(this).text('');
					var input = document.createElement('input');
					$(this).append(
						$(input)
							.val(text)
							.css({
								'width': $(this).width()
							})
							.keydown(function (e) {
								if (e.keyCode === 13) {
									$.post('content.php',
										{
											action: 'addtext',
											id: $(this).parent().attr('id'),
											msg: $(this).val()
										});

									$(this).parent().text($(this).val())
										.css({
											'width': ($(this).val().length + 1) * 8 + 'px'
										});

									$(input).blur().remove();
								}

								if (e.keyCode === 27) {
									$(this).parent().text(text);
									$(input).blur().remove();
								}
							})
					);

					$(this).find(input).focus().select();

				}
			})
		);
	}

}

