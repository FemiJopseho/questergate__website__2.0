// this uses the intersection Observer API to bring....
// sections of the website into view as you scroll.
//
//
// Function to handle the intersection observer callback.
const handleIntersection = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("visible");
			observer.unobserve(entry.target);
		}
	});
};

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
	root: null,
	rootMargin: "0px",
	threshold: window.innerWidth < 875 ? 0.2 : 0.5, // Adjust threshold for tablets and mobile
});

// Target the sections with the class "hidden"
const sectionsToReveal = document.querySelectorAll(".hidden");

// Observe each section
sectionsToReveal.forEach((section) => {
	observer.observe(section);
});
