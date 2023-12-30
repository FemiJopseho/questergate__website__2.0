// this code helps open and close the savings & investment calculator accordion
// Updated JavaScript Code

document.addEventListener("DOMContentLoaded", function () {
	const accordionButtons = document.querySelectorAll(
		".fund-calc__accordion__button"
	);

	accordionButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const targetContent = document.querySelector(
				this.getAttribute("data-target")
			);
			const isExpanded = this.getAttribute("aria-expanded") === "true";

			closeAllAccordions();

			if (!isExpanded) {
				targetContent.style.maxHeight = targetContent.scrollHeight + "px";
				this.setAttribute("aria-expanded", "true");
			}
		});
	});

	function closeAllAccordions() {
		accordionButtons.forEach((button) => {
			const targetContent = document.querySelector(
				button.getAttribute("data-target")
			);
			button.setAttribute("aria-expanded", "false");
			targetContent.style.maxHeight = "0";
		});
	}
});
