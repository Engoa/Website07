(() => {
  const productName = Router.getCurrentQuery().q;
  // console.log(productName);

  const product = homeProducts.find((x) => x.id === productName);

  document.getElementById('product').innerHTML = `
<div class="product">
  <div class="product__image">
    <img
      class="product__image blackitems"
      src="${product.image_dark}"
      alt="Item images"
    />
    <img
      class="product__image whiteitems"
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
        <span class="price--wrapper__price">$${product.price_us} / €${product.price_eu}</span>
      </div>
      <div class="item--count">
        <div class="add"><button type="button">+</button></div>
        <div class="count"><span>1</span></div>
        <div class="remove"><button type="button">-</button></div>
      </div>
      <a href="#" class="product__cta btn link">Buy Product</a>
        <span class='availability--wrapper__text'>${product.availability}</span>
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
        <div class="inthebox__li">
            <span>X - </span>
        </div>
        <div class="inthebox__li">
            <span>X</span>
        </div>
        <div class="inthebox__li">
            <span>X</span>
        </div>
        <div class="inthebox__li">
            <span>X</span>
        </div>
      </ul>
    </div>
  </div>

  <div class="product__images">
    <div class="product__images--right">
      <img class="productimage" src="/assets/images/controllerproduct.jpg" alt="" />
    </div>
    <div class="product__images--left">
      <div class="left__image">
        <img class="productimage" src="/assets/images/controllerproduct2.jpg" alt="" />
      </div>

      <div class="product__images--left">
        <div class="left__image">
          <img class="productimage" src="/assets/images/controllerproduct3.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

    `;

  // const drawInTheBox = () => {
  //   const unOrderedList = document.querySelector('.box--content');
  //   homeProducts.forEach((product) => product?.box).map((item) => console.log(item));
  // };
  // drawInTheBox();
})();
