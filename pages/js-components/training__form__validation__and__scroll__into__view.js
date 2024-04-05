// this code VALIDATES the TRAINING Application Form
// hides Validated Form & shows the Form success message
// this code also scroll-ino-view the Form Error Message
// this code also scroll-into-view the Form Success Message

// /////////////////////////
// ////////////////////////
// ////////////////////////
// *Code 2 - Scroll-into-view the VALIDATED Form Success Message
function scrollToAccordionForValidForm() {
	var offsetValue = 100;
	var startingPoint = document.querySelector(".training__cta__section");
	var scrollPosition = startingPoint.offsetTop - offsetValue;

	// Scroll to the desired position
	window.scrollTo({ top: scrollPosition, behavior: "smooth" });
}

// *Code 3 - Scroll-into-view the IN-VALIDATED Form Error Message
function scrollToAccordionForInvalidForm() {
	var offsetValue = 300;

	// Get the first error message element with a non-empty message
	var errorMessage = document.querySelector(".error-message:not(:empty)");

	// If an error message element is found, scroll to its parent container
	if (errorMessage) {
		var errorContainerId = errorMessage.id;
		var startingPoint = document
			.querySelector("#" + errorContainerId)
			.closest(".training-form__elements__container");
		var scrollPosition = startingPoint.offsetTop - offsetValue;
		window.scrollTo({ top: scrollPosition, behavior: "smooth" });
	}
}

// *Code 4 - Show Form Success Message when form is validated
function showSuccessMessage() {
	// hide the Form
	document.querySelector(".training-form").style.display = "none";

	// Hide the element with class "training-form__header"
	var formHeader = document.querySelector(".training-form__header");
	formHeader.style.display = "none";

	// Hide the element with id "training__cta__accordion__button-id"
	var accordionButton = document.getElementById(
		"training__cta__accordion__button-id"
	);
	accordionButton.style.display = "none";

	// show the success message
	document.querySelector(
		".training-form__after-submit__container"
	).style.display = "block";

	// scroll-into-view the success message
	scrollToAccordionForValidForm();
}

// *Code 1 - Form Validation
function validateForm() {
	// Reset error messages
	document.querySelectorAll(".error-message").forEach(function (el) {
		el.innerHTML = "";
	});

	// Your validation logic starts here:

	// /////////////////////////
	// Your validation logic for First Name
	// Your validation logic for First Name
	const firstName = document.getElementById("f-name").value;
	if (firstName.length === 0) {
		document.getElementById("error-f-name").innerHTML =
			"Please enter your first name.";
		scrollToAccordionForInvalidForm();
		return false;
	} else if (firstName.length < 3) {
		document.getElementById("error-f-name").innerHTML =
			"Enter minimum of 3 letters.";
		scrollToAccordionForInvalidForm();
		return false;
	} else if (firstName.length > 20) {
		document.getElementById("error-f-name").innerHTML =
			"Maximum of 20 letters exceeded.";
		scrollToAccordionForInvalidForm();
		return false;
	}

	// ///////////////////////////
	// Your validation logic for Last Name
	const lastName = document.getElementById("l-name").value;
	if (lastName.length === 0) {
		document.getElementById("error-l-name").innerHTML =
			"Please enter your last name.";
		scrollToAccordionForInvalidForm();
		return false;
	} else if (lastName.length < 3) {
		document.getElementById("error-l-name").innerHTML =
			"Enter minimum of 3 letters.";
		scrollToAccordionForInvalidForm();
		return false;
	} else if (lastName.length > 20) {
		document.getElementById("error-l-name").innerHTML =
			"Maximum of 20 letters exceeded.";
		scrollToAccordionForInvalidForm();
		return false;
	}

	// //////////////////////
	// Your validation logic for Email
	const email = document.getElementById("your-email").value;
	const emailRegex = /^(?=.{7,81}$)[\w\.-]+@[\w\.-]+\.\w{2,4}$/;
	if (!emailRegex.test(email)) {
		document.getElementById("error-your-email").innerHTML =
			"Please enter a valid email.";
		scrollToAccordionForInvalidForm();
		return false;
	}

	// ///////////////////
	// *Your validation logic for Phone Number
	const phoneNumber = document.getElementById("phone-number").value;
	const phoneRegex =
		/^(?=.{7,20}$)\+?\d{1,3}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}$/;

	if (!phoneRegex.test(phoneNumber)) {
		document.getElementById("error-phone-number").innerHTML =
			"Please enter a valid phone number.";
		scrollToAccordionForInvalidForm();
		return false;
	}

	// Your validation logic for Country
	const country = document.getElementById("your-country").value;
	if (country.length < 4) {
		document.getElementById("error-your-country").innerHTML =
			"Please enter your country.";
		scrollToAccordionForInvalidForm();
		return false;
	}

	// Your validation logic for Knowledge Level
	const knowledgeLevel = document.getElementById("knowledge-level").value;
	if (knowledgeLevel === "") {
		document.getElementById("error-knowledge-level").innerHTML =
			"Please select your knowledge level.";
		scrollToAccordionForInvalidForm();
		return false;
	}

	// Your validation logic for Confirm Age
	const confirmAgeCheckbox = document.getElementById("confirm-age");
	if (!confirmAgeCheckbox.checked) {
		document.getElementById("error-confirm-age").innerHTML =
			"Please confirm your age.";
		scrollToAccordionForInvalidForm();
		return false;
	}
	// Your Validation logic ends here

	// *If all validations pass
	showSuccessMessage();

	// Prevent the form from submitting (remove this line if you want the form to be submitted)
	return false;
}

// *when you click Training Form Submit button and form is VALIDATED
document.addEventListener("DOMContentLoaded", function () {
	// Get all elements with class "training-form__submit-button__forAccordion"
	var buttons = document.querySelectorAll(
		".training-form__submit-button__forAccordion"
	);

	// Add click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Scroll-into-view for the validated form
			scrollToAccordionForValidForm();
		});
	});
});
