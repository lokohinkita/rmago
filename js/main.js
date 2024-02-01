

let isFormValid = true; //boolean
//will be used for displaying error
const nameFeedback = document.getElementById("orderItemName");
const priceFeedback = document.getElementById("orderItemPrice");
const sizeFeedback = document.getElementById("orderSize");
// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */

const isValueNotEmpty = (value) => {
  if (value.trim() !== "") {
    nameFeedback.classList.remove("is-invalid");
    return true;
  } else {
    // nameFeedback.classList.add("is-invalid");
    isFormValid = false;
    return false;
  }
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */

const isGreaterThanFive = (value) => {
  if (value > 5) {
    priceFeedback.classList.remove("is-invalid");
    return true;
  } else {
    // priceFeedback.classList.add("is-invalid");
    isFormValid = false;
    return false;
  }
};

const isSizeValueNotEmpty = (value) => {
  if (value.trim() !== "") {
    sizeFeedback.classList.remove("is-invalid");
    return true;
  } else {
    //sizeFeedback.classList.add("is-invalid");
    isFormValid = false;
    return false;
  }
};
/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */

const newOrderForm = document.querySelector("#new-order-form");
newOrderForm.addEventListener("submit", function (event) {
  event.preventDefault()

  //get form value
  const { orderItemName, orderItemPrice, orderSize } = event.target.elements;
  // print console
  console.log("Item Name:", orderItemName.value);
  console.log("Price:", orderItemPrice.value);
  console.log("Size:", orderSize.value);


  if (!isValueNotEmpty(orderItemName.value)) {
    nameFeedback.classList.add("is-invalid");
  }

  if (!isGreaterThanFive(orderItemPrice.value)) {
    priceFeedback.classList.add("is-invalid");
  }

  if (!isSizeValueNotEmpty(orderSize.value)) {
    sizeFeedback.classList.add("is-invalid");
  }

  if (isFormValid) {
    console.log("valid");
    addOrderItem(orderItemName.value, orderItemPrice.value, orderSize.value);
    // Clear form fields
    newOrderForm.reset();
  }


});
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$' + orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}