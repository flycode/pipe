
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.setHeader('Transfer-Encoding', 'chunked');
	res.render('index', { title: 'Pipe' });
};