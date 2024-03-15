// inserts images into ______ section based on screen size

function updateImages() {
	const mobileImage = document.querySelector(".fund-hero__image__mobile");
	const tabletPotImage = document.querySelector(
		".fund-hero__image__tablet-pot"
	);
	const tabletLandImage = document.querySelector(
		".fund-hero__image__tablet-land"
	);
	const desktopImage = document.querySelector(".fund-hero__image__desktop");

	const screenWidth = window.innerWidth;

	if (screenWidth <= 500) {
		mobileImage.src = "../../../images/banner__1__family__potrait__Small.jpg";
	} else if (screenWidth <= 700) {
		tabletPotImage.src =
			"../../../images/banner__1__family__potrait__Small.jpg";
	} else if (screenWidth <= 875) {
		tabletLandImage.src =
			"../../../images/banner__1__family__landscape__Medium.jpg";
	} else {
		desktopImage.src =
			"../../../images/banner__1__family__landscape__Large.jpg";
	}
}

// Initial update on page load
updateImages();

// Update images on window resize
window.addEventListener("resize", updateImages);
