import React from "react";
import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
  return (
    <section className="container mt-4">
      {/* All Products  */}
      <h3 className="mb-4">
        <span className="text-danger">All Products</span>
        <a href="#" className="float-end btn btn-sm btn-dark m-0 ">
          View All Products <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </h3>
      <div className="row mb-4">
       
        <SingleProduct title="Django Project" />
        
      </div>
      {/*  All Products End  */}

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

export default AllProducts;
