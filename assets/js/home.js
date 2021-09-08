(() => {
  const drawProducts = () => {
    const mainContainer = document.querySelector('.home--container');
    homeProducts.forEach((product, index) => {
      const tinifyImageClass = index > 3 && index < 7 ? 'tinifyimages' : ''; //selector to tinify images by index on page
      mainContainer.innerHTML += `
        <div class="container ${index % 2 !== 0 ? 'container2' : ''}">
          <div class="content-info">
            <h1 id="header">${product.name}</h1>
            <p>${product.summary}</p>
            <span class=compatible>${product.compatibility}</span>
            <span class="price">$${product.price_us}</span>
            <div class="btn--wrapper">
              <a href="#product?q=${product.id}" class="btn link">More Info</a>
            </div>
          </div>
          <div class="card">
            <button class="cardplus addtocart" data-index="${index}"><i class="fas fa-plus plus"></i>Add to Cart</button>
          </div>
          <div class="image-container image--anim">
            <img
              class="${tinifyImageClass} item--image blackitems image--anim--image"
              src="${product.image_dark}"
              alt="Item images"
            />
          </div>
          <div class="image-container image--anim">
            <img
              class="${tinifyImageClass} item--image whiteitems image--anim--image"
              src="${product.image_light}"
              alt="Item images"/>
          </div>
          <span class='availability--text'>${product.availability}</span>
        </div>
    `;
    });
  };

  drawProducts();
  // Add to cart on home screen, quantity is always 1!
  $(`.addtocart`).click((ev) => {
    const clickedItemIndex = ev.currentTarget.getAttribute('data-index');
    const product = homeProducts[clickedItemIndex];
    Cart.addItem({
      id: product.id,
      name: product.name,
      quantity: 1,
    });
  });

})();
