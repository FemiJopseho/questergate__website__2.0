// this contains the javascripts used for the ...
//hero section of the main homepage of teh website.

document.addEventListener("DOMContentLoaded", function () {
	const textElement = document.querySelector(".hero__animate__text"); // Select the text element
	const colorVariables = [
		"--clr-secondary-650",
		"--clr-alert-error-600",
		"--clr-alert-success-600",
		"--clr-primary-100",
	];

	let currentIndex = 0; // Initialize the index

	function updateTextAndColor() {
		const textArray = ["Smart", "Fast", "Strong", "Friendly"];
		textElement.textContent = textArray[currentIndex];
		textElement.style.color = `var(${colorVariables[currentIndex]})`; // Use backticks for string interpolation

		currentIndex = (currentIndex + 1) % textArray.length;
	}

	// Initial call to set the text and color
	updateTextAndColor();
	// Call the function at regular intervals (every 3 seconds)
	setInterval(updateTextAndColor, 3000);
});
