exports.widgets = function(req, res){
	res.setHeader('Transfer-Encoding', 'chunked');
	
	var html = '<h1>Chunked transfer using ajax</h1>'
    res.write(html);

	// Response 1
	setTimeout(function(){
		var test1 = '<h1>More transfer using ajax</h1>'
    	res.write(test1);
	},2000);

	// Response 2
	setTimeout(function(){
		var test2 = '<h1>Ooooh! More chunked content</h1>'
    	res.write(test2);
	},3000);

	// Response 3
	setTimeout(function(){
		var test3 = '<h1>and more more more chunked content</h1>'
    	res.write(test3);
	},4000);
	
}