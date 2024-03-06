// this code is for TRAINING WEBPAGE CTA SECTION
// it scrolls into view the element with class="A"...
// ... when you click a element with class="B"
// it is based on the viewport.

// /////////////////////////////
// ////////////////////////////
// ////////////////////////////
// *For the FIRST CTA & its accordion FORM on the Training page

// when you click Training Accordion Button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue1 = 100;

	// Get all elements with class A= " training__cta__accordion__button"
	var buttons1 = document.querySelectorAll(
		".training__cta__accordion__button-1"
	);

	// Add click event listener to each button
	buttons1.forEach(function (button) {
		button.addEventListener("click", function () {
			// Check if the accordion is not already expanded
			if (button.getAttribute("aria-expanded") === "true") {
				// Get the element with class B= "training__cta__accordion__scroll-into-view"
				var startingPoint1 = document.querySelector(
					".training__cta__accordion__scroll-into-view-1"
				);

				// Calculate the scroll position by subtracting the offset value
				var scrollPosition1 = startingPoint1.offsetTop - offsetValue1;

				// Scroll to the startingPoint with the adjusted offset
				window.scrollTo({ top: scrollPosition1, behavior: "smooth" });
			}
		});
	});
});

// *when you click FIRST Training CTA Submit button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue1_Submit = 100;

	// Get all elements with class A= "training-form__submit-button__forAccordion"
	var buttons1 = document.querySelectorAll(
		".training-form__submit-button__forAccordion-1"
	);

	// Add click event listener to each button
	buttons1.forEach(function (button) {
		button.addEventListener("click", function () {
			// Get the element with class B= "training-form__after-submit__container__forAccordion"
			var startingPoint1_Submit = document.querySelector(
				".training-form__after-submit__container__forAccordion-1"
			);

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition1_Submit =
				startingPoint1_Submit.offsetTop - offsetValue1_Submit;

			// Scroll to the startingPoint with the adjusted offset
			window.scrollTo({ top: scrollPosition1_Submit, behavior: "smooth" });
		});
	});
});

/////////////////////////////
/////////////////////////////
// /////////////////////////
// *For the SECOND CTA & its accordion FORM on the Training page

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

// *when you click Second Training CTA Submit button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue2_Submit = 100;

	// Get all elements with class A= "training-form__submit-button__forAccordion"
	var buttons2 = document.querySelectorAll(
		".training-form__submit-button__forAccordion"
	);

	// Add click event listener to each button
	buttons2.forEach(function (button) {
		button.addEventListener("click", function () {
			// Get the element with class B= "training-form__after-submit__container__forAccordion"
			var startingPoint2_Submit = document.querySelector(
				".training-form__after-submit__container__forAccordion"
			);

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition2_Submit =
				startingPoint2_Submit.offsetTop - offsetValue2_Submit;

			// Scroll to the startingPoint with the adjusted offset
			window.scrollTo({ top: scrollPosition2_Submit, behavior: "smooth" });
		});
	});
});
