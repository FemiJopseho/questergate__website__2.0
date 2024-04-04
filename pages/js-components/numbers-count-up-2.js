// this is the JS to create a counting upwards...
//of number in the pages

// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
	// Get all elements with the class "counter"
	const counters = document.querySelectorAll(".counter-2");

	// Set the target count (1000)
	const targetCount = 525;

	// Set the increment interval (adjust as needed for speed)
	const increment = 1;

	// Set the interval duration (adjust as needed for speed)
	const intervalDuration = 30; // in milliseconds

	// Calculate the step based on the increment and duration
	const step = (targetCount * increment) / (525 / intervalDuration);

	// Create a function to update the counters
	const updateCounters = () => {
		let allCountersReachedTarget = true;

		counters.forEach((counter) => {
			// Get the current count from the counter element
			let count = parseFloat(counter.textContent);

			// Increment the count
			count += step;

			// Update the counter's text
			counter.textContent = Math.min(count, targetCount);

			// Check if the target count is reached for each counter
			if (count < targetCount) {
				allCountersReachedTarget = false;
			}
		});

		// If all counters have reached the target, display "1k" and stop the interval
		if (allCountersReachedTarget) {
			//display 1k
			counters.forEach((counter) => {
				counter.textContent = "500+";
			});

			// If all counters have reached the target, stop the interval
			clearInterval(counterInterval);
		}
	};

	// Start the counter interval
	const counterInterval = setInterval(updateCounters, intervalDuration);
});
