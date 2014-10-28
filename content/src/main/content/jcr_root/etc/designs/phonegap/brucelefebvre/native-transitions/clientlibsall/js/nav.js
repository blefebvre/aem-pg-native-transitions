(function(window, document, undefined) {

    var inactiveViewClass = 'inactive';
    var activeViewClass = 'active';

	var newParser = document.createElement('a');

	window.addEventListener("hashchange", function(event) {

		newParser.href = event.newURL;
	    var newHash = newParser.hash;

        var currentViews = document.getElementsByClassName(activeViewClass);

        for(var i = 0; i < currentViews.length; i++) {
            // todo: more surgical class name removal
            currentViews.item(i).className = inactiveViewClass;
        }

        var newView = document.getElementById(newHash.substring(1));
        newView.className = activeViewClass;

	    console.log('newHash: [' + newHash + ']');
	}, true);

})(window, document);


var nav = {};

document.addEventListener("deviceready", function() {

    nav.go = function(hash) {
        console.log('firing nativepagetransitions.slide with hash: [' + hash + ']');
        window.plugins.nativepagetransitions.slide({
            "href" : hash
        });
    };

});