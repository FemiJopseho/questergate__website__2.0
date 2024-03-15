// inserts images into hero section based on screen size

function updateImages() {
	const mobileImage = document.querySelector(
		".fund-our-plans__banner__image__mobile"
	);
	const tabletLandImage = document.querySelector(
		".fund-our-plans__banner__image__tablet-land"
	);
	const desktopImage = document.querySelector(
		".fund-our-plans__banner__image__desktop"
	);

	const screenWidth = window.innerWidth;

	if (screenWidth <= 500) {
		// NOTE: the image source must be relative to the HTML file not the JS file.
		mobileImage.src =
			"../../../images/banner__2__ladysit__landscape__Small.jpg";
	} else if (screenWidth <= 875) {
		// NOTE: the image source must be relative to the HTML file not the JS file.
		tabletLandImage.src =
			"../../../images/banner__2__ladysit__landscape__Small.jpg";
	} else {
		// NOTE: the image source must be relative to the HTML file not the JS file.
		desktopImage.src =
			"../../../images/banner__2__ladysit__landscape__Large.jpg";
	}
}

// Initial update on page load
updateImages();

// Update images on window resize
window.addEventListener("resize", updateImages);
