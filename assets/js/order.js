(() => {
  const formElement = document.getElementById('form');
  const dropDownMenu = document.getElementById('country');
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const city = document.getElementById('city');
  const address = document.getElementById('address');
  const zipCode = document.getElementById('zipcode');
  const totalResultElement = document.getElementById('cost');
  const orderDescription = document.getElementById('description');
  const youtubePlayer = document.getElementById('player');

  const checkBoxes = document.querySelectorAll('input[type=checkbox]');
  let totalValue = 0;
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
      if (checkBox.checked) {
        totalResultElement.style.opacity = 1;
        totalValue += Number(checkBox.value);
        totalResultElement.innerText = 'Total Result: ' + '\n' + totalValue.toFixed(2) + '$';
        console.log('Added:' + checkBox.id);
      } else {
        totalResultElement.style.opacity = 1;
        totalValue -= Number(checkBox.value);
        totalResultElement.innerText = 'Total Result: ' + '\n' + totalValue.toFixed(2) + '$';
        console.log('Removed:' + checkBox.id);
      }
    });
  });

  // Get users details for order

  let userSelected = 0;
  dropDownMenu.addEventListener('change', (event) => {
    userSelected = event.target.value;
  });

  function getUserDetails() {
    const orderDetails = {
      firstname: fname.value,
      lastname: lname.value,
      city: city.value,
      country: userSelected,
      address: address.value,
      zipcode: zipCode.value,
    };
    orderDescription.innerText = JSON.stringify(orderDetails, null, 4);
    console.log(orderDetails);
  }
  // Get users details for order

  // Submit form
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    getUserDetails();
    youtubePlayer.classList.toggle('hide');
  });
  // Submit form

  // Reset button
  const resetBtn = document.getElementById('resetbtn');
  resetBtn.addEventListener('click', () => {
    totalResultElement.style.opacity = 0;
    totalValue = 0;
    totalResultElement.innerText = 'Goodbye :)';
    totalResultElement === totalValue;
    youtubePlayer.classList.toggle('hide');
  });
  // Reset button
})();
