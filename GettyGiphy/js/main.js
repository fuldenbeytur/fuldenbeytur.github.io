	$(document).ready(function () {
		$('#btn').click(function () {
			var gif = $("#gifsearch").val();

			//				alert(gif);

			if (gif == "") {
				$('#message').text("Ha! You should enter something for giphies!");
			} else {
				$('#message').text("Your gif is on its way!");
				$.getJSON("https://api.giphy.com/v1/gifs/search?api_key=sYBrLcL4vm6Ld4bLt4X7dO8lDPGfLj6F&q=" + gif + "&limit=25&offset=0&rating=G&lang=en", function (result) {
						var output = "";
						console.log(result);
						var data = result.data;
						for (var index in data) {
							var gifObject = data[index];
							var gifURL = gifObject.images.fixed_width.url;

							output += "<img width = '200px' height = '200px' src='" + gifURL + "'/>";

							console.log(gifURL);
						}

						$('#message').text('Here they are!');
						$('#container').html(output);


					}
					//						error: function(error) {
					//							console.log(error);
					//						}

				);

			};

		});
	})
