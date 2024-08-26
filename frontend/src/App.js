import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom"; // Fixed import

// Components Import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import SingleProduct from "./components/SingleProduct";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import Wishlist from "./components/Customer/Wishlist";
import Profile from "./components/Customer/Profile";
import ChangePassword from "./components/Customer/ChangePassword";
import OrderSuccess from "./components/OrderSuccess";
import OrderFailure from "./components/OrderFailure";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route
          path="/category/:category_slug/:category_id"
          element={<CategoryProducts />}
        />
        <Route path="/products/" element={<AllProducts />} />
        <Route
          path="/product/:product_slug/:product_id"
          element={<ProductDetail />}
        />
        <Route path="/checkout/" element={<Checkout />} />
        <Route path="/order/success/" element={<OrderSuccess />} />
        <Route path="/order/failure/" element={<OrderFailure />} />
        <Route path="/customer/register/" element={<Register />} />
        <Route path="/customer/login/" element={<Login />} />
        <Route path="/customer/dashboard/" element={<Dashboard />} />
        <Route path="/customer/orders/" element={<Orders />} />
        <Route path="/customer/wishlist/" element={<Wishlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
