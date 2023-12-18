// this JS adds class of "on-scroll" to the
//html element called "header" when the webpage is scrolled.

// Function to add the "on-scroll" class to the header
function addOnScrollClass() {
	const header = document.getElementById("header");

	// Check if the header is in the viewport
	const headerRect = header.getBoundingClientRect();
	if (headerRect.top < 0) {
		header.classList.add("on-scroll");
	} else {
		header.classList.remove("on-scroll");
	}
}

// Attach the addOnScrollClass function to the scroll event
window.addEventListener("scroll", addOnScrollClass);

/////////////////////////////////
//explanation of the code step by step

//1.
//We define a function called addOnScrollClass that checks if the header is in the viewport. If the top of the header is above the viewport (i.e., it's scrolled out of view), we add the "on-scroll" class to the header element. Otherwise, we remove the class.

//2.
//We use window.addEventListener("scroll", addOnScrollClass) to listen for the scroll event on the window. When the user scrolls the webpage, the addOnScrollClass function is called, and it adds or removes the "on-scroll" class accordingly.

//3.
//Make sure to place this JavaScript code in a <script> tag at the end of your HTML file or in an external JavaScript file and link it to your HTML document for it to work.
/////////////////////////////////////
