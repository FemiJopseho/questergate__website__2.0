// *For the ONE-on-ONE training-payment CTA on the Training webpage

// Wait for the DOM to be fully loaded before executing the code

document.addEventListener("DOMContentLoaded", function () {
	// Select all elements with the class "training__one-on-one__cta__button"
	const accordionButtons = document.querySelectorAll(
		".training__one-on-one__cta__button"
	);

	// Attach a click event listener to each accordion button
	accordionButtons.forEach((button) => {
		button.addEventListener("click", function () {
			// Find the content associated with the clicked button
			const targetContent = document.querySelector(
				this.getAttribute("data-target")
			);

			// Check if the accordion section is currently expanded
			const isExpanded = this.getAttribute("aria-expanded") === "true";

			// Close all accordions before opening the clicked one
			closeAllAccordions();

			// If the clicked section is not expanded, expand it
			if (!isExpanded) {
				// Set the max-height of the content to its scrollHeight
				targetContent.style.maxHeight = 50 + "rem";
				// Set the "aria-expanded" attribute to true for accessibility
				this.setAttribute("aria-expanded", "true");
			}
		});
	});

	// Function to close all accordion sections
	function closeAllAccordions() {
		accordionButtons.forEach((button) => {
			// Find the content associated with each button
			const targetContent = document.querySelector(
				button.getAttribute("data-target")
			);

			// Set "aria-expanded" to false and reset max-height to collapse the section
			button.setAttribute("aria-expanded", "false");
			targetContent.style.maxHeight = "0";
		});
	}
});

// /////////////////////////////
// ////////////////////////////
// ////////////////////////////
// *For the GROUP training-payment CTA on the Training webpage

// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
	// Select all elements with the class "training__group__cta__button"
	const accordionButtons = document.querySelectorAll(
		".training__group__cta__button"
	);

	// Attach a click event listener to each accordion button
	accordionButtons.forEach((button) => {
		button.addEventListener("click", function () {
			// Find the content associated with the clicked button
			const targetContent = document.querySelector(
				this.getAttribute("data-target")
			);

			// Check if the accordion section is currently expanded
			const isExpanded = this.getAttribute("aria-expanded") === "true";

			// Close all accordions before opening the clicked one
			closeAllAccordions();

			// If the clicked section is not expanded, expand it
			if (!isExpanded) {
				// Set the max-height of the content to its scrollHeight
				targetContent.style.maxHeight = 80 + "rem";
				// Set the "aria-expanded" attribute to true for accessibility
				this.setAttribute("aria-expanded", "true");
			}
		});
	});

	// Function to close all accordion sections
	function closeAllAccordions() {
		accordionButtons.forEach((button) => {
			// Find the content associated with each button
			const targetContent = document.querySelector(
				button.getAttribute("data-target")
			);

			// Set "aria-expanded" to false and reset max-height to collapse the section
			button.setAttribute("aria-expanded", "false");
			targetContent.style.maxHeight = "0";
		});
	}
});
