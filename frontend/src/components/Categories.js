import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Categories = () => {
  const baseurl = "https://bookish-rotary-phone-rv4j7w56vxqcp65r-8000.app.github.dev/api";
  const [categories, setCategories] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Adjust this as per your API's pagination settings

  useEffect(() => {
    fetchData(baseurl + "/categories/?limit=" + itemsPerPage + "&offset=" + (currentPage - 1) * itemsPerPage);
  }, [currentPage]);

  function fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.results);
        setTotalResults(data.count);
      })
      .catch((error) => console.log("Error", error));
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  const totalPages = Math.ceil(totalResults / itemsPerPage);

  let links = [];
  let limit= 1;
  let totalLinks = totalResults / limit;

  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li key={i} className="page-item">
        <Link
          to={`/categories/?page=${i}`}
          onClick={() => handlePageChange(i)}
          className="page-link"
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <section className="container mt-4">
      {/* Popular Categories  */}
      <h3 className="mb-4">All Categories</h3>

      <div className="row mb-2">
        {categories.map((category) => (
          <div key={category.id} className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt={category.title} />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/category/${category.title}/${category.id}/`}>
                    {category.title}
                  </Link>
                </h5>
              </div>
              <div className="card-footer">Product Downloads: 1000</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination  */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {links}
        </ul>
      </nav>
    </section>
  );
};

export default Categories;