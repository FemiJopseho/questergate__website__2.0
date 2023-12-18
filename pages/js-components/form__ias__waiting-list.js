// this code is the JS for IAS waiting-list form
// it ensures validation of form data
// it also ensures appropriate error messages

///////////////////////////////////////////
// this section handles the toggle of showing the Company website or not
// based on the option selected under the User section of the form
function toggleCompanyWebsite() {
	var userType = document.getElementById("user-type");
	var companyWebsiteLabel = document.querySelector('label[for="user-website"]');
	var companyWebsiteInput = document.getElementById("user-website");
	var userWebsiteError = document.getElementById("user-website-error");

	if (userType.value === "company") {
		companyWebsiteLabel.style.display = "block";
		companyWebsiteInput.style.display = "block";
		companyWebsiteInput.required = false; // Make it not required when visible
		userWebsiteError.style.display = "none"; // Hide the custom error message
	} else {
		companyWebsiteLabel.style.display = "none";
		companyWebsiteInput.style.display = "none";
		companyWebsiteInput.required = false; // Remove the required attribute
		userWebsiteError.style.display = "none"; // hide the custom error message
		userWebsiteError.innerHTML = "Please enter your company's website"; // Set your custom error message
	}
}

/////////////////////////////////////////
// this section handles the form's error messages and validation
function validateForm(event) {
	event.preventDefault(); // Prevent the default form submission behavior

	// Get references to form elements
	var userType = document.getElementById("user-type");
	var userName = document.getElementById("user-name");
	var userEmail = document.getElementById("user-email");
	var userWebsite = document.getElementById("user-website");
	var userCountry = document.getElementById("user-country");
	var successMessage = document.getElementById("success-message");

	// Reset any previous error messages
	var errorMessages = document.getElementsByClassName("error-message");
	for (var i = 0; i < errorMessages.length; i++) {
		errorMessages[i].style.display = "none";
	}

	// Assume the form is valid by default
	var isValid = true;

	// Check if User Type is selected
	if (userType.value === "") {
		var userTypeError = document.getElementById("user-type-error");
		userTypeError.style.display = "block";
		userTypeError.textContent = "Please select a user type";
		userTypeError.classList.add("error-text"); // Add the CSS class
		isValid = false;
	}

	// Check if User Name is provided
	if (userName.value === "") {
		var userNameError = document.getElementById("user-name-error");
		userNameError.style.display = "block";
		userNameError.textContent = "Please enter your name";
		userNameError.classList.add("error-text"); // Add the CSS class
		isValid = false;
	}

	// Check if User Email is provided and in a valid format
	if (userEmail.value === "") {
		var userEmailError = document.getElementById("user-email-error");
		userEmailError.style.display = "block";
		userEmailError.textContent = "Please enter your email address";
		userEmailError.classList.add("error-text"); // Add the CSS class
		isValid = false;
	} else {
		// Validate email format
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!emailPattern.test(userEmail.value)) {
			var userEmailFormatError = document.getElementById(
				"user-email-format-error"
			);
			userEmailFormatError.style.display = "block";
			userEmailFormatError.innerHTML =
				"Please enter a valid email address.<br>(e.g., example@email.com)";
			userEmailFormatError.classList.add("error-text"); // Add the CSS class
			isValid = false;
		}
	}

	// Check if User Website is provided and in a valid format
	if (userType.value === "company" && userWebsite.style.display !== "none") {
		var userWebsiteError = document.getElementById("user-website-error");
		if (userWebsite.value === "") {
			userWebsiteError.style.display = "block";
			userWebsiteError.textContent = "Please enter your company's website";
			userWebsiteError.classList.add("error-text"); // Add the CSS class
			isValid = false;
		} else {
			// Validate website format
			var websitePattern = /^(https?:\/\/)?([\w\d.-]+\.[a-z]{2,4})(\/\S*)?$/i;
			if (!websitePattern.test(userWebsite.value)) {
				var userWebsiteFormatError = document.getElementById(
					"user-website-format-error"
				);
				userWebsiteFormatError.style.display = "block";
				userWebsiteFormatError.innerHTML =
					"Please enter a valid website.<br>(e.g., example.com)";
				userWebsiteFormatError.classList.add("error-text"); // Add the CSS class
				isValid = false;
			}
		}
	}

	// Check if User Country is provided
	if (userCountry.value === "") {
		var userCountryError = document.getElementById("user-country-error");
		userCountryError.style.display = "block";
		userCountryError.textContent = "Please enter your country";
		userCountryError.classList.add("error-text"); // Add the CSS class
		isValid = false;
	}

	// If the form is valid, send data to the server
	if (isValid) {
		// Get form data
		var formData = new FormData(document.getElementById("waiting-list"));

		// Send a POST request to the server
		fetch("your_server_endpoint_url", {
			method: "POST",
			body: formData,
		})
			.then(function (response) {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then(function (data) {
				// Handle success response from the server
				console.log("Form submitted successfully:", data);
			})
			.catch(function (error) {
				// Handle errors during the fetch
				console.error("Error submitting form:", error);
			})
			.finally(function () {
				// Hide the form and show the success message
				document.getElementById("waiting-list").style.display = "none";
				var formTextElement = document.querySelector(
					".waiting-list__form-text"
				);
				if (formTextElement) {
					formTextElement.style.display = "none";
				}
				successMessage.style.display = "block";

				// Hide the success message after 10 seconds and show the form
				setTimeout(function () {
					successMessage.style.display = "none";
					document.getElementById("waiting-list").style.display = "block";
					// Clear the form data
					document.getElementById("waiting-list").reset();
				}, 10000); // 10 seconds
			});
	}
}
