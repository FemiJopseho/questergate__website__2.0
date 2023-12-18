// Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 100px from the top of the document, show the button with a smooth transition
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		mybutton.style.opacity = "1";
		mybutton.style.pointerEvents = "auto"; // Allow clicks on the button
	} else {
		mybutton.style.opacity = "0";
		mybutton.style.pointerEvents = "none"; // Disable clicks on the button
	}
}

// When the user clicks on the button, scroll to the top of the document
function backToTop__Function() {
	// Scroll to top with smooth behavior
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
