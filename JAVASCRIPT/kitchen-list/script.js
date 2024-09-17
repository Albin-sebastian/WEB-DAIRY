// Get the input field element
let kitchenInput = document.getElementById
  ("kitchen-input");

// Get the "Add" button element
let addBtn = document.getElementById("add-btn");

// Get the list element where we'll display the kitchen items
let kitchenItemsList = document.getElementById("kitchen-items-list");

// step-2
// Define a function to add a new kitchen item
const addKitchenItems = () => {
  // Get the input data from the input field
  let kitchenInputData = kitchenInput.value;

  // Create a new list item element
  let li = document.createElement('li');
  // Set the text of the list item to the input data
  li.innerText = kitchenInputData;

  li.style.cssText = "animation-name:slideIn;";

  // Add the list item to the list
  kitchenItemsList.appendChild(li);

}
// step-1
// Add an event listener to the "Add" button to call the addKitchenItems function when clicked
addBtn.addEventListener('click', addKitchenItems)


