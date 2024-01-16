// *this is for accordion that only OPENS when clicked.
// *but does not close when clicked again if it is already open.
// *an accordion is only closed when another accordion button is clicked.
// *if an accordion button is already opened and it is clicked again, it would not close

// *this is for accordion that only OPENS when clicked.
// *but does not close when clicked again if it is already open.
// *an accordion is only closed when another accordion button is clicked.
// *if an accordion button is already opened and it is clicked again, it would not close

// on aria-expanded=true; a new class="accordion__item__new-height"...
// ...is added to element with class="accordion__item"

document.addEventListener("DOMContentLoaded", function () {
	// Select all elements with the class "accordion__button"
	const accordionButtons = document.querySelectorAll(".accordion__button");

	// Attach a click event listener to each accordion button
	accordionButtons.forEach((button) => {
		button.addEventListener("click", function () {
			// Find the content associated with the clicked button
			const targetContent = document.querySelector(
				this.getAttribute("data-target")
			);

			// Check if the accordion section is currently expanded
			const isExpanded = this.getAttribute("aria-expanded") === "true";

			// If the clicked section is not expanded, close all accordions and expand it
			if (!isExpanded) {
				// Close all accordions before opening the clicked one
				closeAllAccordions();

				// Add the "accordion__item__new-height" class when expanded
				targetContent
					.closest(".accordion__item")
					.classList.add("accordion__item__new-height");

				// Set the "aria-expanded" attribute to true for accessibility
				this.setAttribute("aria-expanded", "true");
			}
		});
	});

	// Function to close all accordion sections
	function closeAllAccordions() {
		accordionButtons.forEach((button) => {
			// Check if the accordion section is currently expanded
			const isExpanded = button.getAttribute("aria-expanded") === "true";

			// If the section is expanded, set "aria-expanded" to false and remove the added class
			if (isExpanded) {
				button.setAttribute("aria-expanded", "false");

				// Remove the "accordion__item__new-height" class from the accordion item
				const accordionItem = document
					.querySelector(button.getAttribute("data-target"))
					.closest(".accordion__item");
				accordionItem.classList.remove("accordion__item__new-height");
			}
		});
	}

	// Programmatically trigger a click event on the first accordion button to open it
	const firstAccordionButton = document.getElementById("accordion-button-1");
	firstAccordionButton.click();
});
