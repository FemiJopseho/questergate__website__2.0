// SECTION--HEADER
/////////////////////////////
//HEADER__sub-section===Dropdown-button
////////////////////////////

// STEP 1
// Get references to the elements
const html = document.querySelector("html");
const dropbtn__checkbox = document.getElementById("header__dropbtn__checkbox");
const headerSlideDown = document.querySelector(".header-slide-down");
const label = document.querySelector("label[for='header__dropbtn__checkbox']");

// STEP 2
// Function to close the dropdown
function closeDropdown() {
	if (dropbtn__checkbox.checked) {
		// Uncheck the checkbox to close the dropdown
		dropbtn__checkbox.checked = false;
	}
}

// Add a click event listener to the html element
html.addEventListener("click", function (event) {
	// Check if the clicked element is not the dropdown
	if (event.target !== headerSlideDown) {
		closeDropdown();
	}
});

// STEP 3
// Add a click event listener to the dropbtn__checkbox (checkbox) element
dropbtn__checkbox.addEventListener("click", function (event) {
	// Prevent the click event from propagating to the body element
	event.stopPropagation();
});

// Close the Dropdown Menu on Window Resize
window.addEventListener("resize", () => {
	if (window.innerWidth > 500) {
		closeDropdown();
	}
});

//Close Dropdown Menu when Window is Scrolled
window.addEventListener("scroll", () => {
	closeDropdown();
	// if (window.screenTop == 0) {
	// 	closeDropdown();
	// }
});

//Close Dropdown Menu when Window is Scrolled to top
// window.addEventListener("scroll", () => {
// 	if (window.screenTop == 0) {
// 		closeDropdown();
// 	}
// });
