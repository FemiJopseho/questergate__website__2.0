// this code ensure the testimonial cards scroll when the arrows are clicked

// Wait for the document to be ready before executing the code
$(document).ready(function () {
	// Move the last 2 testimonial__slides to the beginning by adjusting their order property
	$(".testimonial__slides").each(function (i) {
		if ($(this).is(":last-of-type")) {
			$(this).css("order", -1);
		} else if ($(this).is(":nth-last-of-type(2)")) {
			$(this).css("order", -2);
		} else {
			$(this).css("order", i);
		}
	});

	// Variable to track whether the carousel is currently being animated
	var carouselAnimating = false;

	// Handle click events on carousel navigation buttons (next/prev)
	$(".carousel-nav button").click(function (e) {
		e.preventDefault();

		// Determine the direction based on the button clicked
		var dir = $(this).hasClass("next") ? "next" : "prev";

		// Ensure that carousel animation is not already in progres
		if (carouselAnimating === false) {
			carouselAnimating = true;
			// Move the testimonial__slides in the specified direction
			movetestimonial__slides(dir);

			// Reset testimonial__slides for infinite display after a delay
			testimonial__slidesReset(dir);
		}
	});

	// Move all testimonial__slides left or right by one testimonial__slides
	function movetestimonial__slides(dir) {
		// Set default direction to "next" if not provided
		var dir = typeof dir !== "undefined" ? dir : "next";

		// Get the current margin-left value of the carousel
		var currentLeft = parseFloat(
			$(".testimonial-carousel.noanimate").css("margin-left")
		);

		// Get the width of a single testimonial__slides (including margin)
		var testimonial__slidesWidth = $(".testimonial__slides").outerWidth(true);

		// Adjust testimonial__slidesWidth based on the direction of movement
		testimonial__slidesWidth =
			dir === "next" ? testimonial__slidesWidth * -1 : testimonial__slidesWidth;

		// Remove the 'noanimate' class to allow animation
		$(".testimonial-carousel").removeClass("noanimate");

		// Update the margin-left to move the testimonial__slides
		$(".testimonial-carousel").css(
			"margin-left",
			currentLeft + testimonial__slidesWidth + "px"
		);
	}

	// Reset testimonial__slides for infinite display after a delay
	function testimonial__slidesReset(dir) {
		// Set default direction to "next" if not provided
		var dir = typeof dir !== "undefined" ? dir : "next";

		// Delay the execution to wait for the animation to complete
		setTimeout(function () {
			// Disable animation to avoid visual glitches during order change
			$(".testimonial-carousel").addClass("noanimate");
			var testimonial__slides = $(".testimonial__slides");

			// Adjust the order property of each testimonial__slides based on the direction
			if (dir === "next") {
				$(testimonial__slides).each(function () {
					if (-2 === parseInt($(this).css("order"))) {
						$(this).css("order", testimonial__slides.length - 3);
					} else {
						$(this).css("order", parseInt($(this).css("order")) - 1);
					}
				});
			} else {
				$(testimonial__slides).each(function () {
					if (
						testimonial__slides.length ===
						parseInt($(this).css("order")) + 3
					) {
						$(this).css("order", -2);
					} else {
						$(this).css("order", parseInt($(this).css("order")) + 1);
					}
				});
			}

			// Remove inline styles to reset the margin-left
			$(".testimonial-carousel").removeAttr("style");

			// Reset the flag to allow the next animation
			carouselAnimating = false;
		}, 600); // Adjust the delay as needed
	}
});
