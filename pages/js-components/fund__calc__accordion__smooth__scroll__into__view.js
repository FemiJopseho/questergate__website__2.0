// add the smooth-scroll effect to when you click to go to a section in a page.
// it also brings the section into view---this is important!!!
// could have been done with css smooth-scroll & scroll-padding but it is not flexible, hence this code

// you need 2 things:
// (1) a button you click that takes you to the section on the page....
// (call this class: ".btn-clicked-for-scroll" & data-target="#put id of section to scroll to")

// (2) the actual section on the page you want to go to when you click button in (1)....
// (give this id="section-to-scroll-to" )
// it also assumes you have a fixed header. you can remove that if you dont.

document.addEventListener("DOMContentLoaded", function () {
	// Add click event listeners to all parent accordion buttons
	var accordionButtons = document.querySelectorAll(
		".fund-calc__accordion__button"
	);

	accordionButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Get the target content section ID from the data-target attribute
			var targetId = button.getAttribute("data-target");
			var targetSection = document.querySelector(targetId);

			// Set a default offset and allow for manual adjustment
			var defaultOffset = 0; // You can adjust this value based on your needs
			var manualOffset = 300; // Adjust this value as needed

			// Calculate the final offset
			var offset = defaultOffset + manualOffset;

			// Scroll to the target section with the adjusted offset
			if (targetSection) {
				window.scrollTo({
					top: targetSection.offsetTop - offset,
					behavior: "smooth",
				});

				// Optionally, you can toggle the accordion state or perform other actions here
				// ...
			}
		});
	});
});
