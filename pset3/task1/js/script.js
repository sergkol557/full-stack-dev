var elements = ["aimp", "autocad", "facebook", "foobar", "games", "gmail"];

jQuery(document).ready(function () {

	jQuery("body").append("<div id='container' align='center' style='margin-top:50px;'></div>");

	jQuery("#container").append("<div style='width: 400px; height: 45px;" +
																" background-color: whitesmoke;" +
																"border: rgba(0,0,230, 0.3) 1px solid; border-radius: 35px; " +
																"display: flex; flex-direction: row;" +
																" justify-content: space-between;" +
																"align-items: center; font-size: 40px;" +
																"padding-left: 10px;' id='input'></div>");

	jQuery("#input").append("<div style='display: flex; flex-direction: row;" +
														"justify-content: flex-start;" +
														"align-items: center;' id='text'></div>");

	jQuery("#container").append("<div style='width: 400px;" +
																" background-color: whitesmoke;" +
																"border: rgba(0,0,230, 0.3); border-radius: 35px;" +
																"display: none;' id='panel'></div>");

	jQuery("#input").append("<img src='img/arrowdown.png'" +
														" style='width: 45px; height: 45px;'> ");

	jQuery("#panel").append("<div style='font-size: 40px; display: flex;" +
														"flex-direction: column; " +
														"justify-content: flex-start; align-items: flex-start;'" +
														" id='list'></div>");

	for (var i = 0; i < elements.length; i++) {
		jQuery("#list").append("<div style='height: 45px; width: 400px; cursor: pointer;" +
														" margin-top: 15px; display: flex;" +
														" flex-direction: row;" +
														"justify-content: flex-start; align-items: center;'" +
														" id='option'>" +
														"<img style='height: 45px; width: 45px; margin: 0;" +
														" padding: 0;'" +
														"src='img/"+ elements[i] + ".png'><div>" + elements[i] + 
														"</div></div>");
		}
});

jQuery(document).ready(function () {
	jQuery("#input").click( function () {
		jQuery("#panel").slideDown("medium");
	});

	jQuery("[id = option]").hover(function () {
				jQuery(this).css('background-color', '#bdc3c7');
		});

	jQuery("[id = option]").mouseleave(function () {
				jQuery(this).css('background-color', 'whitesmoke');
		});

	jQuery("[id = option]").click( function () {
			 jQuery(this).css('background-color', 'whitesmoke');
				jQuery("#panel").slideUp("medium");
				jQuery("#text").html(jQuery(this).html());
		});

});

