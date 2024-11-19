//this scrolls into view the specific portion of FAQ when PARENT Accordion Button is clicked.
//FOR DIFF SCREEN SIZES:

// *@media screen and (width <=31.25em) -- mobile
if (window.matchMedia("(max-width: 31.25em)").matches) {
	document.addEventListener("DOMContentLoaded", function () {
		// Set the offset value (in pixels) from the top of the viewport
		var offsetValue = 100;

		// Get all elements with class "parent__accordion__button"
		var buttons = document.querySelectorAll(".parent__accordion__button");

		// Add click event listener to each button
		buttons.forEach(function (button) {
			button.addEventListener("click", function () {
				// Check if the accordion is not already expanded
				if (button.getAttribute("aria-expanded") === "true") {
					// Get the element with class "parent__accordion__item__wrapper"
					var startingPoint = document.querySelector(
						".parent__accordion__item--heading"
					);

					// Calculate the scroll position by subtracting the offset value
					var scrollPosition = startingPoint.offsetTop - offsetValue;

					// Scroll to the startingPoint with the adjusted offset
					window.scrollTo({ top: scrollPosition, behavior: "smooth" });
				}
			});
		});
	});
}

// *@media screen and (width > 31.25em) and (width <=54.69em) -- tablets & landscape mobile
if (
	window.matchMedia("(min-width: 31.26em) and (max-width: 54.69em)").matches
) {
	document.addEventListener("DOMContentLoaded", function () {
		// Set the offset value (in pixels) from the top of the viewport
		var offsetValue = 300;

		// Get all elements with class "parent__accordion__button"
		var buttons = document.querySelectorAll(".parent__accordion__button");

		// Add click event listener to each button
		buttons.forEach(function (button) {
			button.addEventListener("click", function () {
				// Check if the accordion is not already expanded
				if (button.getAttribute("aria-expanded") === "true") {
					// Get the element with class "parent__accordion__item__wrapper"
					var startingPoint = document.querySelector(
						".parent__accordion__item--heading"
					);

					// Calculate the scroll position by subtracting the offset value
					var scrollPosition = startingPoint.offsetTop - offsetValue;

					// Scroll to the startingPoint with the adjusted offset
					window.scrollTo({ top: scrollPosition, behavior: "smooth" });
				}
			});
		});
	});
}

// *@media screen and (width > 54.69em) --desktops
if (window.matchMedia("(min-width: 54.7em)").matches) {
	document.addEventListener("DOMContentLoaded", function () {
		// Set the offset value (in pixels) from the top of the viewport
		var offsetValue = 200;

		// Get all elements with class "parent__accordion__button"
		var buttons = document.querySelectorAll(".parent__accordion__button");

		// Add click event listener to each button
		buttons.forEach(function (button) {
			button.addEventListener("click", function () {
				// Check if the accordion is not already expanded
				if (button.getAttribute("aria-expanded") === "true") {
					// Get the element with class "parent__accordion__item__wrapper"
					var startingPoint = document.querySelector(
						".parent__accordion__item--heading"
					);

					// Calculate the scroll position by subtracting the offset value
					var scrollPosition = startingPoint.offsetTop - offsetValue;

					// Scroll to the startingPoint with the adjusted offset
					window.scrollTo({ top: scrollPosition, behavior: "smooth" });
				}
			});
		});
	});
}
