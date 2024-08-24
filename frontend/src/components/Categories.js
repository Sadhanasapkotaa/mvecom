import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Categories = () => {
  return (
    <section className="container mt-4">
      {/* Popular Categories  */}
      <h3 className="mb-4">All Categories</h3>

      <div className="row mb-2">
        {/* Category Box Starts */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card shadow">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/category/python/1">Python</Link>
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
                <Link to="/category/python/1">Category Title</Link>
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
                <Link to="/category/python/1">Category Title</Link>
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
                <Link to="/category/python/1">Category Title</Link>
              </h5>
            </div>
            <div className="card-footer">Product Downloads: 1000</div>
          </div>
        </div>
        {/* Category Box Ends  */}
      </div>

      <div className="row mb-2">
        {/* Category Box Starts */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card shadow">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/category/python/1">Category Title</Link>
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
                <Link to="/category/python/1">Category Title</Link>
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
                <Link to="/category/python/1">Category Title</Link>
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
                <Link to="/category/python/1">Category Title</Link>
              </h5>
            </div>
            <div className="card-footer">Product Downloads: 1000</div>
          </div>
        </div>
        {/* Category Box Ends  */}
      </div>
      {/* End Popular Categories  */}

      {/* Pagination  */}
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Categories;
