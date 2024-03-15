// this code is for fund-faq
// it scrolls into view the element with class="accordion__item__container"...
// ... when you click a element with class="accordion__button"
// it is based on the viewport.

document.addEventListener("DOMContentLoaded", function () {
	const screenWidth = window.innerWidth;

	// Set the offset value (in pixels) from the top of the viewport
	if (screenWidth <= 875) {
		var offsetValue = 250;
	} else {
		var offsetValue = 150;
	}

	// Get all elements with class "accordion__button"
	var buttons = document.querySelectorAll(".accordion__button");

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Check if the accordion is not already expanded
			if (button.getAttribute("aria-expanded") === "true") {
				// Get the element with class "parent__accordion__item--startingPoint"
				var startingPoint = document.querySelector(
					".accordion__item__container"
				);

				// Calculate the scroll position by subtracting the offset value
				var scrollPosition = startingPoint.offsetTop - offsetValue;

				// Scroll to the startingPoint with the adjusted offset
				window.scrollTo({ top: scrollPosition, behavior: "smooth" });
			}
		});
	});
});
