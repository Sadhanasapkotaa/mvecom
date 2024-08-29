import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom"; // Fixed import
// source env/bin/activate 
// Components Import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
// import SingleProduct from "./components/SingleProduct";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";

// Customer Routes 
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import Wishlist from "./components/Customer/Wishlist";
import Profile from "./components/Customer/Profile";
import ChangePassword from "./components/Customer/ChangePassword";
import OrderSuccess from "./components/OrderSuccess";
import OrderFailure from "./components/OrderFailure";
import Address from "./components/Customer/Address";
import AddAddress from "./components/Customer/AddAddress";

// Vendor Routes
import VendorRegister from "./components/Vendor/VendorRegister";
import VendorLogin from "./components/Vendor/VendorLogin";
import VendorDashboard from "./components/Vendor/VendorDashboard";
import VendorProducts from "./components/Vendor/VendorProducts";
import AddProduct from "./components/Vendor/AddProduct";
import VendorOrders from "./components/Vendor/VendorOrders";
import VendorPassword from "./components/Vendor/VendorPassword";
import VendorCustomer from "./components/Vendor/VendorCustomer";
import VendorReport from "./components/Vendor/VendorReport";
import VendorProfile from "./components/Vendor/VendorProfile";

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
        <Route path="/customer/profile/" element={<Profile />} />
        <Route path="/customer/change-password/" element={<ChangePassword />} />
        <Route path="/customer/address/" element={<Address />} />
        <Route path="/customer/address/add-address" element={<AddAddress />} />
        {/* Vendor  */}
        <Route path="/vendor/register/" element={<VendorRegister />} />
        <Route path="/vendor/login/" element={<VendorLogin />} />
        <Route path="/vendor/dashboard/" element={<VendorDashboard />} />
        <Route path="/vendor/products/" element={<VendorProducts />} />
        <Route path="/vendor/add-product/" element={<AddProduct />} />
        <Route path="/vendor/orders/" element={<VendorOrders />} />
        <Route path="/vendor/password/" element={<VendorPassword />} />
        <Route path="/vendor/customers/" element={<VendorCustomer />} />
        <Route path="/vendor/reports/" element={<VendorReport />} />
        <Route path="/vendor/profile/" element={<VendorProfile />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
