// the code is for the swiper feature used on the website testimonials
// *in this code, i added my own textFit() as a custom one.

/**
  Swiper:
  https://swiperjs.com/
**/
const swiper = new Swiper(".swiperCarousel", {
	slidesPerView: 3,
	centeredSlides: true,
	spaceBetween: 15, //space btw each -swiper-slide
	keyboard: {
		enabled: true,
	},
	loop: true,
	pagination: {
		el: ".swiper-pagination",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
	slide.addEventListener("click", () => {
		const { className } = slide;
		if (className.includes("swiper-slide-next")) {
			swiper.slideNext();
		} else if (className.includes("swiper-slide-prev")) {
			swiper.slidePrev();
		}
	});
}

// /////////////////////////////////
// Add a button with class "prev" and title "previous"
const prevButton = document.querySelector(".testimonial-carousel__scroll-left");
if (prevButton) {
	prevButton.addEventListener("click", () => {
		swiper.slidePrev();
	});
}

// Add a button with class "next" and title "next"
const nextButton = document.querySelector(
	".testimonial-carousel__scroll-right"
);
if (nextButton) {
	nextButton.addEventListener("click", () => {
		swiper.slideNext();
	});
}
// ///////////////////////////////////

function textFit(elements, options = {}) {
	const defaultOptions = {
		maxFontSize: 16,
		minFontSize: 10,
	};

	const { maxFontSize, minFontSize } = { ...defaultOptions, ...options };

	for (const element of elements) {
		const containerWidth = element.offsetWidth;
		const containerHeight = element.offsetHeight;

		let fontSize = maxFontSize;

		element.style.fontSize = `${fontSize}px`;

		while (
			element.scrollWidth > containerWidth ||
			element.scrollHeight > containerHeight
		) {
			fontSize--;

			if (fontSize < minFontSize) {
				break;
			}

			element.style.fontSize = `${fontSize}px`;
		}
	}
}

function resizeTextToFit() {
	const quoteEls = document.getElementsByClassName("quote");
	for (const el of quoteEls) {
		el.style.width = el.offsetWidth;
		el.style.height = el.offsetHeight;
	}
	textFit(quoteEls, { maxFontSize: 14, minFontSize: 10 });
}
resizeTextToFit();
addEventListener("resize", (event) => {
	resizeTextToFit();
});
