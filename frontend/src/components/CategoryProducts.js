import React from "react";
import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CategoryProducts = () => {
  const baseurl = "https://bookish-rotary-phone-rv4j7w56vxqcp65r-8000.app.github.dev/api";
  const [Products, setProducts] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const { category_slug, category_id } = useParams();
  console.log(category_id);
  console.log(category_slug);

  useEffect(() => {
    fetchData(baseurl+"/products/?category="+category_id);
  }, []);

  function fetchData(baseurl){
    fetch(baseurl)
    .then((response) => response.json())
    .then((data) => {
      setProducts(data.results)
      setTotalResults(data.count) 
  })
    .catch((error) => console.log("Error", error))
  }

  function changeUrl (changedUrl){
    fetchData(changedUrl)
  }

  let links = [];
  let limit= 1;
  let totalLinks = totalResults / limit;

  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li className="page-item">
        <Link to={`/products/?page=${i}`} onClick ={()=> changeUrl(baseurl+`/products/?offset=${i-1}`)} className="page-link" >
          {i}
        </Link>
      </li>
    );
  }
  

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
       
      {
      Products.map((product) => (
      <SingleProduct key={product.id} product={product} />
    ))
    }
        
      </div>
      {/*  All Products End  */}

      {/* Pagination  */}
      <nav aria-label="Page navigation example">
        <ul class="pagination">
         {links}
        </ul>
      </nav>
    </section>
  );
};

export default CategoryProducts;
 

