(() => {
  const formElement = document.getElementById('form');
  const dropDownMenu = document.getElementById('country');
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const city = document.getElementById('city');
  const street = document.getElementById('address');
  const zipCode = document.getElementById('zipcode');
  const totalResultElement = document.getElementById('cost');

  // Calculation of items
  const checkBoxes = document.querySelectorAll('input[type=checkbox]');
  let totalValue = 0;
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      const checkBoxValue = Number(checkbox.value);
      if (checkbox.checked) {
        handleCalculation((totalValue += checkBoxValue));
        console.log('Added:' + checkbox.id);
      } else {
        handleCalculation((totalValue -= checkBoxValue));
        console.log('Removed:' + checkbox.id);
      }
    });
  });

  const handleCalculation = (calculation) => {
    totalResultElement.style.opacity = 1;
    totalResultElement.innerText = 'Total Result: ' + '\n' + totalValue.toFixed(2) + '$';
    // calculation;
  };

  // Calculation of items

  // Get users details for order
  let userSelected = 0;
  dropDownMenu.addEventListener('change', (event) => {
    userSelected = event.target.value;
  });

  const getUserDetails = () => {
    const orderDetails = {
      fullname: {
        firstname: fname.value,
        lastname: lname.value,
      },
      address: {
        country: userSelected,
        city: city.value,
        street: street.value,
        zipcode: zipCode.value,
      },
    };
    console.log(orderDetails);
  };
  // Get users details for order

  // Submit form
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    getUserDetails();
  });
  // Submit form

  // Reset button
  const resetBtn = document.getElementById('resetbtn');
  resetBtn.addEventListener('click', () => {
    totalResultElement.style.opacity = 0;
    totalValue = 0;
    totalResultElement === totalValue;
  });
  // Reset button
})();
