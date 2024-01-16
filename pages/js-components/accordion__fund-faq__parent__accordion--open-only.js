// *this is for accordion that only OPENS when clicked.
// *but does not close when clicked again if it is already open.
// *an accordion is only closed when another accordion button is clicked.
// *if an accordion button is already opened and it is clicked again, it would not close

// *this is for accordion that only OPENS when clicked.
// *but does not close when clicked again if it is already open.
// *an accordion is only closed when another accordion button is clicked.
// *if an accordion button is already opened and it is clicked again, it would not close

// on aria-expanded=true; a new class="parent__accordion__item__container__new-height"...
// ...is added to element with class="parent__accordion__item__container"

// it is linked to child accordion by the function "closeAllChildAccordions()"

document.addEventListener("DOMContentLoaded", function () {
	// Select all elements with the class "parent__accordion__button"
	const accordionButtons = document.querySelectorAll(
		".parent__accordion__button"
	);

	// *Function to close all child accordion sections
	function closeAllChildAccordions() {
		const childAccordionButtons = document.querySelectorAll(
			".child-accordion__button"
		);
		childAccordionButtons.forEach((button) => {
			button.setAttribute("aria-expanded", "false");
			const contentElement = button.nextElementSibling;
			contentElement.classList.remove("child-accordion-content__new--height");
		});
	}

	// Function to close all accordion sections, including child accordions
	function closeAllAccordions() {
		accordionButtons.forEach((button) => {
			// Find the content associated with the clicked button
			const targetContent = document.querySelector(
				button.getAttribute("data-target")
			);
			const isExpanded = button.getAttribute("aria-expanded") === "true";

			// If the section is expanded, close it and close all child accordions
			if (isExpanded) {
				button.setAttribute("aria-expanded", "false");

				// Remove the "parent__accordion__item__container__new-height" class from the accordion item
				const accordionItem = targetContent.closest(
					".parent__accordion__item__container"
				);
				accordionItem.classList.remove(
					"parent__accordion__item__container__new-height"
				);

				// Close child accordions when a parent accordion is closed
				closeAllChildAccordions();
			}
		});
	}

	// Attach a click event listener to each accordion button
	accordionButtons.forEach((button) => {
		button.addEventListener("click", function () {
			// Find the content associated with the clicked button
			const targetContent = document.querySelector(
				this.getAttribute("data-target")
			);
			const isExpanded = this.getAttribute("aria-expanded") === "true";

			// If the clicked section is not expanded, close all accordions and expand it
			if (!isExpanded) {
				// Close all accordions before opening the clicked one
				closeAllAccordions();

				// Add the "parent__accordion__item__container__new-height" class when expanded
				targetContent
					.closest(".parent__accordion__item__container")
					.classList.add("parent__accordion__item__container__new-height");

				// Set the "aria-expanded" attribute to true for accessibility
				this.setAttribute("aria-expanded", "true");
			}
		});
	});

	// Programmatically trigger a click event on the first accordion button to open it
	const firstAccordionButton = document.getElementById(
		"parent-accordion-button-1"
	);
	firstAccordionButton.click();
});
