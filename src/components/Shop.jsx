import React from "react";
import "../styles/Shop.css";
import purplebag from "../assets/purplebag.WEBP";
import bluebag from "../assets/bluebag.WEBP";

const Shop = () => {
  return (
    <>
      {/* <div className="shop-section">
      <h1>Shop products</h1>
    <div id='color-line'></div>
    <span className='shop-buttons'>
        <button id='popular-btn'>Most popular</button>
        <button>What's new</button>
        <button>Bestseller</button>
    </span>

    <div className="popular-products">
      <div className="first-bag">
        <img src={purplebag} alt="" />
        <h2>FORNAX</h2>
        <h3>9,375</h3>
        <button>ADD TO CART</button>
      </div>

      <div className="second-bag">
        <img src={bluebag} alt="" />
        <h2>FORNAX</h2>
        <h3>9,375</h3>
        <button>ADD TO CART</button>
      </div>

      <div className="third-bag">
        <img src={bluebag} alt="" />
        <h2>FORNAX</h2>
        <h3>9,375</h3>
        <button>ADD TO CART</button>
      </div>
    </div>
      </div> */}

      <div className="second-section">
        <h2 class="heading">Shop products</h2>
        <br />
        <br />
        <br />
        <div className="btn-con">
        <div class="centre-btn">
          <button>Most popular</button>
          <button class="comp-btn">What's new</button>
          <button>Bestseller</button>
        </div>
        </div>

        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="carts-container">
                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>FORNAX</h3>
                  <span>
                    <h4>&#8377; 8,100</h4>
                    <h6>
                      &#8377;<strike>10,800</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>

                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>FORNAX</h3>
                  <span>
                    <h4>&#8377; 9,375</h4>
                    <h6>
                      &#8377;<strike>12,500</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>

                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>CIRCURITY</h3>
                  <span>
                    <h4>&#8377; 8,550</h4>
                    <h6>
                      &#8377;<strike>11,400</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>

                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>PLAY4BLUE BLUE</h3>
                  <span>
                    <h4>&#8377; 7,050</h4>
                    <h6>
                      &#8377;<strike>9,400</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carts-container">
                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>FORNAX</h3>
                  <span>
                    <h4>&#8377; 9,375</h4>
                    <h6>
                      &#8377;<strike>12,500</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>

                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>CIRCURITY</h3>
                  <span>
                    <h4>&#8377; 8,550</h4>
                    <h6>
                      &#8377;<strike>11,400</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>

                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>PLAY4BLUE BLUE</h3>
                  <span>
                    <h4>&#8377; 7,050</h4>
                    <h6>
                      &#8377;<strike>9,400</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>

                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>ROLLIO</h3>
                  <span>
                    <h4>&#8377; 8,100</h4>
                    <h6>
                      &#8377;<strike>13,500</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carts-container">
                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>CIRCURITY</h3>
                  <span>
                    <h4>&#8377; 8,550</h4>
                    <h6>
                      &#8377;<strike>11,400</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>

                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>PLAY4BLUE BLUE</h3>
                  <span>
                    <h4>&#8377; 7,050</h4>
                    <h6>
                      &#8377;<strike>9,400</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>

                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>ROLLIO</h3>
                  <span>
                    <h4>&#8377; 8,100</h4>
                    <h6>
                      &#8377;<strike>13,500</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>

                <div class="cart">
                  <img src="src/assets/luggage.webp" alt="" />
                  <h3>MAJORIS +</h3>
                  <span>
                    <h4>&#8377; 7,740</h4>
                    <h6>
                      &#8377;<strike>12,900</strike>
                    </h6>
                  </span>
                  <div class="cart-btn">ADD TO CART</div>
                  <div class="wish" tittle="Add">
                    <span>Add to Wish List</span>
                    <img src="src/assets/whishlist.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
