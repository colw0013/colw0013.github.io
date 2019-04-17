window.onload = init;

addEventListner("click", function() { alert("This is my event listemr"); })

function resizeText(multiplier) {
	if (document.body.style.fontSize == "12px") {
		document.body.style.fontSize = "12px"
	}
}