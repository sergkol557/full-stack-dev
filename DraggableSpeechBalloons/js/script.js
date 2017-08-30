$(document).ready(function () {
	$("#header").draggable();

	$("#img").dblclick(function (e) {


		var pos = $(this).offset(); 
		var relX = e.pageX;
		var relY = e.pageY;

		$(this).append($('<div>')
			.addClass('placeddiv')
			.css({				
				"left": relX,
				"top": relY,
				"width": "100px",

		})	.draggable({cursor: "move", containment: "#img", scroll: false})
			.dblclick(function () {
							$(this).append(
								$("<input type='text'>")
									.focus()
									.val($(this).text())																
									.keydown(function (e) {
										if (e.keyCode == 13) {
											$(this).parent().text($(this).val()).css({"width" : $(this).val().length * 10 + "px"});											
											$(this).blur().remove();																								
										}
										if (e.keyCode == 27) {
											$(this).blur().remove();											
										}											
									})
								);
			}));
	});


});
