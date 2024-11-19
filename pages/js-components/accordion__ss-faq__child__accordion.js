// this code is for the child accordion of fund-faq
// it simply does two things:
//     1. toggles aria-expanded between true/false,
//     2. add a class named "child-accordion-content__new--height" to the element with class "child-accordion-content"

document.addEventListener("DOMContentLoaded", function () {
	const childAccordionButtons = document.querySelectorAll(
		".child-accordion__button"
	);

	function closeAllChildAccordions() {
		childAccordionButtons.forEach((button) => {
			button.setAttribute("aria-expanded", "false");
			const contentElement = button.nextElementSibling;
			contentElement.classList.remove("child-accordion-content__new--height");
		});
	}

	function toggleChildAccordion() {
		const isExpanded = this.getAttribute("aria-expanded") === "true";
		const contentElement = this.nextElementSibling;

		// Check if the clicked accordion is in a closed state
		if (!isExpanded) {
			// Close all other accordions
			closeAllChildAccordions();
		}

		// Toggle the clicked accordion's expanded state
		this.setAttribute("aria-expanded", isExpanded ? "false" : "true");

		// Add or remove the "child-accordion-content__new--height" class based on the expanded state
		if (isExpanded) {
			contentElement.classList.remove("child-accordion-content__new--height");
		} else {
			contentElement.classList.add("child-accordion-content__new--height");
		}
	}

	childAccordionButtons.forEach((button) => {
		button.addEventListener("click", toggleChildAccordion);
	});
});
