function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


function getRandomMsg()
{
	var randomMessages = [
		"Improper sanitization of user input can lead to vulnerabilities!",
		'<a href="https://github.com/ITTakes2">You can visit our GitHub page! (clickme)</a>',
	];
	return randomMessages[Math.floor(Math.random() * randomMessages.length)];
}


// thanks https://stackoverflow.com/a/29017547
function fade(element) {
	setTimeout(function () {
		var op = 1;
		var timer = setInterval(function () {
			if (op <= 0.1){
				clearInterval(timer);
				element.style.display = 'none';
			}
			element.style.opacity = op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op -= op * 0.1;
		}, 35);
	}, 500);
}

function hideLoading()
{
	var loadingScreen = document.getElementById('loadingScreen');
	fade(loadingScreen);
}