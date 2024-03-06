//  this code Validates the Forms in the savings calculator
document.addEventListener("DOMContentLoaded", function () {
	// Get the form element
	const savingsForm = document.getElementById("id__savings__plan__form-1");

	// Add event listener to the form on submission
	savingsForm.addEventListener("submit", function (event) {
		// Check if the initial deposit is a number
		const initialDeposit = parseFloat(
			document.getElementById("id__initial__deposit").value
		);

		// Separate alerts for different initial deposit ranges
		if (isNaN(initialDeposit)) {
			alert("Please enter a valid initial deposit.");
			event.preventDefault(); // Prevent form submission
			return;
		} else if (initialDeposit < 5000) {
			alert("Initial deposit must be at least ₦5,000.");
			event.preventDefault(); // Prevent form submission
			return;
		} else if (initialDeposit > 25000000) {
			alert("Initial deposit cannot exceed ₦25,000,000.");
			event.preventDefault(); // Prevent form submission
			return;
		}

		// Check if other required fields are selected
		const planSelect = document.getElementById("id__choose__save__plan");
		const durationSelect = document.getElementById("choose__save__duration");

		if (planSelect.value === "" || durationSelect.value === "") {
			alert("Please select a savings plan and duration.");
			event.preventDefault(); // Prevent form submission
		}
	});
});
