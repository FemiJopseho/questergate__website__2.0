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
			// Get the element with class B= "savings__calc__section"
			var heading = document.querySelector(".savings__calc__section");

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition = heading.offsetTop - offsetValue;

			// Scroll to the heading with the adjusted offset
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
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
			var heading = document.querySelector(
				".savings__calc__results__container"
			);

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition = heading.offsetTop - offsetValue;

			// Scroll to the heading with the adjusted offset
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		});
	});
});

//////////////////////////////////////
// *INVESTMENT CALC PART
////////////////////////////////////
// *when you click Investment Accordion Button
document.addEventListener("DOMContentLoaded", function () {
	// Set the offset value (in pixels) from the top of the viewport
	var offsetValue = 50;

	// Get all elements with class A= "investment__calc__accordion__button"
	var buttons = document.querySelectorAll(
		".investment__calc__accordion__button"
	);

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Get the element with class B= "fund-calc__title"
			// i used "fund-calc__title" here cos investment__calc__section gave me issues
			var heading = document.querySelector(".fund-calc__title");

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition = heading.offsetTop - offsetValue;

			// Scroll to the heading with the adjusted offset
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
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
			var heading = document.querySelector(
				".investment__calc__results__container"
			);

			// Calculate the scroll position by subtracting the offset value
			var scrollPosition = heading.offsetTop - offsetValue;

			// Scroll to the heading with the adjusted offset
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		});
	});
});
