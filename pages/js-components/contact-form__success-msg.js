// this code shows the success message when contact-form
// in the contact-us page is filled well and submitted.
// with submission to server
// with error message not displayed as alerts
// with form reset() to clear inputs when form display after success message

document.addEventListener("DOMContentLoaded", function () {
	var preformText = document.getElementById("form__text");
	var form = document.getElementById("contact-form__form");
	var successMessage = document.getElementById("success-message");

	form.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevents the default form submission

		// Your form validation logic goes here
		var isValid = validateForm();

		if (isValid) {
			// Get the form data
			var formData = new FormData(form);

			// Create an XMLHttpRequest object
			var xhr = new XMLHttpRequest();

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

			// Hide the form & preformText; and show the success message
			preformText.style.display = "none";
			form.style.display = "none";
			successMessage.style.display = "block";

			// Hide the success message after 15 seconds (15000 milliseconds)
			setTimeout(function () {
				successMessage.style.display = "none";

				// Reset the form to clear input fields
				form.reset();

				// Show the form & preformText again
				preformText.style.display = "flex";
				form.style.display = "flex";
			}, 15000);
		}
	});

	// Function to perform form validation
	function validateForm() {
		// Get the form elements
		var fullNameInput = document.getElementById("your-fullname");
		var emailInput = document.getElementById("your-email");
		var phoneInput = document.getElementById("your-phonenumber");

		// Clear existing error messages
		clearErrorMessages();

		// Check if required fields are not empty
		if (fullNameInput.value.trim() === "") {
			displayErrorMessage(fullNameInput, "Please enter your full name.");
			return false;
		}

		if (emailInput.value.trim() === "") {
			displayErrorMessage(emailInput, "Please enter your email.");
			return false;
		}

		if (phoneInput.value.trim() === "") {
			displayErrorMessage(phoneInput, "Please enter your phone number.");
			return false;
		}

		// Updated phone number validation to accept various formats
		var phoneRegex = /^[+]?[0-9]+$/;
		if (!phoneRegex.test(phoneInput.value)) {
			displayErrorMessage(phoneInput, "Please enter a valid phone number.");
			return false;
		}

		// You can add more specific validation for email and phone number if needed
		// For simplicity, we'll use a basic regular expression for email validation
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(emailInput.value)) {
			displayErrorMessage(emailInput, "Please enter a valid email address.");
			return false;
		}

		// Add any other specific validation rules as needed

		// If all validations pass, return true
		return true;
	}

	function displayErrorMessage(inputElement, message) {
		// Create a new error message element
		var errorMessage = document.createElement("div");
		errorMessage.className = "error-message";
		errorMessage.textContent = message;

		// Insert the error message after the input element
		inputElement.parentNode.appendChild(errorMessage);

		// Hide the error message after 7 seconds (7000 milliseconds)
		setTimeout(function () {
			errorMessage.style.display = "none";
		}, 7000);
	}

	function clearErrorMessages() {
		// Remove all existing error messages
		var errorMessages = document.querySelectorAll(".error-message");
		errorMessages.forEach(function (errorMessage) {
			errorMessage.parentNode.removeChild(errorMessage);
		});
	}
});
