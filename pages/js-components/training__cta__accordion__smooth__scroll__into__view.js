// This code scrolls-into-view when you click the CTA-3 Apply Now button

/////////////////////////////
/////////////////////////////
// /////////////////////////
// *For the CTA (cta-3)

// when you click Training Accordion Button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue2 = 100;

	// Get all elements with class A= " training__cta__accordion__button"
	var buttons2 = document.querySelectorAll(".training__cta__accordion__button");

	// Add click event listener to each button
	buttons2.forEach(function (button) {
		button.addEventListener("click", function () {
			// Check if the accordion is not already expanded
			if (button.getAttribute("aria-expanded") === "true") {
				// Get the element with class B= "training__cta__accordion__scroll-into-view"
				var startingPoint2 = document.querySelector(
					".training__cta__accordion__scroll-into-view"
				);

				// Calculate the scroll position by subtracting the offset value
				var scrollPosition2 = startingPoint2.offsetTop - offsetValue2;

				// Scroll to the startingPoint with the adjusted offset
				window.scrollTo({ top: scrollPosition2, behavior: "smooth" });
			}
		});
	});
});
