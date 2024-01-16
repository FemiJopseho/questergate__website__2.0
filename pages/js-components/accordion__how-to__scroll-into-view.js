// this code is for fund-faq
// it scrolls into view the element with class="accordion__item__container"...
// ... when you click a element with class="accordion__button"
// it is based on the viewport.

document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue = 200;

	// Get all elements with class "accordion__button"
	var buttons = document.querySelectorAll(".accordion__button");

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Get the element with class "parent__accordion__item--heading"
			var heading = document.querySelector(".accordion__item__container");

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition = heading.offsetTop - offsetValue;

			// Scroll to the heading with the adjusted offset
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		});
	});
});
