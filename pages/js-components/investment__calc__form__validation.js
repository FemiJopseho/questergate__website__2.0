//  this code Validates the Forms in the savings calculator

document.addEventListener("DOMContentLoaded", function () {
	const investForm = document.getElementById("id__invest__plan__form-1");

	investForm.addEventListener("submit", function (event) {
		// Validate Capital (₦)
		const initialDeposit = parseInt(
			document.getElementById("id__invest__initial__deposit").value
		);

		if (
			isNaN(initialDeposit) ||
			initialDeposit < 100000 ||
			initialDeposit > 25000000
		) {
			alert(
				"Please enter a valid initial deposit between ₦100,000 and ₦25,000,000."
			);
			event.preventDefault();
			return;
		}

		// Validate Choose an Investment Plan
		const investPlanSelect = document.getElementById(
			"id__choose__invest__plan"
		);

		if (investPlanSelect.value === "") {
			alert("Please choose an investment plan.");
			event.preventDefault();
			return;
		}
	});
});
