exports.widgets = function(req, res) {
	res.setHeader('Transfer-Encoding', 'chunked');
	res.setHeader('Content-type', 'text/javascript');
	
	var html = 'Pipe.process({"html":{"element":"explore","data":"<h1>1</h1>"},"js":[{"type":"external", "value":"http://static.mlstatic.com/org-img/ch/ui/0.13.4/chico-jquery.min.js?nocache2"}, {"type":"inline", "value":"$(\'body\').css(\'background\', \'yellow\');"}]});'
    res.write(html);

	// Response 1
	setTimeout(function() {
		var test1 = 'Pipe.process({"html":{"element":"information", "data":"<h1>2</h1>"},"js":{"type":"inline", "value":"console.log(\'hey you!\');"}});'
    	res.write(test1);
	},300);

	// Response 2
	setTimeout(function() {
		var test2 = 'Pipe.process({"html":{"element":"discovery", "data":"<h1>3</h1><img src=\\"http://victorz.files.wordpress.com/2009/05/uhdv.gif?frutaloca\\" />"}});'
    	res.write(test2);
	},3000);

	// Response 3
	setTimeout(function() {
		var test3 = 'Pipe.process({"html":{"element":"discovery", "data":"<h1>4</h1>"}, "css":"/css/test.css"});'
    	res.write(test3);

    	res.end();
	},4000);
}