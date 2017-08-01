function showUrl() {
	var text = document.getElementById('text').value;
	var urls = text.split(',');
	var i;

	for (i = 0; i < urls.length; i++) {

		urls[i] = urls[i].trim();

		if (urls[i].startsWith("https://")) urls[i] = urls[i].replace("https://","");
        if (urls[i].startsWith("http://")) urls[i] = urls[i].replace("http://","");
	}

	urls.sort();

    document.getElementById('result').innerText = "";

    for (i = 0; i < urls.length; i++) {
        document.getElementById('result').innerText += urls[i] + '\n'
    }
}