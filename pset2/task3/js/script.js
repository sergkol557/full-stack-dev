function showPyramide(){

	for (var i = 0; i < 50; i++) {
		var str = "";
		
		for (var j = 0; j <= i; j++) {			
			str +=  "*";
		}

		document.getElementById('result').innerHTML += "<p>" + str + "</p>";
	}
}