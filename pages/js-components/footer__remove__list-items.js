// this code removes elements from html. it has 2 ways of doing that:

// ///////////////////////////////////////////
/////////////////////////////////////////////
// *METHOD 1: Remove List from UL/OL based on their position(index)
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

//
//
//
// ///////////////////////////////////////////
/////////////////////////////////////////////
// *METHOD 3: Combined removal-- remove elements based on class/id
function removeElements(classesAndIds) {
	classesAndIds.forEach(function (classOrId) {
		var element = document.querySelector(classOrId);
		if (element) {
			element.remove();
		} else {
			console.log("Element with class/id '" + classOrId + "' not found.");
		}
	});
}

// input the elements class/id and call the removeElements()
var classesAndIds = [
	"#remove__footer__social-face",
	"#remove__footer__social-x",
];
removeElements(classesAndIds);
