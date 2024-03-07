// This code removes the first 2 list items from the footer product

// Get the <ul> element by its class name
var list = document.querySelector(".footer__list-text");

// Check if the <ul> element exists
if (list) {
	// Get all <li> elements within the <ul>
	var listItems = list.querySelectorAll("li");

	// Check if there are at least two items in the list
	if (listItems.length >= 2) {
		// Remove the first and second list items
		listItems[0].remove();
		listItems[1].remove();
	} else {
		console.log("Not enough items to remove.");
	}
} else {
	console.log("List element not found.");
}
