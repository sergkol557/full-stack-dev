function countTime() {
	var sec = document.getElementById('time').value;

	if ( sec > Number.MAX_SAFE_INTEGER) {
		alert( 'number is too big' );
		document.getElementById('time').value = '0';

	} else if ( sec == "" ) {
		alert( 'you must input number' );
		document.getElementById('time').value = '0';

	} else {		
		var hours = parseInt( sec / 3600 );
		sec %= 3600; 
		var min = parseInt( sec / 60 );
		sec = parseInt( sec % 60 );

		document.getElementById('result').innerText = hours+ ":" + min + ":" + sec;
	}
}