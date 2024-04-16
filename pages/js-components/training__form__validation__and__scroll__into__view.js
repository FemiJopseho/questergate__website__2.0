// this code is for the TRAINING FORM

// ////////////////////////
// *CODE Z - when you click the Submit button -- the CLICK EVENT that scroll-into-view the success msg
document.addEventListener("DOMContentLoaded", function () {
	// Select the submit button with the specified class
	let button = document.querySelector(
		".training-form__submit-button__forAccordion"
	);

	// Attach a click event listener to the submit button
	button.addEventListener("click", function () {
		// When the button is clicked, scroll-into-view the success message
		scrollToView__SuccessMessage();
	});
});

// /////////////////////////
// ////////////////////////
// *CODE X - when you click the Submit button -- the SUBMIT EVENT
// Ensure dom content is fully loaded b4 allowing the Submit Event
document.addEventListener("DOMContentLoaded", function () {
	let trainingForm = document.getElementById("training-form");

	// Attach event listener to form submit event
	trainingForm.addEventListener("submit", handleFormSubmit);
});

// When you activate the SUBMIT EVENT by clicking
// It checks if form is Validated, if yes then:
// 			it Submit form data to backend
// 			it display success message
function handleFormSubmit(event) {
	event.preventDefault(); // Prevents the default form submission

	// Your form validation logic goes here
	let isValid = validateForm();

	if (isValid) {
		// Get the form data
		let formData = new FormData(event.target);

		submitFormData(formData)
			.then(() => {
				showSuccessMessage();
			})
			.catch((error) => {
				console.error("There was a problem with the form submission:", error);
			});
	}
}

/////////////////////////
// *Code 1 - Submitting form data
// submit form data
function submitFormData(formData) {
	// Send a POST request with Fetch API
	return fetch("/submit", {
		method: "POST",
		body: formData,
	})
		.then((response) => {
			if (response.ok) {
				return response.text(); // Parse response body as text
			}
			throw new Error("Network response was not ok.");
		})
		.catch((error) => {
			// Handle error
			console.error("There was a problem with the fetch operation:", error);
			throw error; // Rethrow the error for the caller to handle
		});
}

// ////////////////////
// *Code 2 - Success message behaviour
// display success message
function showSuccessMessage() {
	displaySuccessMessage();
	scrollToView__SuccessMessage();
	hideSuccessMessageAfterDelay();
}

// display success message
function displaySuccessMessage() {
	let theForm = document.querySelector(".training-form");
	let formHeader = document.querySelector(".training-form__header");
	let accordionButton = document.getElementById(
		"training__cta__accordion__button-id"
	);
	let successMessage = document.querySelector(
		".training-form__after-submit__container"
	);

	// Hide form elements when you show success message
	theForm.style.display = "none";
	formHeader.style.display = "none";
	accordionButton.style.display = "none";

	// Show the success message
	successMessage.style.display = "block";
}

// Ensure success message is well positioned on the screen
function scrollToView__SuccessMessage() {
	let offsetValue = 100;
	let startingPoint = document.querySelector(".training__cta__section");
	let scrollPosition = startingPoint.offsetTop - offsetValue;

	// Scroll to the desired position
	window.scrollTo({ top: scrollPosition, behavior: "smooth" });
}

// Timer to Hide success message and display form like it was never filled
function hideSuccessMessageAfterDelay() {
	setTimeout(function () {
		let theForm = document.querySelector(".training-form");
		let formHeader = document.querySelector(".training-form__header");
		let accordionButton = document.getElementById(
			"training__cta__accordion__button-id"
		);
		let successMessage = document.querySelector(
			".training-form__after-submit__container"
		);

		// hide success message
		successMessage.style.display = "none";

		// Reset the form to clear input fields
		theForm.reset();

		// Show all the elements that were hidden due to showing the success message
		theForm.style.display = "flex";
		formHeader.style.display = "block";
		accordionButton.style.display = "flex";
	}, 120000); // Show for 120 seconds
}

// //////////////////////
// *Code 3 - Form Validation
function validateForm() {
	// Reset error messages
	document.querySelectorAll(".error-message").forEach(function (el) {
		el.innerHTML = "";
	});

	let isError = false; // Flag to track if there is an error

	// Validation logic starts here:

	// Validation logic for First Name
	const firstName = document.getElementById("f-name").value;
	if (firstName.length === 0) {
		document.getElementById("error-f-name").innerHTML =
			"Please enter your first name.";
		scrollToView__ErrorMessage();
		isError = true; // Set isError to true
	} else if (firstName.length < 3) {
		document.getElementById("error-f-name").innerHTML =
			"Enter minimum of 3 letters.";
		scrollToView__ErrorMessage();
		isError = true; // Set isError to true
	} else if (firstName.length > 20) {
		document.getElementById("error-f-name").innerHTML =
			"Maximum of 20 letters exceeded.";
		scrollToView__ErrorMessage();
		isError = true; // Set isError to true
	}

	// Validation logic for Last Name
	const lastName = document.getElementById("l-name").value;
	if (lastName.length === 0) {
		document.getElementById("error-l-name").innerHTML =
			"Please enter your last name.";
		scrollToView__ErrorMessage();
		isError = true; // Set isError to true
	} else if (lastName.length < 3) {
		document.getElementById("error-l-name").innerHTML =
			"Enter minimum of 3 letters.";
		scrollToView__ErrorMessage();
		isError = true; // Set isError to true
	} else if (lastName.length > 20) {
		document.getElementById("error-l-name").innerHTML =
			"Maximum of 20 letters exceeded.";
		scrollToView__ErrorMessage();
		isError = true; // Set isError to true
	}

	// Your validation logic for Email
	const email = document.getElementById("your-email").value;
	const emailRegex = /^(?=.{7,81}$)[\w\.-]+@[\w\.-]+\.\w{2,4}$/;
	if (!emailRegex.test(email)) {
		document.getElementById("error-your-email").innerHTML =
			"Please enter a valid email.";
		scrollToView__ErrorMessage();
		isError = true; // Set isError to true
	}

	// Your validation logic for Phone Number
	const phoneNumber = document.getElementById("phone-number").value;
	const phoneRegex =
		/^(?=.{7,20}$)\+?\d{1,3}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}$/;
	if (!phoneRegex.test(phoneNumber)) {
		document.getElementById("error-phone-number").innerHTML =
			"Please enter a valid phone number.";
		scrollToView__ErrorMessage();
		isError = true; // Set isError to true
	}

	// Your validation logic for Country
	const country = document.getElementById("your-country").value;
	if (country.length < 4) {
		document.getElementById("error-your-country").innerHTML =
			"Please enter your country.";
		scrollToView__ErrorMessage();
		isError = true; // Set isError to true
	}

	// Your validation logic for Knowledge Level
	const knowledgeLevel = document.getElementById("knowledge-level").value;
	if (knowledgeLevel === "") {
		document.getElementById("error-knowledge-level").innerHTML =
			"Please select your knowledge level.";
		scrollToView__ErrorMessage();
		isError = true; // Set isError to true
	}

	// Your validation logic for Confirm Age
	const confirmAgeCheckbox = document.getElementById("confirm-age");
	if (!confirmAgeCheckbox.checked) {
		document.getElementById("error-confirm-age").innerHTML =
			"Please confirm your age.";
		scrollToView__ErrorMessage();
		isError = true; // Set isError to true
	}
	// Validation logic ends here

	// If there's an error, show error message for 10 seconds
	if (isError) {
		setTimeout(function () {
			document.querySelectorAll(".error-message").forEach(function (el) {
				el.innerHTML = ""; // Clear error messages
			});
		}, 10000); // Show error message for 10 seconds (10000 milliseconds)
	}

	// If all validations pass
	if (!isError) {
		showSuccessMessage();
	}

	// Prevent the form from submitting (remove this line if you want the form to be submitted)
	return false;
}

// //////////////////////
// *Code 4 - Scroll-into-view Form Error Message
function scrollToView__ErrorMessage() {
	let offsetValue = 300;

	// Get the first error message element with a non-empty message
	let errorMessage = document.querySelector(".error-message:not(:empty)");

	// If an error message element is found, scroll to its parent container
	if (errorMessage) {
		let errorContainerId = errorMessage.id;
		let startingPoint = document
			.querySelector("#" + errorContainerId)
			.closest(".training-form__elements__container");
		let scrollPosition = startingPoint.offsetTop - offsetValue;
		window.scrollTo({ top: scrollPosition, behavior: "smooth" });
	}
}
