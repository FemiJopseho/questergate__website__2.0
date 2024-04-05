// this code makes CTA-1 to expand the form CTA-3 when CTA-1 is clicked

document.addEventListener("DOMContentLoaded", function () {
	const button1 = document.getElementById("training__cta__1__button-id");
	const button2 = document.getElementById(
		"training__cta__accordion__button-id"
	);
	const accordionButtons = document.querySelectorAll(
		".training__cta__accordion__button"
	);

	button1.addEventListener("click", function () {
		button1.setAttribute("aria-expanded", "true");
		// Setting aria-expanded of button1 to true
		if (button1.getAttribute("aria-expanded") === "true") {
			expandAccordion();
		}
	});

	function expandAccordion() {
		accordionButtons.forEach((button) => {
			const targetContent = document.querySelector(
				button.getAttribute("data-target")
			);
			targetContent.style.maxHeight = "80rem";
			button.setAttribute("aria-expanded", "true");
		});
	}
});
