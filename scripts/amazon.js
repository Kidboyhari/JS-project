const product = [{
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
        stars: 4.5,
        count: 87  //asdf
    },
    priceCents: 500
},{
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating : {
        stars: 4,
        count: 127
    },
    priceCents: 20000
},{
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
        stars: 4.5,
        count: 56
    },
    priceCents: 70000
},{
    image: 'https://m.media-amazon.com/images/I/6121rZg+cBL._SY535_.jpg',
    name: 'adidas F50 Club FG/MG Football Cleats, Tesoye/Cblack/Lucred, Firm Ground/Multi-Ground Soccer Shoes',
    rating:{
        stars: 4.5,
        count: 115
    },
    priceCents: 413900
},{
    image:'https://m.media-amazon.com/images/I/616-Eh2FbPL._SX679_.jpg',
    name: 'Apple iPhone 17 Pro Max 256 GB: 17.42 cm Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fusion Camera System, Center Stage Front Camera; Silver',
    rating:{
        stars: 4.5,
        count: 404
    },
    priceCents: 14990000
},{
    image: 'https://m.media-amazon.com/images/I/619zWdlNnbL._SX450_.jpg',
    name: 'HARLEY-DAVIDSON X440 S Motorcycle 440cc Matte Black',
    rating:{
        stars: 4.5,
        count: 344
    },
    priceCents: 2590000000
},{
    image: 'https://m.media-amazon.com/images/I/51LcGZjQaxL._SY450_.jpg',
    name: 'Ray-Ban Meta (Gen 2), Wayfarer Large, Matte Black | Smart AI Glasses for Men, Women — 2X Battery Life — 3K Ultra HD Resolution — 12 MP Ultra-Wide Camera, Audio, Video — Transitions® Grey Lenses',
    rating:{
        stars: 3.5,
        count: 177
    },
    priceCents: 4570000
},{
    image: 'https://m.media-amazon.com/images/I/41qHlicFZvL.jpg',
    name: 'Gigavibe Burgundy Leather Crop Bomber Jacket Collared Zip-Up Regular Fit Solid Casual Style Racing Sports Jacket for Men and Women',
    rating: {
        stars: 3,
        count: 23
    },
    priceCents: 999999
},{
    image: 'https://m.media-amazon.com/images/I/61L3QBZ7Q+L._SX679_.jpg',
    name: 'Apple 2025 MacBook Pro Laptop with M5 chip, 10‑core CPU and 10‑core GPU: Built for Apple Intelligence, 35.97 cm (14.2″) Liquid Retina XDR Display, 24GB Unified Memory, 1TB SSD Storage; Silver',
    rating:{
        stars: 5,
        count: 180
    },
    priceCents: 20299000
},{
    image: 'https://m.media-amazon.com/images/I/613l8ZN8TfL._AC_SX569_.jpg',
    name: 'Nike Mens Court Vision Lo Nn Sneakers',
    rating:{
        stars: 5,
        count: 154
    },
    priceCents: 499500
},{
    image: 'https://m.media-amazon.com/images/I/71xHws+eI5L._SX679_.jpg',
    name: 'Samsung Galaxy S26 Ultra 5G (Cobalt Violet, 12GB RAM, 256GB Storage) with Built-in Privacy Display, AI Phone, Photo Assist, Creative Studio, 200MP Camera, 5000mAh Battery and Snapdragon 8 Elite Gen 5',
    rating:{
        stars: 4.5,
        count: 249
    },
    priceCents: 13099900
},{
    image: 'https://m.media-amazon.com/images/I/71NZHYzkyzL._SX679_.jpg',
    name: 'Sony Alpha ILCE-6700M APS-C Interchangeable-Lens Mirrorless Camera (Body + 18-135 mm Power Zoom Lens) | Made for Creators | 26.0 MP | Artificial Intelligence based Autofocus | 4K 60p Recording - Black',
    rating:{
        stars: 5,
        count: 525
    },
    priceCents: 15899000
}]
let productsHTML = '';
product.forEach((products) => {
    productsHTML =  productsHTML + `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            $ ${products.priceCents / 100}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart">
            Add to Cart
          </button>
        </div>
    `;
    document.querySelector('.js-products-grid')
    .innerHTML = productsHTML;
    document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            console.log('Added Product');
        });
    });
});