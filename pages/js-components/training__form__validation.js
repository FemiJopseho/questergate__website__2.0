//  this is the code for the validation of the Training-Form

// formValidation.js

function validateForm() {
	// Reset error messages
	document.querySelectorAll(".error-message").forEach(function (el) {
		el.innerHTML = "";
	});

	// Your validation logic for First Name
	const firstName = document.getElementById("f-name").value;
	if (firstName.length === 0) {
		document.getElementById("error-f-name").innerHTML =
			"Please enter your first name.";
		return false;
	}

	// Your validation logic for Last Name
	const lastName = document.getElementById("l-name").value;
	if (lastName.length === 0) {
		document.getElementById("error-l-name").innerHTML =
			"Please enter your last name.";
		return false;
	}

	// Your validation logic for Email
	const email = document.getElementById("your-email").value;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		document.getElementById("error-your-email").innerHTML =
			"Please enter a valid email address.";
		return false;
	}

	// *Your validation logic for Phone Number
	// const phoneNumber = document.getElementById("phone-number").value;
	// const phoneRegex = /^\d{15}$/; // Assuming a 15-digit phone number
	// if (!phoneRegex.test(phoneNumber)) {
	// 	document.getElementById("error-phone-number").innerHTML =
	// 		"Please enter a valid phone number.";
	// 	return false;
	// }

	// Your validation logic for Country
	const country = document.getElementById("your-country").value;
	if (country.length === 0) {
		document.getElementById("error-your-country").innerHTML =
			"Please enter your country.";
		return false;
	}

	// Your validation logic for Knowledge Level
	const knowledgeLevel = document.getElementById("knowledge-level").value;
	if (knowledgeLevel === "") {
		document.getElementById("error-knowledge-level").innerHTML =
			"Please select your knowledge level.";
		return false;
	}

	// Your validation logic for Confirm Age
	const confirmAgeCheckbox = document.getElementById("confirm-age");
	if (!confirmAgeCheckbox.checked) {
		document.getElementById("error-confirm-age").innerHTML =
			"Please confirm that you are above 21 years.";
		return false;
	}

	// If all validations pass, hide the form and show the success message
	document.querySelector(".training-form").style.display = "none";
	document.querySelector(
		".training-form__after-submit__container"
	).style.display = "block";

	// Prevent the form from submitting (remove this line if you want the form to be submitted)
	return false;
}
