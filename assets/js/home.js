(() => {
  const drawProducts = () => {
    const mainContainer = document.querySelector('.home--container');
    homeProducts.map((product, index) => {
      mainContainer.innerHTML += `
        <div class="container ${index % 2 !== 0 ? 'container2' : ''}">
          <div class="content-info">
            <h1 id="header">${product.name}</h1>
            <p>${product.description}</p>
            <span class=compatible>${product.compatibility}</span>
            <span class="price">$${product.price_us} / €${product.price_eu}</span>
            <div class="btn--wrapper">
              <a href="#" class="btn link">More Info</a>
            </div>
          </div>
          <div class="card">
            <a class="cardplus" href="#"> <i class="fas fa-plus plus"></i>Add to Cart</a>
          </div>
          <div class="image-container ">
            <img
              class="${index === 4 || index === 5 || index === 6 ? 'tinifyimages' : ''}"
              id="blackitems"
              src="${product.image_dark}"
              alt="Item images"
            />
          </div>
          <div class="image-container">
            <img
              class="${index === 4 || index === 5 || index === 6 ? 'tinifyimages' : ''}"
              id="whiteitems"
              src="${product.image_light}"
              alt="Item images"/>
          </div>
        </div>
        <span class='availability--wrapper__text'>${product.availability}</span>
    `;
    });
  };

  drawProducts();
})();
