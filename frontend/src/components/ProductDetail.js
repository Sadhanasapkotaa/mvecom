import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const baseurl = "https://bookish-rotary-phone-rv4j7w56vxqcp65r-8000.app.github.dev/api";
  const [productData, setProductData] = useState([]);
  const [productImgs, setProductImgs] = useState([]);
  const { product_slug, product_id } = useParams();
  console.log(product_slug, product_id);


  useEffect(() => {
    fetchData(`${baseurl}/product/${product_id}`);
  }, [product_id]);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data)
        setProductImgs(data.product_imgs)
      })
      .catch((error) => console.log("Error", error));
  }
  // productData.product_imgs

  console.log(productImgs);

  
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <div
            id="productThumbnailSlider"
            className="carousel carousel-dark carousel-fade slide p-5 mt-4"
          >
            <div className="carousel-indicators">
            {productImgs.map((img, index) => (
          <button
            type="button"
            key={index}
            data-bs-target="#productThumbnailSlider"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
            </div>
            <div className="carousel-inner">
            
            {productImgs.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={img}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}


            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productThumbnailSlider"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productThumbnailSlider"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-8">
          <h3>{productData.title}</h3>
          <p>
           {productData.detail}
          </p>
          <h6 className="card-title text-muted">Price: Rs. {productData.price}</h6>
          <p className="mt-3 d-flex gap-3">
            <Link title="Demo" target="_blank" className="btn btn-dark btn-sm">
              <i title="Add to Wishlist" className="fa-solid fa-cart-plus"></i>{" "}
              Demo
            </Link>
            <button title="Add to Cart" className="btn btn-success btn-sm">
              <i title="Add to Wishlist" className="fa-solid fa-cart-plus"></i>{" "}
              Add to Cart
            </button>
            <button title="Buy Now" className="btn btn-primary btn-sm">
              <i title="Buy Now" className="fa-solid fa-bag-shopping"></i> Buy
              Now
            </button>
            <button title="Add to Cart" className="btn btn-danger btn-sm ms-1">
              <i title="Add to Wishlist" className="fa-solid fa-heart"></i> Add
              to Wishlist
            </button>
          </p>

          <hr />
          <div className="product-tags">
            <h5>Tags</h5>
            <p className="mt-3">
              <Link to="#" className="badge bg-secondary text-white me-2">
                Python
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-2">
                Django
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-2">
                Web Scripts
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Related Product begins here  */}
      {/* <div id="carouselExampleIndicators" className="carousel slide"> */}
      <h3>Related Products</h3>
      <div
        id="relatedProductsSlider"
        className="carousel carousel-dark slide bg-light p-5 mt-4"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#relatedProductsSlider"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#relatedProductsSlider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#relatedProductsSlider"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        {/* <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row mb-5">
              <SingleProduct title="AI Project" />
              <SingleProduct title="ML Project" />
              <SingleProduct title="DL Project" />
              <SingleProduct title="AR Project" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mb-5">
              <SingleProduct title="Django Project" />
              <SingleProduct title="Python Project" />
              <SingleProduct title="Flask Project" />
              <SingleProduct title="FastAPI Project" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mb-5">
              <SingleProduct title="DL Project" />
              <SingleProduct title="FastAPI Project" />
              <SingleProduct title="Django Project" />
              <SingleProduct title="AI Project" />
            </div>
          </div>
        </div> */}
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#relatedProductsSlider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#relatedProductsSlider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
      {/* Related Product begins here  */}
    </section>
  );
};

export default ProductDetail;
