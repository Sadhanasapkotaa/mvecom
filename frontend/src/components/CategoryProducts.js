import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const CategoryProducts = () => {
  const baseurl = "https://bookish-rotary-phone-rv4j7w56vxqcp65r-8000.app.github.dev/api";
  const [products, setProducts] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const { category_slug, category_id } = useParams();
  
  const categoryId = parseInt(category_id);

  console.log(categoryId);
  console.log(category_slug);

  console.log(`${baseurl}/products/category=${categoryId}`);

  useEffect(() => {
    fetchData(`${baseurl}/products/?category=${categoryId}`);
  }, []);

  function fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
        setTotalResults(data.count);
      })
      .catch((error) => console.log("Error", error));
  }

  function changeUrl(changedUrl) {
    fetchData(changedUrl);
  }

  const limit = 1;
  const totalLinks = Math.ceil(totalResults / limit);
  const links = [];

  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li className="page-item" key={i}>
        <Link 
          to={`/category/${category_slug}/${categoryId}`}
          onClick={() => changeUrl(`${baseurl}/products/?category=${categoryId}&limit=${i}&offset=${i-1}`)}
          className="page-link"
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <section className="container mt-4">
      {/* All Products */}
      <h3 className="mb-4">
        <span className="text-danger">All Products</span>
        <a href="#" className="float-end btn btn-sm btn-dark m-0">
          View All Products <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </h3>
      <div className="row mb-4">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
      {/* All Products End */}

      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {links}
        </ul>
      </nav>
    </section>
  );
};

export default CategoryProducts;
