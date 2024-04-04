// this code is for CALCULATOR
// it scrolls into view the element with class="A"...
// ... when you click a element with class="B"
// it is based on the viewport.

/////////////////////////////
// *SAVINGS PART
/////////////////////////////
// *when you click Savings Accordion Button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue = 100;

	// Get all elements with class A= " savings__calc__accordion__button"
	var buttons = document.querySelectorAll(".savings__calc__accordion__button");

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Check if the accordion is not already expanded
			if (button.getAttribute("aria-expanded") === "true") {
				// Get the element with class B= "savings__investment__calc__wrapper"
				var startingPoint = document.querySelector(
					".savings__investment__calc__wrapper"
				);

				// Calculate the scroll position by subtracting the offset value
				var scrollPosition = startingPoint.offsetTop - offsetValue;

				// Scroll to the startingPoint with the adjusted offset
				window.scrollTo({ top: scrollPosition, behavior: "smooth" });
			}
		});
	});
});

// *when you click Savings Calc button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue = 100;

	// Get all elements with class A= "savings__plan__submit"
	var buttons = document.querySelectorAll(".savings__plan__submit");

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Get the element with class B= "savings__calc__results__container"
			var startingPoint = document.querySelector(
				".savings__calc__results__container"
			);

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition = startingPoint.offsetTop - offsetValue;

			// Scroll to the startingPoint with the adjusted offset
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		});
	});
});

////////////////////////////////////////

// *INVESTMENT CALC PART

////////////////////////////////////
// *when you click Investment Accordion Button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue = 100;

	// Get all elements with class A= "investment__calc__accordion__button"
	var buttons = document.querySelectorAll(
		".investment__calc__accordion__button"
	);

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Check if the accordion is not already expanded
			if (button.getAttribute("aria-expanded") === "true") {
				// Get the element with class B= "savings__investment__calc__wrapper"
				// i used "savings__investment__calc__wrapper" here cos investment__calc__section gave me issues
				var startingPoint = document.querySelector(
					".savings__investment__calc__wrapper"
				);

				// Calculate the scroll position by subtracting the offset value
				var scrollPosition = startingPoint.offsetTop - offsetValue;

				// Scroll to the startingPoint with the adjusted offset
				window.scrollTo({ top: scrollPosition, behavior: "smooth" });
			}
		});
	});
});

// *when you click Investment Calc button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue = 100;

	// Get all elements with class A= "invest__plan__submit"
	var buttons = document.querySelectorAll(".invest__plan__submit");

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Get the element with class B= "investment__calc__results__container"
			var startingPoint = document.querySelector(
				".investment__calc__results__container"
			);

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition = startingPoint.offsetTop - offsetValue;

			// Scroll to the startingPoint with the adjusted offset
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		});
	});
});
