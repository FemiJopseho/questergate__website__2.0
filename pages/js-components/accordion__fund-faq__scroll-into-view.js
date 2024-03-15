// this code is for fund-faq
// it scrolls into view the element with class="parent__accordion__item__wrapper"...
// ... when you click a element with class="parent__accordion__button"
// it is based on the viewport.

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
					".parent__accordion__item__wrapper"
				);

				// Calculate the scroll position by subtracting the offset value
				var scrollPosition = startingPoint.offsetTop - offsetValue;

				// Scroll to the startingPoint with the adjusted offset
				window.scrollTo({ top: scrollPosition, behavior: "smooth" });
			}
		});
	});
});
