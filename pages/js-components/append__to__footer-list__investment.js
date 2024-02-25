// *this JS appends a list item to the
// footer section (under footer__products)
// in the investment part of the website

// Create a new list item
var investmentFooterListItem = document.createElement("li");

// Create a new anchor element
var anchorElement = document.createElement("a");
anchorElement.className = "footer__links pad-marg-0";
anchorElement.href = "../../training/financial-market__training.html";
anchorElement.textContent = "Financial Market Training";

// Append the anchor element to the list item
investmentFooterListItem.appendChild(anchorElement);

// Get the parent container with class "footer__products"
var container = document.querySelector(".footer__products");

// Get the unordered list element with class "footer__list-text" inside the container
var list = container.querySelector(".footer__list-text");

// Append the new list item to the list
list.appendChild(investmentFooterListItem);
