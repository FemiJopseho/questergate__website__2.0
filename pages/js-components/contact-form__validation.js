// This code is for the CONTACT-US form

let preFormText = document.getElementById("form__text");
let form = document.getElementById("contact-form__form");
let successMessage = document.getElementById("success-message");

// Get the form elements
let fullNameInput = document.getElementById("your-fullname");
let emailInput = document.getElementById("your-email");
let phoneInput = document.getElementById("your-phonenumber");
let msgInput = document.getElementById("yourmessage");

// /////////////////////////////
// *CODE X - when you click the Submit button -- the SUBMIT EVENT
// Ensure dom content is fully loaded b4 allowing the Submit Event
document.addEventListener("DOMContentLoaded", function () {
	form.addEventListener("submit", handleFormSubmission);
});

// When you activate the SUBMIT EVENT by clicking
// It checks if form is Validated, if yes then:
// 			it Submit form data to backend
// 			it display success message
function handleFormSubmission(event) {
	event.preventDefault(); // Prevents the default form submission

	// Your form validation logic goes here
	let isValid = validateForm();

	if (isValid) {
		submitFormData();
		displaySuccessMessage();
		scrollToView__SuccessMessage();
		hideSuccessMessageAfterDelay();
	}
}

/////////////////////////
// *Code 1 - Submitting form data
// submit form data
function submitFormData() {
	// Get the form data
	let formData = new FormData(form);

	// Create an XMLHttpRequest object
	let xhr = new XMLHttpRequest();

	// Configure it: POST-request for the URL /submit
	xhr.open("POST", "/submit", true);

	// Send the form data as the body of the request
	xhr.send(formData);

	// Optional: Handle the response from the server
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// Handle the successful response, if needed
			console.log(xhr.responseText);
		}
	};
}

/////////////////////////
// *Code 2 - Success message behaviour
// display success message
function displaySuccessMessage() {
	preFormText.style.display = "none";
	form.style.display = "none";
	successMessage.style.display = "block";
}

// Ensure success message is well positioned on the screen
function scrollToView__SuccessMessage() {
	let offsetValue = 50;
	let startingPoint = document.querySelector(
		".contact-us__contact-form__section"
	);
	let scrollPosition = startingPoint.offsetTop - offsetValue;

	// Scroll to the desired position
	window.scrollTo({ top: scrollPosition, behavior: "smooth" });
}

// Timer to Hide success message and display form like it was never filled
function hideSuccessMessageAfterDelay() {
	setTimeout(function () {
		// hide success message
		successMessage.style.display = "none";

		// Reset the form to clear input fields
		form.reset();

		// Show all the elements that were hidden due to showing the success message
		preFormText.style.display = "flex";
		form.style.display = "flex";
	}, 15000); // for 15 seconds
}

// ///////////////////
// *Code 2 - Form Validation
function validateForm() {
	// Reset error messages
	document.querySelectorAll(".error-message").forEach(function (el) {
		el.innerHTML = "";
	});

	let isError = false; // Flag to track if there is an error

	// *Check if required fields are not empty
	if (fullNameInput.value.trim() === "") {
		document.getElementById("error-full-name").innerHTML =
			"Please enter your first name.";
		scrollToAccordionForInvalidForm();
		isError = true; // Set isError to true
	}

	if (emailInput.value.trim() === "") {
		document.getElementById("error-your-email").innerHTML =
			"Please enter your email.";
		scrollToAccordionForInvalidForm();
		isError = true; // Set isError to true
	}

	if (phoneInput.value.trim() === "") {
		document.getElementById("error-phone-number").innerHTML =
			"Please enter your phone number.";
		scrollToAccordionForInvalidForm();
		isError = true; // Set isError to true
	}

	if (msgInput.value.trim() === "") {
		document.getElementById("error-your-msg").innerHTML =
			"Please enter your message.";
		scrollToAccordionForInvalidForm();
		isError = true; // Set isError to true
	}

	// *If required Fields are not empty, check if they are filled correctly.
	// Full name Validation
	if (fullNameInput.value.length < 3) {
		document.getElementById("error-full-name").innerHTML =
			"Enter minimum of 3 letters.";
		scrollToAccordionForInvalidForm();
		isError = true; // Set isError to true
	} else if (fullNameInput.value.length > 20) {
		document.getElementById("error-full-name").innerHTML =
			"Maximum of 20 letters exceeded.";
		scrollToAccordionForInvalidForm();
		isError = true; // Set isError to true
	}

	// Phone number validation
	const phoneRegex =
		/^(?=.{7,20}$)\+?\d{1,3}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}$/;

	if (!phoneRegex.test(phoneInput.value)) {
		document.getElementById("error-phone-number").innerHTML =
			"Please enter a valid phone number.";
		scrollToAccordionForInvalidForm();
		isError = true; // Set isError to true
	}

	// Email Validation
	const emailRegex = /^(?=.{7,81}$)[\w\.-]+@[\w\.-]+\.\w{2,4}$/;

	if (!emailRegex.test(emailInput.value)) {
		document.getElementById("error-your-email").innerHTML =
			"Please enter a valid email.";
		scrollToAccordionForInvalidForm();
		isError = true; // Set isError to true
	}

	// Client Message Validation
	if (msgInput.value.length < 20) {
		document.getElementById("error-your-msg").innerHTML =
			"Enter minimum of 20 characters.";
		scrollToAccordionForInvalidForm();
		isError = true; // Set isError to true
	} else if (msgInput.value.length > 1000) {
		document.getElementById("error-your-msg").innerHTML =
			"Max. of 1000 characters exceeded.";
		scrollToAccordionForInvalidForm();
		isError = true; // Set isError to true
	}

	// If there's an error, show error message for 10 seconds
	if (isError) {
		setTimeout(function () {
			document.querySelectorAll(".error-message").forEach(function (el) {
				el.innerHTML = ""; // Clear error messages
			});
		}, 10000); // Show error message for 10 seconds
	}

	// If all validations pass, return "true" if you want to submit it
	return !isError;
}

// ///////////////////
// *Code 2 - Scroll-into-view the INVALID Form Error Message
function scrollToAccordionForInvalidForm() {
	let offsetValue = 70;

	// Get the first error message element with a non-empty message
	let errorMessage = document.querySelector(".error-message:not(:empty)");

	// If an error message element is found, scroll to its parent container
	if (errorMessage) {
		let errorContainerId = errorMessage.id;
		let startingPoint = document
			.querySelector("#" + errorContainerId)
			.closest(".contact-us__contact-form__section");
		let scrollPosition = startingPoint.offsetTop - offsetValue;
		window.scrollTo({ top: scrollPosition, behavior: "smooth" });
	}
}
