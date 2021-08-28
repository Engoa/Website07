(() => {
  const formElement = document.getElementById('form');
  const dropDownMenu = document.getElementById('country');
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const city = document.getElementById('city');
  const address = document.getElementById('address');
  const zipCode = document.getElementById('zipcode');
  const totalResultElement = document.getElementById('cost');
  let userSelected = 0;

  dropDownMenu.addEventListener('change', (event) => {
    userSelected = event.target.value;
  });
  // Get users details for order
  function getUserDetails() {
    let fnameValue = fname.value;
    let lnameValue = lname.value;
    let cityValue = city.value;
    let addressValue = address.value;
    let zipCodeValue = +zipCode.value;
    let userDetails = ` 
     FirstName: "${fnameValue}",
     LastName: "${lnameValue}",
     City: "${cityValue}",
     Country: "${userSelected}",
     Street/Address: "${addressValue}",
     ZIPCode: "${zipCodeValue}"`;
    console.log(userDetails);
  }
  // Get users details for order

  const checkBoxes = document.querySelectorAll('input[type=checkbox]');
  let totalValue = 0;
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
      if (checkBox.checked) {
        totalValue += Number(checkBox.value);
        totalResultElement.innerText = totalValue.toFixed(2) + '$';
      } else {
        totalValue -= Number(checkBox.value);
        totalResultElement.innerText = totalValue.toFixed(2) + '$';
      }
    });
  });

  // Submit form
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    getUserDetails();
  });
  // Submit form

  // Reset button
  const resetBtn = document.getElementById('resetbtn');
  resetBtn.addEventListener('click', () => {
    let currentResult = 0;
    totalResultElement.innerText = +currentResult + '$';
  });
  // Reset button
})();
