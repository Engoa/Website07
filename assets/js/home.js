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
          <div class="image-container">
            <img
              id="blackcontroller"
              src="${product.image_dark}"
              alt="Controller image"
            />
          </div>
          <div class="image-container">
            <img
              id="whitecontroller"
              src="${product.image_light}"
              alt="Controller image"
            />
          </div>
        </div>
    `;
  });
};

drawProducts();
