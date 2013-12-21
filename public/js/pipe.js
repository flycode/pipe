(function Pipe(window) {
	'use strict';

	var buffer =  new Object(),
		head = document.getElementsByTagName('head')[0];

	function createElement(tag) {
		return document.createElement(tag);
	}

	function getElementById(id) {
		return document.getElementById(id);
	}

	function processAll(data) {
		if( data.css ) {
			processCss(data.css);
		}
		
		try {
			if( data.html ) {
				processHtml(data.html);
			}
		} catch(e) {}

		try {
			if( data.js ) {
				if( data.js instanceof Array ) {
					for( var i = 0; i < data.js.length; i++ ) {
						processJs(data.js[i]);
					}
				} else {
					processJs(data.js);
				}
			}
		 } catch(e) {}
		
	}
	
	function processHtml(dom) {
		var e = getElementById(dom.element);
		var d = createElement('div');

		d.innerHTML = dom.data;


		while( d.hasChildNodes() ) {
			e.appendChild(d.removeChild(d.firstChild));
		}
	}
	
	function processCss(css) {
		var l = createElement('link');

		l.rel= "stylesheet";
		l.type="text/css";
		l.href = css;

		head.appendChild(l);
	}

	function processJs(obj) {
		if( obj.type == 'inline' ) {
			var that = this;
			JcorsLoader.load(function() { globalEval(obj.value); });
		} else {
			var h = hash(obj.value);

			if( buffer[h] != true ) {
				JcorsLoader.load(obj.value);
				buffer[h] = true;
			}
		}
	}

	function globalEval(src) {
		if( window.execScript ) {
			window.execScript(src);
			return;
		}
		window.eval.call(window, src);
	}

	function hash(value) {
	    var hash = 0, i, c, l;
	    if (value.length == 0) return hash;
	    for (i = 0, l = value.length; i < l; i++) {
	        c = value.charCodeAt(i);
	        hash = ((hash<<5)-hash)+c;
	        hash |= 0; // Convert to 32bit integer
	    }
	    return hash;
	}

	window.Pipe = { process: processAll, eval: globalEval };
})(window);