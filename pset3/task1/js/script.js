var elements = ["aimp", "autocad", "facebook", "foobar", "games", "gmail"];

$(document).ready(function () {

	for (var i = 0; i < elements.length; i++) {
		$("#list").append("<div id='option"+i+"' class='list__option'>" +
								"<img class='option__img' src='img/"+ elements[i] +
								".png'><div>" + elements[i] +
								"</div></div>");
	}

	$("#input").click( function () {
		$("#panel").slideDown("medium");
	});

	$("[id = option]").hover(
		function () {
				$(this).css('background-color', '#bdc3c7');
		},
		function () {
        $(this).css('background-color', 'whitesmoke');
    });

	$(".list__option").click( function () {
			$(this).css('background-color', 'whitesmoke');
			$("#panel").slideUp("medium");
			$("#text").html($(this).html());
		});
});

