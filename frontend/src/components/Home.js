import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
const Home = () => {
  return (
    <main className="mt-4">
      <div className="container">
        <h1 className="text-center">This is Business</h1>
        {/* Latest Products  */}
        <h3 className="mb-4">
          Latest Products
          <Link to="/products/" className="float-end btn btn-sm btn-dark m-0 ">
            View All Products <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row mb-4">
          <SingleProduct title="Django Project" />
          <SingleProduct title="Python Project" />
          <SingleProduct title="Flask Project" />
          <SingleProduct title="FastAPI Project" />
          <SingleProduct title="AI Project" />
          <SingleProduct title="ML Project" />
          <SingleProduct title="DL Project" />
          <SingleProduct title="AR Project" />
        </div>
        {/* End Latest Products  */}

        {/* Popular Categories  */}
        <h3 className="mb-4">
          Popular Categories
          <a href="#" className="float-end btn btn-sm btn-dark m-0 ">
            View All Categories <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </h3>

        <div className="row mb-4">
          {/* Category Box Starts */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Product title</b>
                </h5>
              </div>
              <div className="card-footer">Product Downloads: 1000</div>
            </div>
          </div>
          {/* Category Box Ends  */}

          {/* Category Box Starts */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Product title</b>
                </h5>
              </div>
              <div className="card-footer">Product Downloads: 1000</div>
            </div>
          </div>
          {/* Category Box Ends  */}

          {/* Category Box Starts */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Product title</b>
                </h5>
              </div>
              <div className="card-footer">Product Downloads: 1000</div>
            </div>
          </div>
          {/* Category Box Ends  */}

          {/* Category Box Starts */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Product title</b>
                </h5>
              </div>
              <div className="card-footer">Product Downloads: 1000</div>
            </div>
          </div>
          {/* Category Box Ends  */}
        </div>
        {/* End Popular Categories  */}

        {/* Popular Products  */}
        <h3 className="mb-4">
          Popular Products
          <a href="#" className="float-end btn btn-sm btn-dark m-0 ">
            View All Popular Products{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </h3>
        <div className="row mb-4">
          <SingleProduct title="AI Project" />
          <SingleProduct title="ML Project" />
          <SingleProduct title="DL Project" />
          <SingleProduct title="AR Project" />
        </div>
        {/* End Popular Products  */}

        {/* Popular Vendors  */}
        <h3 className="mb-4">
          Popular Vendors
          <a href="#" className="float-end btn btn-sm btn-dark m-0 ">
            All Vendors <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </h3>

        <div className="row mb-4">
          {/* Vendor Box Starts */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Vendor Name</b>
                </h5>
              </div>
              <div className="card-footer">
                Categories: <a href="#">Python</a>, <a href="#">PHP</a>
              </div>
            </div>
          </div>
          {/* Vendor Box Ends  */}

          {/* Vendor Box Starts */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Vendor Name</b>
                </h5>
              </div>
              <div className="card-footer">
                Categories: <a href="#">JavaScript</a>, <a href="#">Vue.js</a>
              </div>
            </div>
          </div>
          {/* Vendor Box Ends  */}

          {/* Vendor Box Starts */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Vendor Name</b>
                </h5>
              </div>
              <div className="card-footer">
                Categories: <a href="#">React.js</a>, <a href="#">Angular.js</a>
              </div>
            </div>
          </div>
          {/* Vendor Box Ends  */}

          {/* Vendor Box Starts */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Vendor Name</b>
                </h5>
              </div>
              <div className="card-footer">
                Categories: <a href="#">WordPress</a>, <a href="#">Shopify</a>
              </div>
            </div>
          </div>
          {/* Vendor Box Ends  */}
        </div>

        {/* End Popular Categories  */}
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide my-5 border bg-dark text-white p-5 container"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <img src="..." className="d-block w-100" alt="..." /> */}
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star"></i>
                <cite title="Source Title"> Customer Name</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            {/* <img src="..." className="d-block w-100" alt="..." /> */}
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star"></i>
                <cite title="Source Title"> Customer Name</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            {/* <img src="..." className="d-block w-100" alt="..." /> */}
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star"></i>
                <cite title="Source Title"> Customer Name</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};

export default Home;
