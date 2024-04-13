//  this code Validates the Form in the investment calculator

///////////////////////////////
//////////////////////////////
// Get the form element
let investmentForm = document.getElementById("id__invest__plan__form-1");
let capitalInput = document.getElementById("id__invest__initial__deposit");
let investPlanInput = document.getElementById("id__choose__invest__plan");
let isFormValidated = false;

// /////////////////////////////
// *CODE X - when you click the Submit button -- the SUBMIT EVENT
// Ensure dom content is fully loaded b4 allowing the Submit Event
document.addEventListener("DOMContentLoaded", function () {
	investmentForm.addEventListener("submit", handleInvestmentFormSubmission);
});

// When you activate the SUBMIT EVENT by clicking
// It checks if form is Validated, if yes then:
// 			it Submit form data to backend or process it in frontend.
//			and it does all the other things you will want it to do.
function handleInvestmentFormSubmission(event) {
	event.preventDefault(); // Prevent default form submission

	// Validate form inputs
	let isValid = validateInvestmentForm();

	if (isValid) {
		isFormValidated = true;
		processInvestmentFormData();

		// show calculator result
		showInvestCalcResult();

		// scroll the result into view
		scrollToView__InvestCalcResult();
	}
}

/////////////////////////
// *Code 1 - Submitting/processing form data
function processInvestmentFormData() {
	// frontend processing
	calculateInvestmentResults();
}

// ///////////////////
// *Code 2 - Form Validation
function validateInvestmentForm() {
	// Reset error messages
	document.getElementById("error__capital").innerHTML = "";
	document.getElementById("error__investType").innerHTML = "";

	let isError = false;

	// Validate capital input
	let capital = parseFloat(capitalInput.value);
	if (isNaN(capital) || capital < 100000 || capital > 25000000) {
		document.getElementById("error__capital").innerHTML =
			"Minimum Capital is 100,000 <br/> Maximum Capital is 25,000,000";
		scrollToView__ErrorMessage();
		isError = true;
	}
	// input length higher than 25million
	if (capitalInput.value.length > 11 && capital > 25000000) {
		document.getElementById("error__capital").innerHTML =
			"Maximum Capital is 25million";
		scrollToView__ErrorMessage();
		isError = true;
	}
	// input length less than 25million
	if (capitalInput.value.length > 11 && capital < 25000000) {
		document.getElementById("error__capital").innerHTML = "Input is too long";
		scrollToView__ErrorMessage();
		isError = true;
	}

	// Validate investment plan selection
	if (investPlanInput.value === "") {
		document.getElementById("error__investType").innerHTML =
			"Please select an investment plan";
		scrollToView__ErrorMessage();
		isError = true;
	}

	// If there's an error, show error message for 10 seconds
	if (isError) {
		setTimeout(function () {
			document.querySelectorAll(".error-message").forEach(function (el) {
				el.innerHTML = ""; // Clear error messages
			});
		}, 10000); // Show error message for 10 seconds
	}

	return !isError; // Return true if there are no errors
}

// ///////////////////
// *Code 3 - Scroll-into-view the INVALID Form Error Message
function scrollToView__ErrorMessage() {
	let offsetValue = 50;

	// Get the first error message element with a non-empty message
	let errorMessage = document.querySelector(".error-message:not(:empty)");

	// If an error message element is found, scroll to its parent container
	if (errorMessage) {
		let errorContainerId = errorMessage.id;
		let startingPoint = document
			.querySelector("#" + errorContainerId)
			.closest(".investment__calc__container");
		let scrollPosition = startingPoint.offsetTop - offsetValue;
		window.scrollTo({ top: scrollPosition, behavior: "smooth" });
	}
}

// ///////////////////
// *CODE 4 - scrolls-into-view the Investment Calc Result
function scrollToView__InvestCalcResult() {
	// Set the offset value (in pixels) from the top of the viewport
	let offsetValue = 150;

	// Get the element with class B= "investment__calc__results__container"
	let startingPoint = document.querySelector(
		".investment__calc__results__container"
	);

	// Calculate the scroll position by subtracting the offset value
	let scrollPosition = startingPoint.offsetTop - offsetValue;

	// Scroll to the startingPoint with the adjusted offset
	window.scrollTo({ top: scrollPosition, behavior: "smooth" });
}

// //////////////////
// *CODE 5 - Calculates the Result of Investment calculator
// /////////////////
function calculateInvestmentResults() {
	// Only execute calculation if the form has been validated
	if (isFormValidated) {
		// Get form input values
		let capitalInputValue = parseFloat(
			document.getElementById("id__invest__initial__deposit").value
		);
		// capitalInputValueDown round-down to just 2 decimal
		let capitalInputValueDown = Math.floor(capitalInputValue * 100) / 100;

		let selectedInvestPlan = document.getElementById(
			"id__choose__invest__plan"
		).value;

		// Perform calculations based on the selected investment plan
		let duration, interestRate;

		switch (selectedInvestPlan) {
			case "qg__6":
				duration = "6 months";
				interestRate = 0.17; // 17%
				break;
			case "qg__12":
				duration = "12 months";
				interestRate = 0.45; // 45%
				break;
			default:
				duration = "";
				interestRate = 0;
				break;
		}

		// Calculate interest and total amount at the end
		let totalAmountAtEnd =
			capitalInputValueDown + capitalInputValueDown * interestRate;

		// *Update the DOM with the calculated results

		// ///////////////
		// *duration result
		document.querySelector(".investment__duration__result__value").textContent =
			duration;

		// /////////////////
		// *interest result
		document.querySelector(
			".investment__result__roi--perday__value"
		).textContent = interestRate.toLocaleString("en-US", {
			style: "percent",
		});

		// ///////////////////
		// *Your Capital Result
		// Format the truncated capital result to include commas for thousands
		let formattedCapitalInputValueDown = capitalInputValueDown.toLocaleString(
			"en-US",
			{
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}
		);

		// Update the DOM with the truncated value
		document.querySelector(".investment__result__capital__value").textContent =
			"₦ " + formattedCapitalInputValueDown;

		// ///////////////////
		// *Your Interest Result
		// Calculate the interest result
		let interestResult = interestRate * capitalInputValueDown;

		// Truncate the interest result to exactly two decimal places
		let interestResultDown = Math.floor(interestResult * 100) / 100;

		// Format the truncated interest result to include commas for thousands
		let formattedInterestResult = interestResultDown.toLocaleString("en-US", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

		// Update the DOM with the formatted value
		document.querySelector(".invest__result__roi--naira__value").textContent =
			"₦ " + formattedInterestResult;

		// ////////////////////
		// *Total (your Capital = Your interest) Result
		// Truncate the total amount at the end to exactly two decimal places
		let totalAmountDown = Math.floor(totalAmountAtEnd * 100) / 100;

		// Format the truncated total amount to include commas for thousands
		let formattedTotalAmount = totalAmountDown.toLocaleString("en-US", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

		// Update the DOM with the formatted value
		document.querySelector(
			".client__total-amount__at__end__value"
		).textContent = "₦ " + formattedTotalAmount;
	}
}

// *CODE 6 - Calculates the Result of Investment calculator
// //////////////////
function showInvestCalcResult() {
	// show the calculator result
	let resultsContainer = document.querySelector(
		".investment__calc__results__container"
	);
	resultsContainer.style.display = "block";
}
