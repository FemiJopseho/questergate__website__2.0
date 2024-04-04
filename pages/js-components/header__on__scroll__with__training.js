// this does all the css and js that makes the header visible or not visible

document.addEventListener("DOMContentLoaded", function () {
	var headerSection = document.querySelector(".training__header__section");
	var headerPicture = document.querySelector(".training__header__picture");
	var scrollThreshold = window.innerHeight; // Set the scroll threshold to 100vh

	// *Set the scroll threshold to 85vh
	var scrollThreshold = window.innerHeight * 0.85;
	// *Set the scroll threshold to 500 pixels
	// var scrollThreshold = 500;

	window.addEventListener("scroll", function () {
		if (window.scrollY > scrollThreshold) {
			headerSection.classList.add("scrolled");
			headerPicture.classList.add("scrolled");
		} else {
			headerSection.classList.remove("scrolled");
			headerPicture.classList.remove("scrolled");
		}
	});
});
