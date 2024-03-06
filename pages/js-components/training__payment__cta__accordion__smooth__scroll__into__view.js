// this code is for training payment section
// it scrolls into view the element with class="A"...
// ... when you click a element with class="B"
// it is based on the viewport.

// when you click Training payment Accordion Button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue = 200;

	/////////////////////////////
	/////////////////////////////
	// /////////////////////////
	// *For the FIRST CTA & its accordion PAYMENT MESSAGE on the Training page

	// Get all elements with class A = "training__one-on-one__cta__button"
	var buttonsOneOnOne = document.querySelectorAll(
		".training__one-on-one__cta__button"
	);

	// Add click event listener to each button
	buttonsOneOnOne.forEach(function (button) {
		button.addEventListener("click", function () {
			// Check if the accordion is not already expanded
			if (button.getAttribute("aria-expanded") === "true") {
				// Get the element with class B = "training__payment__one-on-one__accordion__scroll-into-view"
				var startingPoint = document.querySelector(
					".training__payment__one-on-one__accordion__scroll-into-view"
				);

				// Calculate the scroll position by subtracting the offset value
				var scrollPosition = startingPoint.offsetTop - offsetValue;

				// Scroll to the startingPoint with the adjusted offset
				window.scrollTo({ top: scrollPosition, behavior: "smooth" });
			}
		});
	});

	// /////////////////////////////
	// ////////////////////////////
	// ////////////////////////////
	// *For the SECOND CTA & its accordion PAYMENT MESSAGE on the Training page

	// Get all elements with class A = "training__group__cta__button"
	var buttonsGroup = document.querySelectorAll(".training__group__cta__button");

	// Add click event listener to each button
	buttonsGroup.forEach(function (button) {
		button.addEventListener("click", function () {
			// Check if the accordion is not already expanded
			if (button.getAttribute("aria-expanded") === "true") {
				// Get the element with class B = "training__payment__group__accordion__scroll-into-view"
				var startingPoint = document.querySelector(
					".training__payment__group__accordion__scroll-into-view"
				);

				// Calculate the scroll position by subtracting the offset value
				var scrollPosition = startingPoint.offsetTop - offsetValue;

				// Scroll to the startingPoint with the adjusted offset
				window.scrollTo({ top: scrollPosition, behavior: "smooth" });
			}
		});
	});
});
