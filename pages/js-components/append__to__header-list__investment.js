// this JS appends a list item to the footer section (under fund-header__list__container)

// Create a new list item
var investmentHeaderListItem = document.createElement("li");
investmentHeaderListItem.className = "fund-header__list__items";

// Create a new anchor element
var anchorElement = document.createElement("a");
anchorElement.className = "fund-header__list__items-link";
anchorElement.href = "../../training/financial-market__training.html";
anchorElement.textContent = "Training";

// Append the anchor element to the list item
investmentHeaderListItem.appendChild(anchorElement);

// Get the parent container with class "fund-header__list__container"
var container = document.querySelector(".fund-header__list__container");

// Get the unordered list element with class "footer__list-text" inside the container
var list = container.querySelector(".fund-header__list");

// Append the new list item to the list
list.appendChild(investmentHeaderListItem);

// ////////////////////
// *determine where you want to always place the new <li></li>
// Get the reference element (li with class "header__login")
var referenceElement = list.querySelector(".header__login");

// Insert the new list item before the reference element
list.insertBefore(investmentHeaderListItem, referenceElement);
