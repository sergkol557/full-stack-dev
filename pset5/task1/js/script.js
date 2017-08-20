$(document).ready(function(){
    $("#send").click(function(){		
		var msg = $("#text-msg").val();
		var html_coded = $('<div/>').text(msg).html().serialize();
		
		$.ajax({
			type: "POST",
			url: "chat.php",
			data: html_coded,
			success: function(data) {
				$("#text-msg").val("");				
				$("textarea").html(data).text();
			}
		});
		      
    });
});