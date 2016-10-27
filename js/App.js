if (!window.location.origin) {
	window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

function init() {
	
	// Change all href links that go out of the origin to open in a new window
//	$("a").not("[href*='" + window.location.origin + "']").attr("target", "new");
	
	var elements = document.querySelectorAll("a");
	Array.prototype.forEach.call(elements, function(el, i){
		  var a = new RegExp("/" + window.location.host + "/");
		  if (!a.test(el.href))	el.target="new";
	});


	// Highlight all on load if highlighting
	if (typeof hljs !== "undefined")
		hljs.initHighlightingOnLoad();
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(init);