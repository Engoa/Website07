(() => {
  const drawProducts = () => {
    const mainContainer = document.querySelector('.home--container');
    homeProducts.map((product, index) => {
      const tinifyImageClass = index > 3 && index < 7 ? 'tinifyimages' : '';
      mainContainer.innerHTML += `
        <div class="container ${index % 2 !== 0 ? 'container2' : ''}">
          <div class="content-info">
            <h1 id="header">${product.name}</h1>
            <p>${product.summary}</p>
            <span class=compatible>${product.compatibility}</span>
            <span class="price">$${product.price_us} / €${product.price_eu}</span>
            <div class="btn--wrapper">
              <a href="#product?q=${product.id}" class="btn link">More Info</a>
            </div>
          </div>
          <div class="card">
            <a class="cardplus" href="#"> <i class="fas fa-plus plus"></i>Add to Cart</a>
          </div>
          <div class="image-container ">
            <img
              class="${tinifyImageClass} item--image blackitems"
              src="${product.image_dark}"
              alt="Item images"
            />
          </div>
          <div class="image-container">
            <img
              class="${tinifyImageClass} item--image whiteitems"
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
