// this code helps open and close the FAQ accordion
// Updated JavaScript Code
const parentAccordionItems = document.querySelectorAll(
	".parent-accordion button"
);
const childAccordionItems = document.querySelectorAll(
	".child-accordion button"
);

function closeAllParentAccordions() {
	parentAccordionItems.forEach((item) =>
		item.setAttribute("aria-expanded", "false")
	);
}

function closeAllChildAccordions() {
	childAccordionItems.forEach((item) =>
		item.setAttribute("aria-expanded", "false")
	);
}

function closeChildAccordionsOfParent(parentAccordion) {
	const parentID = parentAccordion.getAttribute("id");
	const relatedChildAccordions = document.querySelectorAll(
		`[data-parent-id="${parentID}"]`
	);

	relatedChildAccordions.forEach((item) =>
		item.setAttribute("aria-expanded", "false")
	);
}

function toggleAccordion() {
	const itemToggle = this.getAttribute("aria-expanded");

	if (this.classList.contains("child-accordion__section-title")) {
		// If it's a child accordion item that is clicked
		if (itemToggle === "false") {
			// If the clicked child accordion is closed, close all other child accordions and open this one
			closeAllChildAccordions();
			this.setAttribute("aria-expanded", "true");
		} else {
			// If the clicked child accordion is open:

			// close the clicked child accordion
			this.setAttribute("aria-expanded", "false");
		}
	} else {
		// If it's a parent accordion item that is clicked
		if (itemToggle === "false") {
			// If the clicked parent accordion is closed, close all other parent accordions and open this one
			closeAllParentAccordions();

			// close the child accordion of the parent accordion
			closeChildAccordionsOfParent(this);
			this.setAttribute("aria-expanded", "true");
		} else {
			// If the clicked parent accordion is open:

			// close the child accordion of the clicked parent accordion
			closeChildAccordionsOfParent(this);
			// close the clicked parent accordion
			this.setAttribute("aria-expanded", "false");
		}
	}
}

parentAccordionItems.forEach((item) =>
	item.addEventListener("click", toggleAccordion)
);
childAccordionItems.forEach((item) =>
	item.addEventListener("click", toggleAccordion)
);
