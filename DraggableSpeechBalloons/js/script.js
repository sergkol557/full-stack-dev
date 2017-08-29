$(document).ready(function () {
	$("#header").draggable();

	$("#img").dblclick(function (e) {

		var pos = $(this).offset(); 
		var relX = e.pageX - pos.left + $(this).scrollLeft();
		var relY = e.pageY - pos.top + $(this).scrollTop();
		
		$(this).append($('<div>').
			addClass('placeddiv').
			css({
				"position": "absolute",
				"left": relX,
				"top": relY,
				"width": "100px",
				"height": "20px",
				"background-color": "white",
				"cursor":"move"
		}));
	});

	$(".placediv").each().draggable();
});
