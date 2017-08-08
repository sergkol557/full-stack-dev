var elements = ["aimp", "autocad", "facebook", "foobar", "games", "gmail"];

jQuery(document).ready(function () {


	jQuery("#input").append("<img src='img/arrowdown.png'" +
										"style='width: 45px; height: 45px;'> ");

	jQuery("#panel").append("<div style='font-size: 40px; display: flex;" +
											"flex-direction: column; " +
											"justify-content: flex-start; align-items: flex-start;'" +
											" id='list'></div>");

	for (var i = 0; i < elements.length; i++) {
		jQuery("#list").append("<div style='height: 45px; width: 400px; cursor: pointer;" +
											"margin-top: 15px; display: flex;" +
											"flex-direction: row;" +
											"justify-content: flex-start; align-items: center;'" +
											" id='option'>" +
											"<img style='height: 45px; width: 45px; margin: 0;" +
											" padding: 0;'" +
											"src='img/"+ elements[i] + ".png'><div>" + elements[i] + 
											"</div></div>");
		}

	jQuery("#input").click( function () {
		jQuery("#panel").slideDown("medium");
	});

	jQuery("[id = option]").hover(function () {
				jQuery(this).css('background-color', '#bdc3c7');
		});

	jQuery("[id = option]").click( function () {
			 jQuery(this).css('background-color', 'whitesmoke');
				jQuery("#panel").slideUp("medium");
				jQuery("#text").html(jQuery(this).html());
		});

});

