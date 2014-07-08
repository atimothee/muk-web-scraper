var express = require('express');
var router = express.Router();

var request = require('request')
var cheerio = require('cheerio')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res){
	url = 'http://news.mak.ac.ug'

	var $ = cheerio.load(html)

	

	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html)

			var title, date, description
			var json = {"title":'', pictureUrl:'', text:''}

			// $('.views-field-field-image').filter(function(){
	  //       	var pictureUrl; = $(this);

	  //       	pictureUrl = $(this).children().last().text();
	  //       	console.log(pictureUrl)

	  //       	json.pictureUrl = pictureUrl;
	  //       })

	        //views-field-title

	        $('.view-content .views-field-title').each(function() {
	        	var link = $(this);

	        	link = $(this).children().last().text();
	        	console.log(link)

	        	json.link = link;
	        });
	    }
	})
})

module.exports = router;
