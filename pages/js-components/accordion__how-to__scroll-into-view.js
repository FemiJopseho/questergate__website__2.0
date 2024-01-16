// add the smooth-scroll effect to when you click to go to a section in a page.
// it also brings the section into view---this is important!!!
// could have been done with css smooth-scroll & scroll-padding but it is not flexible, hence this code

// you need 2 things:
// (1) a button you click that takes you to the section on the page....
// (call this class: ".accordion__button" & data-target="#put id of section to scroll to")

// (2) the actual section on the page you want to go to when you click button in (1)....
// (in this case i specified the class of the element i want to use a reference point)
// element with class="accordion__scroll__to__view__top-border". and i made sure it's border-top is used

document.addEventListener("DOMContentLoaded", function () {
	// Add click event listeners to all parent accordion buttons
	var accordionButtons = document.querySelectorAll(".accordion__button");

	accordionButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Find the .accordion__scroll__to__view__top-border element
			var fundContainer = document.querySelector(
				".accordion__scroll__to__view__top-border"
			);

			// Set the desired vertical center offset
			var verticalCenterOffset = window.innerHeight / 2;

			// Calculate the final offset to center the container vertically
			var offset =
				verticalCenterOffset - fundContainer.getBoundingClientRect().height / 2;

			// Scroll to the accordion__scroll__to__view__top-border with the adjusted offset
			if (fundContainer) {
				window.scrollTo({
					top: fundContainer.offsetTop - offset,
					behavior: "smooth",
				});
			}
		});
	});
});
