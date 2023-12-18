  // SECTION--HEADER
/////////////////////////////
//HEADER__sub-section===Hamburger
////////////////////////////

// Get references to the elements
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
//
//
//
//
// Open Closed Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
	burgerMenu.addEventListener("click", () => {
		burgerMenu.classList.toggle("is-active");
		navbarMenu.classList.toggle("is-active");
	});
}
//
//
//
//
// Close opened Navbar Menu on Click of Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
	link.addEventListener("click", () => {
		burgerMenu.classList.remove("is-active");
		navbarMenu.classList.remove("is-active");
	});
});
//
//
//
//
// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
	if (this.scrollY >= 85) {
		headerMenu.classList.add("on-scroll");
	} else {
		headerMenu.classList.remove("on-scroll");
	}
});
//
//
//
//
// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
	if (window.innerWidth > 500) {
		if (
			navbarMenu.classList.contains("is-active") &&
			burgerMenu.classList.contains("is-active")
		) {
			navbarMenu.classList.remove("is-active");
			burgerMenu.classList.remove("is-active");
		}
	}
});
//
//
//
//
//Close Dropdown Menu when Window is Scrolled
window.addEventListener("scroll", () => {
	burgerMenu.classList.remove("is-active");
	navbarMenu.classList.remove("is-active");
});
//
//
//
//
// Add a click event listener to the document to close menu when clicking outside
document.addEventListener("click", (event) => {
	// Check if burgerMenu or navbarMenu are active, and if the click event did not occur inside them
	if (
		burgerMenu.classList.contains("is-active") &&
		navbarMenu.classList.contains("is-active") &&
		!burgerMenu.contains(event.target) &&
		!navbarMenu.contains(event.target)
	) {
		// If they are active and the click is outside, remove the "is-active" class
		burgerMenu.classList.remove("is-active");
		navbarMenu.classList.remove("is-active");
	}
});
