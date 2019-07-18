/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

$(document).ready(function () {

	/*------------news----------*/

	$.getJSON("https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
		console.log(result);
		var news = "";
		for (var i = 0; i < result.articles.length; i++) {
			news += "<div class='articles'><img src='" + result.articles[i].urlToImage + "' alt='Souce Image'width='150px' height='120px'><p class='newsurl'>" + result.articles[i].title + "<a href='" + result.articles[i].url + "' target='_blank'><br/><span>Read more..</span></a></p><br></div>";
		}
		console.log(news);
		
		$('#topNewsHeader').html("<h2 class=NewsLetterName>Top News</h2>");
		
		$('#topnews').html(news);
	});


	$('#bbcnews').click(function () {


		$.getJSON("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.articles.length; i++) {
				news += "<div class='articles'><img src='" + result.articles[i].urlToImage + "' alt='Souce Image'width='150px' height='120px'><p class='newsurl'>" + result.articles[i].title + "<a href='" + result.articles[i].url + "' target='_blank'><br/><span>Read more...<span></a></p></div>";
			}
			console.log(news);
			
			$('#topNewsHeader').html("<h2 class=NewsLetterName>BBC</h2>");

			$('#topnews').html(news);
		});


	});


	$('#cnn').click(function () {


		$.getJSON("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.articles.length; i++) {
				news += "<div class='articles'><img src='" + result.articles[i].urlToImage + "' alt='Souce Image'width='150px' height='120px'><p class='newsurl'>" + result.articles[i].title + "<a href='" + result.articles[i].url + "'target='_blank'><br/><span>Read more...<span></a></p><br></div>";
			}
			console.log(news);
			
			$('#topNewsHeader').html("<h2 class=NewsLetterName>CNN</h2>");

			$('#topnews').html(news);
		});




	});

	$('#foxnews').click(function () {


		$.getJSON("https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.articles.length; i++) {
				news += "<div class='articles'><img src='" + result.articles[i].urlToImage + "' alt='Souce Image'width='150px' height='120px'><p class='newsurl'>" + result.articles[i].title + "<a href='" + result.articles[i].url + "'target='_blank'><br/><span>Read more...<span></a></p><br></div>";
			}
			console.log(news);
			
			$('#topNewsHeader').html("<h2 class=NewsLetterName>Fox News</h2>");

			$('#topnews').html(news);
		});




	});

	$('#independent').click(function () {


		$.getJSON("https://newsapi.org/v2/top-headlines?sources=independent&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.articles.length; i++) {
				news += "<div class='articles'><img src='" + result.articles[i].urlToImage + "' alt='Souce Image'width='150px' height='120px'><p class='newsurl'>" + result.articles[i].title + "<a href='" + result.articles[i].url + "'target='_blank'><br/><span>Read more...<span></a></p><br></div>";
			}
			console.log(news);
			
			$('#topNewsHeader').html("<h2 class=NewsLetterName>Independent</h2>");

			$('#topnews').html(news);
		});




	});

	$('#mtvnews').click(function () {


		$.getJSON("https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.articles.length; i++) {
				news += "<div class='articles'><img src='" + result.articles[i].urlToImage + "' alt='Souce Image'width='150px' height='120px'><p class='newsurl'>" + result.articles[i].title + "<a href='" + result.articles[i].url + "'target='_blank'><br/><span>Read more...<span></a></p><br></div>";
			}
			console.log(news);
			
			$('#topNewsHeader').html("<h2 class=NewsLetterName>MTV News</h2>");

			$('#topnews').html(news);
		});




	});

	$('#nationalgeo').click(function () {


		$.getJSON("https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.articles.length; i++) {
				news += "<div class='articles'><img src='" + result.articles[i].urlToImage + "' alt='Souce Image'width='150px' height='120px'><p class='newsurl'>" + result.articles[i].title + "<a href='" + result.articles[i].url + "'target='_blank'><br/><span>Read more...<span></a></p><br></div>";
			}
			console.log(news);
			
			$('#topNewsHeader').html("<h2 class=NewsLetterName>National Geographic</h2>");

			$('#topnews').html(news);
		});




	});

	$('#newscientist').click(function () {


		$.getJSON("https://newsapi.org/v2/top-headlines?sources=new-scientist&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.articles.length; i++) {
				news += "<div class='articles'><img src='" + result.articles[i].urlToImage + "' alt='Souce Image'width='150px' height='120px'><p class='newsurl'>" + result.articles[i].title + "<a href='" + result.articles[i].url + "'target='_blank'><br/><span>Read more...<span></a></p><br></div>";
			}
			console.log(news);

			$('#topNewsHeader').html("<h2 class=NewsLetterName>News Scientist</h2>");
			
			$('#topnews').html(news);
		});




	});

	$('#theeconomist').click(function () {


		$.getJSON("https://newsapi.org/v2/top-headlines?sources=the-economist&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.articles.length; i++) {
				news += "<div class='articles'><img src='" + result.articles[i].urlToImage + "' alt='Souce Image'width='150px' height='120px'><p class='newsurl'>" + result.articles[i].title + "<a href='" + result.articles[i].url + "'target='_blank'><br/><span>Read more...<span></a></p><br></div>";
			}
			console.log(news);
			
			$('#topNewsHeader').html("<h2 class=NewsLetterName>The Economist</h2>");

			$('#topnews').html(news);
		});

	});

	/*search by category*/

	$('#business').click(function () {


		$.getJSON("https://newsapi.org/v2/sources?language=en&category=business&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.sources.length; i++) {
				news += "<div class='categoriesArticles'><h3 style='color:#173e43'>" + result.sources[i].name + "</h3><p>" + result.sources[i].description + "</br><a href='" + result.sources[i].url + "'target='_blank'><span style='color:#173e43'>Read more...</span></a></p></div>";
			}
			console.log(news);
			
			$('#topNewsHeader').html("<h2 class=NewsLetterName style='color:#173e43'>Business</h2>");

			$('#topnews').html(news);
		});

	});

	$('#entertainment').click(function () {


		$.getJSON("https://newsapi.org/v2/sources?language=en&category=entertainment&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.sources.length; i++) {
				news += "<div class='categoriesArticles'><h3 style='color:#e05038'>" + result.sources[i].name + "</h3><p>" + result.sources[i].description + "</br><a href='" + result.sources[i].url + "'target='_blank'><span style='color:#e05038'>Read more...</span></a></p></div>";
			}
			console.log(news);
			
			$('#topNewsHeader').html("<h2 class=NewsLetterName style='color:#e05038'>Entertainment</h2>");

			$('#topnews').html(news);
		});

	});

	$('#health').click(function () {


		$.getJSON("https://newsapi.org/v2/sources?language=en&category=health&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.sources.length; i++) {
				news += "<div class='categoriesArticles'><h3 style='color:#b56969'>" + result.sources[i].name + "</h3><p>" + result.sources[i].description + "</br><a href='" + result.sources[i].url + "'target='_blank'><span style='color:#b56969'>Read more...</span></a></p></div>";
			}
			console.log(news);
			
			$('#topNewsHeader').html("<h2 class=NewsLetterName style='color:#b56969'>Health</h2>");

			$('#topnews').html(news);
		});

	});

	$('#science').click(function () {


		$.getJSON("https://newsapi.org/v2/sources?language=en&category=science&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.sources.length; i++) {
				news += "<div class='categoriesArticles'><h3 style='color:#16174f'>" + result.sources[i].name + "</h3><p>" + result.sources[i].description + "</br><a href='" + result.sources[i].url + "'target='_blank'><span style='color:#16174f'>Read more...</span></a></p></div>";
			}
			console.log(news);
			
			$('#topNewsHeader').html("<h2 style='color:#16174f'class=NewsLetterName>Science</h2>");

			$('#topnews').html(news);
		});

	});

	$('#sports').click(function () {


		$.getJSON("https://newsapi.org/v2/sources?language=en&category=sports&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.sources.length; i++) {
				news += "<div class='categoriesArticles'><h3 style='color:#cdd422'>" + result.sources[i].name + "</h3><p>" + result.sources[i].description + "</br><a href='" + result.sources[i].url + "'target='_blank'><span style='color:#cdd422'>Read more...</span></a></p></div>";
			}
			console.log(news);

			$('#topNewsHeader').html("<h2 class=NewsLetterName style='color:#cdd422'>Sports</h2>");
			
			$('#topnews').html(news);
		});

	});

	$('#technology').click(function () {


		$.getJSON("https://newsapi.org/v2/sources?language=en&category=technology&apiKey=05ef3ce9e8cd4ae3bff4e5f24cd761a5", function (result) {
			console.log(result);
			var news = "";
			for (var i = 0; i < result.sources.length; i++) {
				news += "<div class='categoriesArticles'><h3 style='color:#729f98'>" + result.sources[i].name + "</h3><p>" + result.sources[i].description + "</br><a href='" + result.sources[i].url + "'target='_blank'><span style='color:#729f98'>Read more...</span></a></p></div>";
			}
			console.log(news);

			$('#topNewsHeader').html("<h2 class=NewsLetterName style='color:#729f98'>Technology</h2>");
			
			$('#topnews').html(news);
		});

	});






});
