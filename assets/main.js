function fadeText(elementId, finalText) {
	elementId.classList.add('fade');
	setTimeout(function() {
		elementId.innerHTML = finalText;
		elementId.classList.remove('fade');
	}, 500);
}

function switchPage(pageName) {
	var header = document.getElementById("headerMain");
	var textMain = document.getElementById("textMain");
	
	switch (pageName) {
		case "home":
			fadeText(header, "We are ITTakesTwo.");
			fadeText(textMain, `We are a technology company focused on delivering impact through innovation.`);
			break;
		case "whatWeDo":
			fadeText(header, "What we do");
			fadeText(textMain, `Hey, Thank you for wanting to find out more about this project.<br><br>
ITTakesTwo is currently a hobbyist project created to innovate and create new open source projects with a focus on cyber-security.<br><br>
We regularly post things of interest on our GitHub page, which you can find linked above.<br><br>
To find our projects and services, please click the "Projects" tab at the top.<br><br>
`);
			break;
		case "projects":
			fadeText(header, "TBA.");
			break;
		case "contact":
			fadeText(header, "Contact us");
			fadeText(textMain, `If you'd like to get in touch with us, please send us an email at ITTakes2net@protonmail.com`);
			break;
		default:
			// how did we get here?
			break;
	}
}