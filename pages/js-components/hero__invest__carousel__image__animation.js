document.addEventListener("DOMContentLoaded", function () {
	const imageContainer = document.querySelector(".carousel__image__container"); // Select the image container
	const intervalTime = 3000; // Interval time in milliseconds
	let currentIndex = 0; // Initialize the index

	function updateImage() {
		const imageSources = [
			"../../images/QG image optimised/Questergate Banner 1--landscape.jpg",
			"../../images/QG image optimised/Questergate Banner 2--landscape--height-adjust.jpg",
			// Add more image sources as needed
		];

		// Create a new image element
		const newImage = document.createElement("img");
		newImage.src = imageSources[currentIndex];
		newImage.alt = `Image ${currentIndex + 1}`;
		newImage.className = "carousel__image";

		// Append the new image to the container
		imageContainer.innerHTML = "";
		imageContainer.appendChild(newImage);

		currentIndex = (currentIndex + 1) % imageSources.length;
	}

	// Initial call to set the initial image
	updateImage();

	// Call the function at regular intervals
	setInterval(updateImage, intervalTime);
});
