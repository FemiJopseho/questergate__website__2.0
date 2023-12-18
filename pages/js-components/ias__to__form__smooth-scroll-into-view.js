// add the smooth-scroll effect to when you click to go to a section in a page.
// it also brings the section into view---this is important!!!
// could have been done with css smooth-scroll & scroll-padding but it is not flexible, hence this code

// you need 2 things:
// (1) a button you click that takes you to the section on the page....
// (call this CLASS: ".btn-clicked-for-scroll" & data-target="#section-to-scroll-to" OR href="#section-to-scroll-to")
// (2) the actual section on the page you want to go to when you click button in (1)....
// (give this id="section-to-scroll-to")
// ...in your html, make sure you don't have both data-target & href pointing to same id in the button you click
//
// it also assumes you have a fixed header. you can remove that if you don't.
//
//
//

document.addEventListener("DOMContentLoaded", function () {
	// Add click event listener to the "Go to Products" button using its class
	var goToProductsButton = document.querySelector(".btn-clicked-for-scroll");

	goToProductsButton.addEventListener("click", function (event) {
		// Prevent the default link behavior
		event.preventDefault();

		// Get the target content section ID from the href attribute
		var targetSectionSelector = goToProductsButton.getAttribute("href"); //(use data-target if its the pointer)
		var targetSection = document.querySelector(targetSectionSelector);

		// Set a default offset and allow for manual adjustment
		var defaultOffset = 0; // You can adjust this value based on your needs
		var manualOffset = 100; // Adjust this value as needed. the higher the value, the further away from screen top

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
