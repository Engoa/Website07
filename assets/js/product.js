(() => {
  const product = homeProducts.find((x) => x.id === Router.getCurrentQuery().q);
  let itemQuantity = 1;

  const drawProduct = () => {
    document.getElementById('product').innerHTML = `
<div class="product">
  <div class='main--product'>
  <div class="product__image image--anim">
    <img
      class="product__image blackitems image--anim--image"
      src="${product.image_dark}"
      alt="Item images"
    />
    <img
      class="product__image whiteitems image--anim--image"
      src="${product.image_light}"
      alt="Item images"
    />
  </div>

  <div class="product__details">
    <div class="product__wrapper">
      <h1 class="product__name">${product.name}</h1>
      <p class="product__description">
       ${product.summary}
      </p>
      <div class="price--wrapper">
        <span class="price--wrapper__price" id='itemprice'>$${product.price_us}</span>
      </div>
      <div class="item--count">
        <div class="add"><button id='add'type="button">+</button></div>
        <div class="count"><span id='quantity'>${itemQuantity}</span></div>
        <div class="remove"><button id='remove' type="button">-</button></div>
      </div>
      <button class="product__cta btn link" id="buy-btn">Buy Product</button>
        <span class='availability--text' id='availability--product'>${product.availability}</span>
    </div>
  </div>
  </div>


  
  <div class="features--wrapper">
    <div class="features--wrapper__texts">
      <h3>FEATURES</h3>
      <div class="features__text1">
        <p>
          ${product.description1}
        </p>
      </div>
      <div class="features__text2">
        <p>
          ${product.description2}
        </p>
      </div>
    </div>
    <div class="inthebox">
      <h3>IN THE BOX</h3>
      <ul class='box--content'>

      </ul>
    </div>
  </div>

  <div class="product__images">
    <div class="product__images--right">
      <img class="productimage" src="${product.product_image1}" alt="" />
    </div>
    <div class="product__images--left">
      <div class="left__image">
        <img class="productimage" src="${product.product_image2}" alt="" />
      </div>

      <div class="product__images--left">
        <div class="left__image">
          <img class="productimage" src="${product.product_image3}" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

    `;
  };
  drawProduct();

  const drawInTheBox = () => {
    const inTheBoxList = document.querySelector('.box--content');
    product.boxes.forEach((boxItem) => {
      inTheBoxList.innerHTML += `
          <div class="inthebox__li">
            <li>
              <span>${boxItem.quantity}x - ${boxItem.text}</span>
            </li>
          </div>
        `;
    });
  };
  drawInTheBox();

  const itemQuantityElement = document.querySelector('#quantity');
  const addItem = document.querySelector('#add');
  const removeItem = document.querySelector('#remove');
  const itemsPriceElement = document.querySelector('#itemprice');

  const changeItemCount = (operator) => {
    itemQuantityElement.innerHTML = operator;
    let itemPrice = product.price_us;
    let totalPrice = itemQuantity * itemPrice;
    itemsPriceElement.innerHTML = '$' + totalPrice.toFixed(2);
  };

  addItem.addEventListener('click', () => {
    changeItemCount(itemQuantity++);
    itemQuantityElement.innerHTML++;
  });

  removeItem.addEventListener('click', () => {
    if (itemQuantity <= 1) {
      itemQuantity = 1;
      itemQuantityElement.innerHTML = itemQuantity;
    } else {
      changeItemCount(itemQuantity--);
      itemQuantityElement.innerHTML--;
    }
  });

  // Add to cart action
  $('#buy-btn').click(() =>
    Cart.addItem({
      id: product.id,
      name: product.name,
      quantity: itemQuantity,
    })
  );

  animatePage('.main--product, .features--wrapper > *');
})();
