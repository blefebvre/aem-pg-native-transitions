(function(window, document, undefined) {

	var oldParser = document.createElement('a');
	var newParser = document.createElement('a');

	window.addEventListener("hashchange", function(event) {
		oldParser.href = event.oldURL;
	    var oldHash = oldParser.hash;

		newParser.href = event.newURL;
	    var newHash = newParser.hash;

	    console.log('event.oldURL: ' + oldHash + ' event.newURL: ' + newHash);
	}, true);

})(window, document);