// this code is for CALCULATOR
// it scrolls into view the element with class="A"...
// ... when you click a element with class="B"
// it is based on the viewport.

/////////////////////////////
/////////////////////////////
// /////////////////////////
// when you click Training Accordion Button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue = 100;

	// Get all elements with class A= " training__cta__accordion__button"
	var buttons = document.querySelectorAll(".training__cta__accordion__button");

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Get the element with class B= "training__cta__accordion__scroll-into-view"
			var startingPoint = document.querySelector(
				".training__cta__accordion__scroll-into-view"
			);

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition = startingPoint.offsetTop - offsetValue;

			// Scroll to the startingPoint with the adjusted offset
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		});
	});
});

// *when you click Training CTA Submit button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue = 100;

	// Get all elements with class A= "training-form__submit-button__forAccordion"
	var buttons = document.querySelectorAll(
		".training-form__submit-button__forAccordion"
	);

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Get the element with class B= "training-form__after-submit__container__forAccordion"
			var startingPoint = document.querySelector(
				".training-form__after-submit__container__forAccordion"
			);

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition = startingPoint.offsetTop - offsetValue;

			// Scroll to the startingPoint with the adjusted offset
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		});
	});
});

// /////////////////////////////
// ////////////////////////////
// ////////////////////////////
// *For the FIRST CTA & its accordion FORM on the Training page

// when you click Training Accordion Button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue = 100;

	// Get all elements with class A= " training__cta__accordion__button"
	var buttons = document.querySelectorAll(
		".training__cta__accordion__button-1"
	);

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Get the element with class B= "training__cta__accordion__scroll-into-view"
			var startingPoint = document.querySelector(
				".training__cta__accordion__scroll-into-view-1"
			);

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition = startingPoint.offsetTop - offsetValue;

			// Scroll to the startingPoint with the adjusted offset
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		});
	});
});

// *when you click Training CTA Submit button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue = 100;

	// Get all elements with class A= "training-form__submit-button__forAccordion"
	var buttons = document.querySelectorAll(
		".training-form__submit-button__forAccordion-1"
	);

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Get the element with class B= "training-form__after-submit__container__forAccordion"
			var startingPoint = document.querySelector(
				".training-form__after-submit__container__forAccordion-1"
			);

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition = startingPoint.offsetTop - offsetValue;

			// Scroll to the startingPoint with the adjusted offset
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		});
	});
});
