$(document).ready(function () {
	$("#header").draggable();

	$("#img").dblclick(function (e) {


			if (e.target.className == 'image-wrapper') {

				$("input").remove();

                var pos = $(this).offset();
                var relX = e.pageX;
                var relY = e.pageY;
                var left = $(this).width - 20;

                $(this).append($('<div>')
                    .addClass('placeddiv')
                    .css({
                        "left": relX,
                        "top": relY,
                        "width": "100px",

                    }).draggable({
						cursor: "move",
						containment: "#img",
						scroll: false
                    })
                    .dblclick(function (e) {

						$("input").remove();

                        $(this).find(".corner").before(

                            $("<input type='text'>")
                                .val($(this).text())
                                .keydown(function (e) {
                                    if (e.keyCode == 13) {
                                        $(this).parent().text($(this).val()).css({"width": $(this).val().length * 10 + "px"});
                                        $("input").blur().remove();
                                    }
                                    if (e.keyCode == 27) {
                                        $("input").blur().remove();
                                    }
                                })
                        );

                        $(this).find("input").focus().select();
                    }).append(

                        $("<div>").addClass("corner").css({
                            "left" : "60px",
                            "top" : "20px",
                        })
                    )
				);
            }});


});
